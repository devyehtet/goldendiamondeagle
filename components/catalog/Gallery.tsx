'use client';
import Image from 'next/image';
import { useRef,useState,useEffect } from 'react';
type Photo = {src:string | null;alt:string};
export default function Gallery({images,label,variant='product'}: {images:Photo[];label:string;variant?:'product'|'installation'}) {
 const [selected,setSelected] = useState(0);
 const dialog = useRef<HTMLDialogElement>(null);
 const [large,setLarge] = useState(0);
 useEffect(()=>{const element=dialog.current;if(!element)return;const close=()=>document.body.style.removeProperty('overflow');element.addEventListener('close',close);return ()=>{element.removeEventListener('close',close);document.body.style.removeProperty('overflow');};},[]);
 const open = (index:number) => {setLarge(index);dialog.current?.showModal();document.body.style.overflow='hidden';};
 return <div><button className={`relative block w-full ${variant==='installation'?'aspect-[4/5] max-h-[380px]':'aspect-square'} bg-white rounded-xl border border-border-subtle overflow-hidden`} aria-label={`Enlarge ${label}`} onClick={()=>open(selected)}><Image src={images[selected].src!} alt={images[selected].alt||label} fill quality={90} sizes="(max-width: 768px) 90vw, 600px" className={`object-contain ${variant==='installation'?'p-2':'p-5'}`} priority={variant==='product'} /><span className="absolute right-4 bottom-4 bg-surface-container-low p-2 rounded-lg material-symbols-outlined text-primary" aria-hidden="true">zoom_in</span></button>{images.length>1 && <div className="flex flex-wrap gap-2 mt-3">{images.map((photo,index)=><button key={photo.src} onClick={()=>setSelected(index)} aria-label={`View image ${index+1} of ${label}`} aria-pressed={selected===index} className={`relative ${variant==='installation'?'w-14 h-14':'w-20 h-20'} rounded-lg border-2 bg-white ${selected===index?'border-primary':'border-border-subtle'}`}><Image src={photo.src!} alt={photo.alt||label} fill sizes="80px" className="object-contain p-1"/></button>)}</div>}
  <dialog ref={dialog} className="photo-dialog" onClick={e=>{if(e.target===e.currentTarget)dialog.current?.close();}}><button aria-label="Close image" onClick={()=>dialog.current?.close()} className="absolute z-10 right-3 top-3 bg-primary text-white rounded-full w-10 h-10 text-xl">×</button><div className="relative w-full h-[78vh]"><Image src={images[large].src!} alt={images[large].alt||label} fill sizes="90vw" quality={90} className="object-contain p-4" /></div><p className="text-center text-sm text-secondary pb-4">{label} · {large+1} / {images.length}</p></dialog>
 </div>;
}
