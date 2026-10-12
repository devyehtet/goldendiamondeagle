import type {Metadata} from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {company,contact} from '@/lib/catalog';
import SolarPackages from '@/components/catalog/SolarPackages';
import PackageCalculator from '@/components/catalog/PackageCalculator';
export const metadata:Metadata={title:'Available Power & Solar Packages',description:'Compare five Golden Diamond Eagle power backup and solar packages, explore equipment and installation photos, and estimate your appliance load.'};
export default function Packages(){
 const installed=company.packages[4].images[1];
 return <main className="pt-[116px]">
  <section className="package-hero"><div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-[1.15fr_1fr] gap-8 lg:gap-12 items-center">
   <div><p className="eyebrow">Solar energy · Power backup</p><h1>Power for your home.<br/><span className="text-primary">A package that fits.</span></h1><p className="package-hero-intro">From everyday essentials to larger solar systems, find a configuration that matches the way you use electricity.</p><p className="font-myanmar text-primary text-sm mt-4 leading-relaxed">သင့်အိမ်၊ သင့်လုပ်ငန်းအတွက် လိုအပ်ချက်နဲ့ ကိုက်ညီတဲ့ စွမ်းအင်စနစ်ကို ရွေးချယ်ပါ။</p><div className="flex flex-wrap gap-3 mt-6"><a href="#compare-packages" className="primary-button">Explore packages <span aria-hidden="true">↓</span></a><a href="#sizing-calculator" className="package-outline-button">Calculate my load</a></div><div className="package-hero-points"><span><span className="material-symbols-outlined" aria-hidden="true">tune</span>5 configurations</span><span><span className="material-symbols-outlined" aria-hidden="true">solar_power</span>Backup & solar options</span><span><span className="material-symbols-outlined" aria-hidden="true">support_agent</span>Local team support</span></div></div>
   <div className="package-hero-photo"><Image src={installed.src!} alt="Golden Diamond Eagle Next Electric inverter and battery installation" fill sizes="(max-width: 1024px) 90vw, 560px" quality={90} className="object-cover object-[center_40%]"/><div className="package-photo-caption"><span className="package-photo-dot"/><div><p className="text-sm font-semibold">Built around your power needs</p><p className="text-xs text-white/75 mt-1">An original Golden Diamond Eagle installation</p></div><span className="material-symbols-outlined ml-auto" aria-hidden="true">electric_bolt</span></div></div>
  </div></section>
  <SolarPackages/>
  <PackageCalculator/>
  <section className="section-shell"><div className="package-help"><div className="flex items-start gap-4"><span className="material-symbols-outlined package-help-icon" aria-hidden="true">support_agent</span><div><h2 className="text-xl font-bold">Let’s find the right configuration.</h2><p className="text-sm text-secondary mt-2 leading-relaxed">Share your appliances, usage hours and location. Our team can help with equipment selection and a current quotation.</p></div></div><div className="flex flex-wrap gap-3 shrink-0"><Link href="/contact?product=Solar%20package%20consultation" className="primary-button">Talk to GDE →</Link><a href={`tel:${contact.phone}`} className="package-outline-button">Call our team</a></div></div></section>
 </main>;
}
