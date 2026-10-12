import type {Metadata} from 'next';
import Catalog from '@/components/catalog/Catalog';
import {categories,categoryAliases,products,topCategories} from '@/lib/catalog';
export const metadata:Metadata = {title:'Product Catalog',description:'Browse the complete Golden Diamond Eagle range of electrical cables, solar inverters, batteries, panels, fittings and lighting.'};
export default async function Products({searchParams}:{searchParams:Promise<{category?:string}>}) {
 const {category:raw} = await searchParams;
 const category = raw ? categoryAliases[raw] || raw : 'all';
 const valid = categories.some(c=>c.slug===category)?category:'all';
 return <main className="pt-[116px]"><section className="page-heading"><div className="max-w-7xl mx-auto"><p className="eyebrow">Electrical power & solar distribution</p><h1>Our complete product range</h1><p className="page-intro">{products.length} products across {topCategories.length} main categories and {categories.length-topCategories.length} subcategories, including electrical cables, inverters, batteries, solar panels, fittings and lighting. Find the right equipment for your home, business or project.</p></div></section><Catalog key={valid} initialCategory={valid}/></main>;
}
