import assert from 'node:assert/strict';
import {readFile,stat} from 'node:fs/promises';
import path from 'node:path';
const root=path.resolve(import.meta.dirname,'..');
const read=async file=>JSON.parse(await readFile(path.join(root,file),'utf8'));
const [source,products,categories,company,sources,metadata]=await Promise.all(['content/source/store-products.json','content/products.json','content/categories.json','content/company.json','content/asset-sources.json','content/image-metadata.json'].map(read));
const sitemap=await readFile(path.join(root,'content/source/product-sitemap.html'),'utf8');
const expectedSlugs=[...sitemap.matchAll(/<loc>https:\/\/goldendiamondeagle\.com\/product\/([^<]+)\/<\/loc>/g)].map(m=>m[1]);
assert.equal(products.length,source.length);assert.equal(products.length,71);
assert.deepEqual(products.map(p=>p.slug).sort(),expectedSlugs.sort());
for(const original of source){
 const product=products.find(p=>p.id===original.id);assert.ok(product);
 assert.equal(product.originalName,original.name.replace(/&#038;/g,'&'));
 assert.deepEqual(product.categories.map(c=>c.slug).sort(),original.categories.map(c=>c.slug).sort());
 assert.deepEqual(product.images.map(i=>i.sourceUrl),original.images.map(i=>i.src));
}
for(const category of categories) assert.equal(products.filter(p=>p.categories.some(c=>c.slug===category.slug)).length,category.count,category.slug);
assert.equal(categories.filter(c=>!c.parent).length,7);
assert.equal(company.packages.length,5);assert.equal(company.images.filter(p=>p.page==='certificates').length,5);
for(const local of Object.values(sources)){assert.ok((await stat(path.join(root,'public',local))).size>0);assert.ok(metadata[local].width>0 && metadata[local].height>0);}
const report={source:'https://goldendiamondeagle.com/',checkedDate:'2026-10-12',sourceProducts:source.length,migratedProducts:products.length,missingProducts:[],productPhotos:products.reduce((sum,p)=>sum+p.images.length,0),topLevelCategories:7,categoriesAndSubcategories:categories.length,packages:company.packages.length,certificates:5,downloadedOriginalAssets:Object.keys(sources).length,originalAssetsWithLongestSideAtLeast1000:Object.values(metadata).filter(m=>Math.max(m.width,m.height)>=1000).length,supplementalImages:1};
await (await import('node:fs/promises')).writeFile(path.join(root,'content/migration-report.json'),JSON.stringify(report,null,2)+'\n');
console.log('PASS: every original product, category assignment and gallery image preserved; sitemap and category counts match.');console.log(report);
if(process.argv.includes('--http')){
 const base='http://127.0.0.1:3001';
 const checks=[['/', 'Your trusted partner'],['/products','Our complete product range'],['/about','Nweni Htay Win'],['/solar-packages','645,000'],['/certificates','Certificates &'],['/contact','Yangon office'],...products.map(p=>['/products/'+p.slug,p.name])];
 for(let start=0;start<checks.length;start+=8)await Promise.all(checks.slice(start,start+8).map(async([url,text])=>{const response=await fetch(base+url);assert.equal(response.status,200,url);const body=await response.text();const encoded=text.replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll("'",'&#x27;');assert.ok(body.includes(encoded)||body.includes(text),url+' missing expected content');}));
 const notFound=await fetch(base+'/products/not-an-existing-product');assert.equal(notFound.status,404);
 console.log(`PASS: ${checks.length} website routes returned expected content; unknown product returns 404.`);
}
