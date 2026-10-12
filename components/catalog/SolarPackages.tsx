'use client';
import Link from 'next/link';
import {useEffect,useState} from 'react';
import {company} from '@/lib/catalog';
import Gallery from '@/components/catalog/Gallery';
const slugFor=(name:string)=>name.toLowerCase().replaceAll(' ','-');
const themes=[{icon:'home',purpose:'Everyday essentials',type:'Power backup'},{icon:'weekend',purpose:'More home appliances',type:'Power backup'},{icon:'solar_power',purpose:'Home solar & backup',type:'Solar & backup'},{icon:'apartment',purpose:'Larger power requirements',type:'Solar & backup'},{icon:'domain',purpose:'High-capacity systems',type:'Solar & backup'}];
function equipmentRows(text:string){
 const markers=[...text.matchAll(/(?:^| )(Inverter|Battery|Jinko Solar|Solar Cable)\s*[-–]\s*/g)];
 return markers.map((marker,index)=>({label:marker[1]==='Jinko Solar'?'Solar panels':marker[1],value:text.slice(marker.index!+marker[0].length,markers[index+1]?.index??text.length).trim()}));
}
export default function SolarPackages(){
 const [selected,setSelected]=useState(0);
 useEffect(()=>{const followHash=()=>{const index=company.packages.findIndex(p=>`#${slugFor(p.name)}`===window.location.hash);if(index!==-1){setSelected(index);requestAnimationFrame(()=>document.getElementById(slugFor(company.packages[index].name))?.scrollIntoView({block:'start'}));}};followHash();window.addEventListener('hashchange',followHash);return()=>window.removeEventListener('hashchange',followHash);},[]);
 const choose=(index:number)=>{setSelected(index);window.history.replaceState(null,'',`#${slugFor(company.packages[index].name)}`);};
 return <section className="section-shell package-selection" id="compare-packages">
  <div className="section-title"><div><p className="eyebrow">Five configurations. One clear choice.</p><h2>Compare our packages</h2></div><a href="#sizing-calculator" className="text-sm text-primary font-semibold inline-flex items-center gap-2"><span className="material-symbols-outlined" aria-hidden="true">calculate</span>Estimate your load</a></div>
  <div className="package-options" role="tablist" aria-label="Choose a power package">
   {company.packages.map((p,index)=><button key={p.name} id={`tab-${slugFor(p.name)}`} role="tab" type="button" aria-selected={selected===index} aria-controls={slugFor(p.name)} tabIndex={selected===index?0:-1} onClick={()=>choose(index)} onKeyDown={event=>{const target=event.key==='ArrowRight'?(index+1)%5:event.key==='ArrowLeft'?(index+4)%5:event.key==='Home'?0:event.key==='End'?4:-1;if(target!==-1){event.preventDefault();choose(target);document.getElementById(`tab-${slugFor(company.packages[target].name)}`)?.focus();}}} className={`package-option ${selected===index?'is-selected':''}`}>
    <span className="package-option-top"><span className="material-symbols-outlined" aria-hidden="true">{themes[index].icon}</span><span className="package-option-type">{themes[index].type}</span></span>
    <span className="package-option-name">{p.name.replace(' Package','')}</span>
    <span className="package-option-power">{p.paragraphs[1].replace(/[()]/g,'').replace(' to ',' – ')}</span>
    <span className="package-option-purpose">{themes[index].purpose}</span>
    <span className="package-option-price-label">Reference range · MMK</span>
    <span className="package-option-price">{p.paragraphs[0].replace('Package Price-','').replace(/[()]/g,'').trim().replace(' to ',' – ')}</span>
    <span className="package-option-footer">{selected===index?'Viewing configuration':'View configuration'} <span aria-hidden="true">{selected===index?'✓':'→'}</span></span>
   </button>)}
  </div>
  <p className="package-price-note"><span className="material-symbols-outlined" aria-hidden="true">info</span>Prices are published reference ranges. Ask our team for current pricing and installation costs.</p>
  {company.packages.map((p,index)=><div key={p.name} id={slugFor(p.name)} role="tabpanel" aria-labelledby={`tab-${slugFor(p.name)}`} hidden={selected!==index} tabIndex={0} className="package-detail">
   <div className="package-detail-grid">
    <div className="package-configuration">
     <div className="flex flex-wrap items-center justify-between gap-3 mb-5"><span className="package-type-badge"><span className="material-symbols-outlined" aria-hidden="true">{themes[index].icon}</span>{themes[index].type}</span><span className="text-xs text-secondary">Configuration 0{index+1} / 05</span></div>
     <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">{p.name}</h3><p className="text-sm text-secondary mt-2">{themes[index].purpose} · {p.paragraphs[1].replace(/[()]/g,'')}</p>
     <dl className="package-equipment">{equipmentRows(p.paragraphs[2]).map(row=><div key={row.label}><dt><span className="material-symbols-outlined" aria-hidden="true">{row.label==='Inverter'?'electric_bolt':row.label==='Battery'?'battery_charging_full':row.label==='Solar panels'?'solar_power':'cable'}</span>{row.label}</dt><dd>{row.value}</dd></div>)}</dl>
     <div className="package-supported-load"><p className="text-xs font-bold text-primary mb-2 uppercase tracking-wider">Appliances & supported load</p><p className="font-myanmar text-sm leading-relaxed text-secondary">{p.paragraphs[3]}</p></div>
     <div className="flex flex-wrap gap-3 mt-5"><Link href={`/contact?product=${encodeURIComponent(p.name)}`} className="primary-button">Get a quotation <span aria-hidden="true">→</span></Link><a href="#sizing-calculator" className="inline-flex items-center px-4 py-3 text-sm font-semibold text-primary">Check my appliances</a></div>
     <details className="package-original"><summary>Original published configuration</summary><div className="font-myanmar">{p.paragraphs.map((text,i)=><p key={i}>{text}</p>)}</div></details>
    </div>
    <div className="package-installation"><div className="flex items-center justify-between gap-3 mb-3"><p className="text-xs font-bold uppercase tracking-wider text-primary">GDE installations & equipment</p><span className="text-xs text-secondary">{p.images.length} photos</span></div><Gallery images={p.images} label={p.name} variant="installation"/><p className="text-xs text-secondary mt-3">Original project photos. Select an image to take a closer look.</p></div>
   </div>
  </div>)}
 </section>;
}
