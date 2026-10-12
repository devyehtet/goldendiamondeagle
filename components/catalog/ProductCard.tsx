import Image from 'next/image';
import Link from 'next/link';
import { categoryFor, type Product } from '@/lib/catalog';
export default function ProductCard({ product }: { product: Product }) {
 const category = categoryFor(product);
 return <article className="product-card group bg-white border border-border-subtle rounded-xl overflow-hidden flex flex-col hover:shadow-lg transition-shadow">
  <Link href={`/products/${product.slug}`} className="relative block aspect-[4/3] bg-white border-b border-border-subtle p-5" aria-label={`View ${product.name}`}>
   <Image src={product.images[0].src!} alt={product.name} fill sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 320px" quality={90} className="object-contain p-5 group-hover:scale-[1.03] transition-transform" />
  </Link>
  <div className="p-4 flex flex-col flex-1 gap-3"><div className="text-[10px] tracking-wider uppercase font-bold text-primary">{category?.name}</div><h3 className="text-[15px] font-bold leading-snug"><Link href={`/products/${product.slug}`}>{product.name}</Link></h3><p className="text-xs text-secondary">{product.categories.filter(c => c.slug !== category?.slug).map(c=>c.name).join(' · ') || 'Electrical & solar equipment'}</p><div className="flex gap-2 mt-auto pt-2"><Link href={`/products/${product.slug}`} className="flex-1 bg-surface-container-low text-primary text-xs text-center font-semibold px-3 py-2.5 rounded-lg hover:bg-surface-container">View details</Link><Link href={`/contact?product=${encodeURIComponent(product.name)}`} className="flex-1 bg-primary text-white text-xs text-center font-semibold px-3 py-2.5 rounded-lg hover:bg-primary-container">Get quote</Link></div></div>
 </article>;
}
