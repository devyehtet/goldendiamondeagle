'use client';
import Link from 'next/link';
import {useState} from 'react';
const loads=[{key:'lights',name:'LED lights',watts:12,icon:'lightbulb'},{key:'fans',name:'Fans',watts:75,icon:'mode_fan'},{key:'tv',name:'TV / monitor',watts:100,icon:'tv'},{key:'router',name:'Wi-Fi router',watts:15,icon:'router'},{key:'computer',name:'Computer',watts:250,icon:'computer'},{key:'fridge',name:'Refrigerator',watts:150,icon:'kitchen'},{key:'pump',name:'Water pump',watts:750,icon:'water_drop'},{key:'ac',name:'Air conditioner',watts:1200,icon:'ac_unit'}];
export default function PackageCalculator(){
 const [counts,setCounts]=useState<Record<string,number>>({lights:4,fans:2,tv:1,router:1,computer:1,fridge:0,pump:0,ac:0});
 const total=loads.reduce((sum,load)=>sum+load.watts*counts[load.key],0);
 const packageName=total<=1200?'Basic Package':total<=2100?'Pro Package':total<=3200?'Premium Package':total<=6200?'Platinum Package':total<=11000?'Gold Package':'Custom engineering design';
 const slug=packageName.toLowerCase().replaceAll(' ','-');
 return <section id="sizing-calculator" className="package-calculator-section"><div className="section-shell">
  <div className="section-title"><div><p className="eyebrow">A little planning goes a long way</p><h2>What would you like to power?</h2><p className="text-sm text-secondary mt-3">Choose the appliances you plan to run at the same time.</p></div><button type="button" onClick={()=>setCounts(Object.fromEntries(loads.map(load=>[load.key,0])))} className="inline-flex items-center gap-1 text-primary text-xs font-semibold"><span className="material-symbols-outlined" aria-hidden="true">restart_alt</span>Reset appliances</button></div>
  <div className="grid lg:grid-cols-[1.4fr_1fr] gap-5 items-start">
   <div className="grid sm:grid-cols-2 gap-3">{loads.map(load=><div className={`package-appliance ${counts[load.key]>0?'is-active':''}`} key={load.key}>
    <span className="material-symbols-outlined package-appliance-icon" aria-hidden="true">{load.icon}</span><div className="flex-1 min-w-0"><p className="text-sm font-semibold">{load.name}</p><p className="text-xs text-secondary mt-1">Approx. {load.watts} W each</p></div>
    <div className="package-counter"><button type="button" aria-label={`Decrease ${load.name}`} disabled={counts[load.key]===0} onClick={()=>setCounts(old=>({...old,[load.key]:Math.max(0,old[load.key]-1)}))}>−</button><output aria-label={`${load.name} count`}>{counts[load.key]}</output><button type="button" aria-label={`Increase ${load.name}`} disabled={counts[load.key]===100} onClick={()=>setCounts(old=>({...old,[load.key]:Math.min(100,old[load.key]+1)}))}>+</button></div>
   </div>)}</div>
   <div className="package-load-result"><div className="flex justify-between items-center"><p className="text-xs uppercase tracking-wider font-semibold text-white/65">Estimated running load</p><span className="material-symbols-outlined text-solar-amber" aria-hidden="true">electric_bolt</span></div><p className="package-wattage" id="calc-watts" aria-live="polite">{total.toLocaleString()} <span>W</span></p><div className="package-result-recommendation"><p className="text-xs text-white/60 mb-2">A starting point for your system</p><h3 className="text-xl font-bold" id="calc-package-title" aria-live="polite">{total===0?'Choose your appliances':packageName}</h3>{total>0&&total<=11000&&<a href={`#${slug}`} className="text-sm text-amber-300 inline-flex gap-2 mt-3">View configuration <span aria-hidden="true">→</span></a>}</div><p className="text-xs leading-relaxed text-white/70 mt-5 mb-5">This estimate uses approximate appliance wattages. Motor startup loads, actual ratings and battery runtime need a review by our team.</p><Link href={`/contact?product=${encodeURIComponent('Solar package — estimated load '+total+' W')}`} className="amber-button w-full">Help me size my system →</Link></div>
  </div>
 </div></section>;
}
