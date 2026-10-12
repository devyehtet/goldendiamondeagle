from html.parser import HTMLParser
from pathlib import Path
import html,re,json
class Node:
 def __init__(self,tag='root',attrs=()):self.tag=tag;self.attrs=dict(attrs);self.children=[]
 def walk(self):
  yield self
  for c in self.children:
   if isinstance(c,Node):yield from c.walk()
 def text(self):
  if self.tag in {'style','script'}:return ''
  return ' '.join(' '.join(c.text() if isinstance(c,Node) else c for c in self.children).split())
 def has(self,cls):return cls in self.attrs.get('class','').split()
class Tree(HTMLParser):
 def __init__(self,s):
  super().__init__();self.root=Node();self.stack=[self.root];self.feed(s)
 def handle_starttag(self,t,a):
  n=Node(t,a);self.stack[-1].children.append(n)
  if t not in {'area','base','br','col','embed','hr','img','input','link','meta','param','source','track','wbr'}:self.stack.append(n)
 def handle_endtag(self,t):
  for i in range(len(self.stack)-1,0,-1):
   if self.stack[i].tag==t:self.stack=self.stack[:i];break
 def handle_data(self,s):self.stack[-1].children.append(s)
def page(name):
 root=Tree(Path('content/source/'+name+'.html').read_text()).root
 return next(n for n in root.walk() if n.attrs.get('data-elementor-type')=='wp-page')
if __name__=='__main__':
 for name in ['about','packages','certificates','home']:
  print('\nPAGE',name)
  for n in page(name).walk():
   kind=n.attrs.get('data-widget_type','')
   if kind and (kind.startswith(('heading','text-editor','ha-data-table'))):print(kind,n.text()[:1800])
