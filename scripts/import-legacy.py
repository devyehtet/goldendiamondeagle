"""Build a complete catalog from the archived public WooCommerce Store API."""
import importlib.util,json,re,html,hashlib
from pathlib import Path
from urllib.parse import urlparse,unquote
spec=importlib.util.spec_from_file_location('legacy',Path(__file__).with_name('legacy-tree.py'));legacy=importlib.util.module_from_spec(spec);spec.loader.exec_module(legacy)
root=Path(__file__).resolve().parents[1]
assets={}
def asset(url):
 url=html.unescape(url)
 if url.startswith('//'):url='https:'+url
 if not url.startswith('https://goldendiamondeagle.com/wp-content/uploads/'):return None
 name=unquote(urlparse(url).path.rsplit('/',1)[-1]);name=re.sub(r'[^A-Za-z0-9._-]','-',name)
 local='/images/legacy/'+hashlib.sha256(url.encode()).hexdigest()[:8]+'-'+name
 assets[url]=local
 return local
def image(node):
 url=node.attrs.get('src','')
 variants=re.findall(r'(https://\S+)\s+(\d+)w',node.attrs.get('srcset',''))
 if variants:url=max(variants,key=lambda v:int(v[1]))[0]
 return {'src':asset(url),'alt':node.attrs.get('alt',''),'sourceUrl':url}
raw=json.loads((root/'content/source/store-products.json').read_text())
products=[]
for p in raw:
 name=html.unescape(p['name']);display=re.sub(r'[-_]+',' ',name).strip();display=re.sub(r'\s+',' ',display)
 display=display.replace('removebg preview','').replace('Gargen','Garden').strip()
 categories=[{'name':html.unescape(c['name']).replace('Volatage','Voltage'),'slug':c['slug']} for c in p['categories']]
 images=[{'src':asset(i['src']),'alt':i['alt'] or display,'sourceUrl':i['src']} for i in p['images']]
 description=legacy.Tree(p['description']).root.text()
 if description in ['Description','LF Automotive All']:description=''
 products.append({'id':p['id'],'slug':p['slug'],'name':display,'originalName':name,'sourceUrl':p['permalink'],'categories':categories,'images':images,'description':description,'shortDescription':legacy.Tree(p['short_description']).root.text(),'sku':p['sku']})
products.sort(key=lambda p:p['name'].casefold())
categories=json.loads((root/'content/source/categories.html').read_text())
categories=[{'id':c['id'],'name':html.unescape(c['name']).replace('Volatage','Voltage'),'slug':c['slug'],'parent':c['parent'],'count':c['count']} for c in categories if c['count']]
blocks=[]
for n in legacy.page('about').walk():
 kind=n.attrs.get('data-widget_type','')
 if kind.startswith('heading'):
  title=next((c.text() for c in n.walk() if c.tag in ['h1','h2','h3','h4']),n.text())
  if title:blocks.append({'type':'heading','text':title})
 elif kind.startswith('text-editor') and n.text():
  paragraphs=[c.text() for c in n.walk() if c.tag=='p' and c.text()]
  blocks.append({'type':'paragraph','text':n.text(),'paragraphs':paragraphs or [n.text()]})
 elif kind.startswith('ha-data-table'):
  rows=[[c.text() for c in row.walk() if c.tag in ['td','th']] for row in n.walk() if row.tag=='tr']
  blocks.append({'type':'table','rows':rows})
packages=[];current=None
for n in legacy.page('packages').walk():
 kind=n.attrs.get('data-widget_type','')
 if kind.startswith('heading') and 'Package' in n.text() and re.match(r'\(\d\)',n.text()):
  current={'name':re.sub(r'^\(\d\)\s*','',n.text()),'paragraphs':[],'images':[]};packages.append(current)
 elif current and kind.startswith('text-editor') and n.text():
  parts=[c.text() for c in n.walk() if c.tag=='p' and c.text()]
  current['paragraphs'].extend(parts or [n.text()])
 elif current and kind.startswith('image-gallery'):
  for a in n.walk():
   if a.tag=='a' and '/uploads/' in a.attrs.get('href',''):
    u=a.attrs['href'];current['images'].append({'src':asset(u),'alt':current['name']+' installation','sourceUrl':u})
companyImages=[]
for key in ['home','certificates']:
 page=legacy.page(key)
 for n in page.walk():
  if n.tag=='img' and '/uploads/' in n.attrs.get('src',''):
   data=image(n);data['page']=key
   companyImages.append(data)
 # Slider photographs are stored in lazyload attributes rather than image src.
 for u in re.findall(r'data-lazyload="([^"]+uploads/[^"]+)"',(root/f'content/source/{key}.html').read_text()):
  companyImages.append({'src':asset(u),'sourceUrl':u,'alt':'Golden Diamond Eagle electrical and solar solutions','page':key})
logo=asset('https://goldendiamondeagle.com/wp-content/uploads/2021/08/Frame_25-removebg-preview-1-1.png')
(root/'content/products.json').write_text(json.dumps(products,ensure_ascii=False,indent=2))
(root/'content/company.json').write_text(json.dumps({'about':blocks,'packages':packages,'images':companyImages,'logo':logo},ensure_ascii=False,indent=2))
(root/'content/categories.json').write_text(json.dumps(categories,ensure_ascii=False,indent=2))
(root/'content/asset-sources.json').write_text(json.dumps(assets,indent=2))
print(f'{len(products)} products, {len(categories)} categories/subcategories, {len(packages)} packages, {len(assets)} original assets.')
