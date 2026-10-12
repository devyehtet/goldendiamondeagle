'use client';
import { useEffect, useRef, useState, type ReactNode, type FormEvent } from 'react';

type CategoryState = { category: string; stock: string; search: string };
export default function ScreenInteractions({ children, initialCategory = 'all' }: { children: ReactNode; initialCategory?: string }) {
 const root = useRef<HTMLDivElement>(null);
 const [filters, setFilters] = useState<CategoryState>({category: initialCategory, stock: 'all', search: ''});
 const [sort, setSort] = useState('recommended');
 const [appliances, setAppliances] = useState<Record<string, number>>({ ac: 1, fridge: 1, pump: 1, base: 1, blackout: 8 });
 const [datasheet, setDatasheet] = useState<string | null>(null);
 const [emailDraft, setEmailDraft] = useState('');
 const [attachment, setAttachment] = useState('');
 const closeDialog = useRef<HTMLButtonElement>(null);
 useEffect(() => { if (datasheet) closeDialog.current?.focus(); }, [datasheet]);
 useEffect(() => {
  const container = root.current;
  if (!container) return;
  let count = 0;
  container.querySelectorAll<HTMLElement>('.product-item, .package-card').forEach(card => {
   const visible = (filters.category === 'all' || card.dataset.category === filters.category) && (filters.stock === 'all' || card.dataset.stock === filters.stock) && (!filters.search || card.textContent?.toLowerCase().includes(filters.search));
   card.style.display = visible ? 'flex' : 'none';
   if (visible) count++;
  });
  const countEl = container.querySelector('#productCount');
  if (countEl) countEl.textContent = `Showing ${count} Certified Product${count === 1 ? '' : 's'}`;
  const noResults = container.querySelector('#noResultsMsg');
  noResults?.classList.toggle('hidden', count !== 0);
  noResults?.classList.toggle('flex', count === 0);
  container.querySelectorAll<HTMLElement>('.filter-btn, .cat-nav-btn, .filter-tab, .stock-filter-btn').forEach(button => {
   const stock = button.classList.contains('stock-filter-btn');
   const category = button.dataset.cat || button.dataset.category || button.dataset.filter;
   const active = category === (stock ? filters.stock : filters.category);
   button.classList.toggle('bg-primary', active); button.classList.toggle('text-on-primary', active);
   button.classList.toggle('bg-surface-card', !active); button.classList.toggle('text-on-surface', !active);
   button.setAttribute('aria-pressed', String(active));
  });
 }, [filters]);
 useEffect(() => {
  const grid = root.current?.querySelector('#catalogGrid');
  if (!grid) return;
  const cards = Array.from(grid.querySelectorAll<HTMLElement>('.product-item'));
  cards.forEach((card, index) => { if (!card.dataset.order) card.dataset.order = String(index); });
  const spec = (card: HTMLElement, unit: string) => {
   const match = card.textContent?.match(new RegExp('(\\d+(?:\\.\\d+)?)\\s*' + unit, 'i'));
   return match ? Number(match[1]) : 0;
  };
  cards.sort((a,b) => sort === 'power' ? spec(b,'kW') - spec(a,'kW') : sort === 'voltage' ? spec(b,'V') - spec(a,'V') : Number(a.dataset.order) - Number(b.dataset.order)).forEach(card => grid.appendChild(card));
 }, [sort]);
 useEffect(() => {
  const container = root.current;
  if (!container?.querySelector('#sizing-calculator')) return;
  const watts = appliances.ac * 1200 + appliances.fridge * 350 + appliances.pump * 750 + appliances.base * 500;
  const tiers = [
   ['Basic Package (3kW – 5kW Off-Grid)', 'လူနေအိမ်သုံး မီး၊ ပန်ကာ၊ ရေခဲသေတ္တာအတွက် သင့်လျော်သောအခြေခံစနစ်', '4.8 kWh Tubular / Gel', '~180,000 MMK+'],
   ['Pro Package (6kW – 8kW Hybrid)', 'အိမ်၊ ဆေးခန်းနှင့် ရုံးခန်းများအတွက် ဆိုလာစနစ်', '10.24 kWh LiFePO4', '~420,000 MMK+'],
   ['Premium Package (10kW – 15kW Commercial 3-Phase)', 'ဆီဆိုင်၊ မီနီမတ်နှင့် အဆင့်မြင့်အိမ်များအတွက်', '15 kWh – 20 kWh High-Voltage', '~850,000 MMK+'],
   ['Gold Package (20kW – 30kW Heavy Commercial)', 'ကုန်တိုက်၊ သိုလှောင်ရုံနှင့် အလုပ်ရုံများအတွက်', '30 kWh – 50 kWh Modular Rack', '~1,800,000 MMK+'],
   ['Platinum Package (50kW – 100kW+ Industrial Turnkey)', 'စက်ရုံကြီးများအတွက် ဆိုလာစနစ်', '100 kWh+ BESS Cabinet', '~4,500,000 MMK+'],
  ];
  const tier = tiers[watts <= 1500 && appliances.ac === 0 ? 0 : watts <= 4000 ? 1 : watts <= 9000 ? 2 : watts <= 18000 ? 3 : 4];
  const values: Record<string, string> = { 'calc-package-title': tier[0], 'calc-package-desc': tier[1], 'calc-battery-size': tier[2], 'calc-fuel-savings': tier[3], 'calc-daily-kwh': `${(watts * 0.65 * appliances.blackout / 1000).toFixed(1)} kWh`, 'blackout-val': `${appliances.blackout} Hours / Day` };
  Object.entries(appliances).forEach(([key,value]) => { values[`count-${key}`] = String(value); });
  Object.entries(values).forEach(([id,value]) => { const element = container.querySelector(`#${id}`); if (element) element.textContent = value; });
 }, [appliances]);
 function submit(event: FormEvent<HTMLDivElement>) {
  if (!(event.target instanceof HTMLFormElement)) return;
  event.preventDefault();
  const data = new FormData(event.target);
  const body = ['Wholesale quotation request', ...Array.from(data.entries()).filter(([,v]) => typeof v === 'string').map(([k,v]) => `${k.replaceAll('-', ' ')}: ${v}`)].join('\n');
  setEmailDraft(`mailto:goldendiamondeagle@gmail.com?subject=${encodeURIComponent('GDE Wholesale Quotation Request')}&body=${encodeURIComponent(body)}`);
  event.target.querySelector('#form-feedback')?.classList.remove('hidden');
 }
 return <div ref={root} onSubmit={submit} onClick={event => {
  const button = (event.target as HTMLElement).closest<HTMLButtonElement>('button');
  if (!button) return;
  if (button.matches('.filter-btn, .cat-nav-btn, .filter-tab')) setFilters(old => ({...old, category: button.dataset.cat || button.dataset.category || button.dataset.filter || 'all'}));
  if (button.matches('.stock-filter-btn')) setFilters(old => ({...old, stock: button.dataset.filter || 'all'}));
  if (button.matches('.faq-trigger')) {
   const content = button.nextElementSibling as HTMLElement | null;
   const expanded = button.getAttribute('aria-expanded') !== 'true';
   button.setAttribute('aria-expanded',String(expanded));
   if (content) content.style.display = expanded ? 'block' : 'none';
   const icon = button.querySelector('.faq-icon'); if (icon) icon.textContent = expanded ? 'expand_less' : 'expand_more';
  }
  if (button.matches('.calc-btn-inc, .calc-btn-dec')) { const key = button.dataset.target; if (key) setAppliances(old => ({...old,[key]:Math.max(0, Math.min(100, old[key] + (button.classList.contains('calc-btn-inc') ? 1 : -1)))})); }
  if (button.dataset.action === 'reset-filters') { setFilters({category:'all',stock:'all',search:''}); const search = root.current?.querySelector<HTMLInputElement>('#catalogSearch'); if (search) search.value = ''; }
  if (button.dataset.action === 'request-datasheet') setDatasheet(button.closest('article')?.querySelector('h3')?.textContent || 'Product');
 }} onInput={event => {
  const input = event.target as HTMLInputElement;
  if (input.id === 'catalogSearch') setFilters(old => ({...old,search:input.value.trim().toLowerCase()}));
  if (input.id === 'blackout-slider') setAppliances(old => ({...old,blackout:Number(input.value)}));
 }} onChange={event => { const element = event.target; if (element instanceof HTMLSelectElement && element.dataset.action === 'sort-products') setSort(['recommended','power','voltage'][element.selectedIndex]); if (element instanceof HTMLInputElement && element.type === 'file') setAttachment(element.files?.[0]?.name || ''); }}>
  {children}
  {attachment && <p className="max-w-7xl mx-auto px-6 py-3 text-secondary" role="status">Selected: {attachment}. Attach this document in your email app before sending.</p>}
  {emailDraft && <div role="status" className="email-draft bg-surface-card border border-border-subtle shadow-xl p-5 rounded-xl"><p className="font-semibold text-primary mb-2">Inquiry prepared — send it from your email app.</p><p className="text-sm text-secondary mb-3">Attachments must be added in your email app.</p><a className="inline-block bg-primary text-white rounded-lg px-4 py-2" href={emailDraft}>Open email draft</a><button className="ml-4 text-secondary" onClick={() => setEmailDraft('')}>Close</button></div>}
  {datasheet && <div className="fixed inset-0 bg-black/40 z-[70] flex items-center justify-center px-6" onKeyDown={e => {if(e.key === 'Escape') setDatasheet(null);}}><div role="dialog" aria-modal="true" aria-labelledby="datasheet-title" className="bg-white p-7 rounded-xl shadow-2xl max-w-md" onKeyDown={e => {if(e.key === 'Tab') {const focusable = e.currentTarget.querySelectorAll<HTMLElement>('a, button'); const first = focusable[0]; const last = focusable[focusable.length - 1]; if(e.shiftKey && document.activeElement === first) {e.preventDefault();last.focus();} else if(!e.shiftKey && document.activeElement === last) {e.preventDefault();first.focus();}}}}><h2 id="datasheet-title" className="text-lg font-bold">Request an official datasheet</h2><p className="text-secondary my-4">The original design does not include a downloadable datasheet for {datasheet}. Contact GDE for the latest specifications.</p><a className="text-primary underline" href={`mailto:goldendiamondeagle@gmail.com?subject=${encodeURIComponent('Datasheet request: '+datasheet)}`}>Request by email</a><button ref={closeDialog} className="ml-4 px-4 py-2 bg-primary text-white rounded-lg" onClick={() => setDatasheet(null)}>Close</button></div></div>}
 </div>;
}
