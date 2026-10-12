"""Convert the downloaded Stitch exports to native React components."""
from html.parser import HTMLParser
from pathlib import Path
import re,json,html
root=Path(__file__).resolve().parents[1]
assets=json.loads((root/'stitch/assets.json').read_text())
class Node:
 def __init__(self,tag,attrs): self.tag=tag; self.attrs=dict(attrs); self.children=[]
class Parser(HTMLParser):
 def __init__(self): super().__init__(convert_charrefs=True); self.root=Node('root',[]); self.stack=[self.root]
 def handle_starttag(self,tag,attrs):
  n=Node(tag,attrs); self.stack[-1].children.append(n)
  if tag not in void: self.stack.append(n)
 def handle_startendtag(self,tag,attrs): self.handle_starttag(tag,attrs); self.handle_endtag(tag)
 def handle_endtag(self,tag):
  for i in range(len(self.stack)-1,0,-1):
   if self.stack[i].tag==tag: self.stack=self.stack[:i]; break
 def handle_data(self,data): self.stack[-1].children.append(data)
void={'area','base','br','col','embed','hr','img','input','link','meta','param','source','track','wbr'}
routes={'home':'/','products':'/products','solar-packages':'/solar-packages','contact':'/contact','contact-us':'/contact','about-us':'/about','electrical':'/products?category=electrical','electrical-goods':'/products?category=electrical','inverters':'/products?category=inverters','batteries':'/products?category=batteries','certificates':'/about#certifications'}
anchors={'products':'/products','packages':'/solar-packages','contact':'/contact','about':'/about','certificates':'/about#certifications','electrical':'/products?category=electrical','inverters':'/products?category=inverters','batteries':'/products?category=batteries'}
rename={'class':'className','for':'htmlFor','tabindex':'tabIndex','readonly':'readOnly','maxlength':'maxLength','colspan':'colSpan','rowspan':'rowSpan','frameborder':'frameBorder','allowfullscreen':'allowFullScreen','crossorigin':'crossOrigin','srcset':'srcSet'}
boolean={'required','disabled','multiple','readOnly','autoFocus','allowFullScreen'}
def render(n):
 if isinstance(n,str):
  n=n.replace('Click to upload BOQ or SLD', 'Choose a document to attach in your email app').replace('Upload PDF, Excel, DWG or Image', 'Choose BOQ document for your inquiry').replace('Max 15MB · Tender specs & equipment schedules', 'Add this file manually in your email app; no upload occurs here.').replace('Submit Direct Inquiry / ပို့ဆောင်ရန်', 'Prepare Email Inquiry / အီးမေးလ်ပြင်ရန်')
  return '{'+json.dumps(n,ensure_ascii=False)+'}' if n.strip() else '\n'
 if n.tag in ['script','style']: return ''
 attrs=n.attrs.copy()
 if 'faq-icon' in attrs.get('class',''): n.children=['expand_less']
 if 'material-symbols-outlined' in attrs.get('class',''): attrs['aria-hidden']='true'
 if n.tag=='a':
  if 'data-path' in attrs: attrs['href']=routes.get(attrs['data-path'],'/')
  elif attrs.get('href','').startswith('#'):
   anchor=attrs['href'][1:]
   if anchor in anchors: attrs['href']=anchors[anchor]
   elif not anchor: attrs['href']='/'
  if attrs.get('target')=='_blank': attrs['rel']='noopener noreferrer'
 if n.tag=='img':
  attrs['src']=assets.get(attrs.get('src'),attrs.get('src')); attrs['loading']='lazy'; attrs['decoding']='async'
 if 'onclick' in attrs:
  attrs['data-action']='reset-filters' if 'resetAllFilters' in attrs['onclick'] else 'request-datasheet'
 if n.tag in ['input','textarea','select'] and attrs.get('id'): attrs['name']=attrs['id']
 if n.tag=='input' and attrs.get('type')=='file': attrs['aria-label']='Choose BOQ document'; attrs['data-action']='attachment'; attrs['class']='sr-only'
 if n.tag=='input' and 'value' in attrs: attrs['defaultValue']=attrs.pop('value')
 if n.tag=='main' and 'catalogGrid' not in attrs.get('id','') and 'class' in attrs and 'col-span' in attrs['class']: n.tag='div'
 if n.tag=='select' and attrs.get('required') is not None: attrs['defaultValue']=''
 if n.tag=='select' and not attrs.get('id'): attrs['aria-label']='Sort products'; attrs['data-action']='sort-products'
 if n.tag=='button' and 'faq-trigger' in attrs.get('class',''): attrs['aria-expanded']='true'
 if n.tag=='button' and ('calc-btn-' in attrs.get('class','')): attrs['aria-label']=('Increase ' if 'inc' in attrs['class'] else 'Decrease ')+attrs['data-target']+' count'
 if n.tag=='option' and 'selected' in attrs: attrs.pop('selected')
 out=[]
 for key,value in attrs.items():
  if key.startswith('on'): continue
  key=rename.get(key,key)
  if key=='style':
   styles={}
   for entry in value.split(';'):
    if ':' not in entry: continue
    k,v=entry.split(':',1); k=re.sub(r'-([a-z])',lambda m:m[1].upper(),k.strip()); styles[k]=v.strip()
   out.append('style={'+json.dumps(styles)+'}')
  elif key in boolean: out.append(key)
  elif key in {'rows','cols','maxLength','minLength','tabIndex','colSpan','rowSpan'}: out.append(key+'={'+str(int(value))+'}')
  else: out.append(key+'={'+json.dumps(value if value is not None else '',ensure_ascii=False)+'}')
 opening='<'+n.tag+(' '+' '.join(out) if out else '')
 if n.tag in void: return opening+' />'
 return opening+'>'+''.join(render(c) for c in n.children)+'</'+n.tag+'>'
def find(n,tag):
 if isinstance(n,str): return None
 if n.tag==tag:return n
 for c in n.children:
  result=find(c,tag)
  if result:return result
names=['HomeScreen','ProductsScreen','PackagesScreen','ContactScreen','AboutScreen']
(root/'components/screens').mkdir(parents=True,exist_ok=True)
for i,name in enumerate(names,1):
 source=(root/f'stitch/gde-{i}.html').read_text(); p=Parser(); p.feed(source)
 main=find(p.root,'main')
 if i==4:
  # The original mock form claims a successful submission without a backend.
  # Replace its feedback with a truthful email handoff.
  def adjust(n):
   if isinstance(n,str):return
   if n.attrs.get('id')=='form-feedback':
    n.children=['Your inquiry is ready. Open the email draft below, attach your BOQ if needed, then send it from your email app.']; n.attrs['role']='status'
   for c in n.children:adjust(c)
  adjust(main)
 (root/f'components/screens/{name}.tsx').write_text('export default function '+name+'() {\nreturn (\n'+render(main)+'\n);\n}\n')
 if i==5: (root/'components/Footer.tsx').write_text('export default function Footer() { return ('+render(find(p.root,'footer'))+'); }\n')
config=re.search(r'<script id="tailwind-config">tailwind.config=(.*?);</script>',(root/'stitch/gde-1.html').read_text(),re.S)[1]
(root/'tailwind.config.js').write_text('module.exports = { ...'+config+', content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"], plugins: [require("@tailwindcss/forms"), require("@tailwindcss/container-queries")] };\n')
print('Generated five native React screen components and shared footer.')
