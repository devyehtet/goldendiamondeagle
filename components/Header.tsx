'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import {company} from '@/lib/catalog';
const links = [
 ['Home', '/'], ['About GDE', '/about'], ['Products', '/products'], ['Solar Packages', '/solar-packages'], ['Electrical Goods', '/products?category=electrical-products'], ['Certificates', '/certificates'], ['Contact Us', '/contact'],
];
export default function Header() {
 const pathname = usePathname();
 const [open, setOpen] = useState(false);
 return <header className="fixed top-0 inset-x-0 z-50 bg-surface/95 backdrop-blur-xl border-b border-border-subtle shadow-sm">
  <div className="bg-surface-container-low border-b border-border-subtle">
   <div className="max-w-7xl mx-auto px-4 sm:px-6 h-9 flex items-center justify-between gap-3 text-[11px] text-secondary">
    <span className="truncate flex items-center gap-1"><span className="material-symbols-outlined text-[15px] text-tertiary" aria-hidden="true">location_on</span>E-32, Sagawah St (3), FMI City, Hlaing Tharyar, Yangon</span>
    <div className="shrink-0 flex items-center gap-3"><a className="text-primary font-semibold" href="tel:+959957933180">(+959) 957933180</a><a className="hidden lg:inline" href="mailto:goldendiamondeagle@gmail.com">goldendiamondeagle@gmail.com</a><span className="hidden sm:inline border-l border-border-subtle pl-3">EN / မြန်မာ</span></div>
   </div>
  </div>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-3">
   <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-2 shrink-0" aria-label="Golden Diamond Eagle home"><img src={company.logo!} alt="" className="h-12 w-14 rounded object-contain" /><div><span className="block font-black text-[13px] sm:text-[16px] tracking-tight">GOLDEN DIAMOND EAGLE</span><span className="block text-[9px] sm:text-[10px] font-bold tracking-wider text-primary uppercase">Co., Ltd. · Solar & Electrical Wholesale</span><span className="hidden sm:block text-[10px] text-secondary font-myanmar">ယုံကြည်စိတ်ချရဆုံး လျှပ်စစ်နှင့် ဆိုလာလက်တွဲဖော်</span></div></Link>
   <nav aria-label="Main navigation" className="hidden xl:flex items-center gap-3 text-[11px] font-medium">{links.map(([label, href]) => <Link key={href} href={href} aria-current={pathname === href ? 'page' : undefined} className={`${pathname === href ? 'text-primary font-bold' : href === '/solar-packages' ? 'text-solar-amber font-semibold' : 'text-secondary'} hover:text-primary transition-colors`}>{label}</Link>)}</nav>
   <div className="flex items-center gap-2"><Link href="/contact" className="hidden sm:inline-flex items-center gap-1 bg-primary text-white px-3 py-2.5 rounded-lg text-[11px] font-semibold hover:bg-primary-container"><span className="material-symbols-outlined text-[17px]" aria-hidden="true">request_quote</span>Get Wholesale Quote</Link><button type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close navigation' : 'Open navigation'} className="xl:hidden bg-surface-container-low p-2 rounded-lg text-primary"><span className="material-symbols-outlined" aria-hidden="true">{open ? 'close' : 'menu'}</span></button></div>
  </div>
  {open && <nav id="mobile-menu" aria-label="Mobile navigation" className="xl:hidden border-t border-border-subtle bg-surface-card px-6 py-4 grid gap-1 max-h-[70vh] overflow-auto">{links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)} className="px-3 py-3 rounded-lg text-sm hover:bg-surface-container-low text-primary">{label}</Link>)}<a href="tel:+959957933180" className="px-3 py-3 font-semibold">Call Sales · (+959) 957933180</a></nav>}
 </header>;
}
