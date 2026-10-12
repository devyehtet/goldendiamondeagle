export default function ProductsScreen() {
return (
<main className={"w-full pt-[116px] bg-surface-canvas"}><div className={"flex flex-col w-full"}>

<section className={"w-full bg-primary text-on-primary shadow-sm"}>
<div className={"max-w-7xl mx-auto px-6 py-space-lg flex flex-col md:flex-row md:items-center justify-between gap-space-md"}>
<div className={"flex flex-col gap-1"}>
<div className={"flex items-center gap-space-xs font-label-mono-spec text-label-mono-spec uppercase tracking-wider text-primary-fixed"}>
<span className={"inline-flex items-center gap-1 bg-primary-container px-2 py-0.5 rounded text-[11px] font-bold text-on-primary-container"}>
<span className={"material-symbols-outlined text-[14px]"} aria-hidden={"true"}>{"verified"}</span>{" B2B IMPORTER\n          "}</span>
<span>{"Home"}</span>
<span className={"opacity-60"}>{"/"}</span>
<span className={"text-white font-semibold"}>{"Product Catalog & Wholesale Pricing"}</span>
</div>
<h1 className={"font-headline-lg text-headline-lg tracking-tight font-extrabold text-white"}>{"\n          Electrical Power & Certified Solar Hardware\n        "}</h1>
<p className={"font-body-md text-body-md text-primary-fixed max-w-3xl"}>{"\n          Myanmar Direct Importer · High / MV / LV Power Cables, PC Wire, Tier-1 Solar Inverters, LiFePO4 Energy Storage & Heavy BOS Hardware. Immediate dispatch from Hlaing Tharyar Logistics Hub.\n        "}</p>
</div>

<div className={"flex flex-wrap items-center gap-space-xs shrink-0"}>
<a className={"inline-flex items-center gap-2 bg-[#7360F2] text-white px-4 py-2.5 rounded shadow-sm hover:opacity-90 font-label-mono-spec text-label-mono-spec font-bold transition-transform active:scale-95"} href={"https://invite.viber.com/?g2=AQBL3Uw94Ep4qE7tS7yPEErHa5w1BRUcuxQHFfsZQLah3bkPINFLs3iUY9KGOXNJ"} rel={"noopener noreferrer"} target={"_blank"}>
<span className={"material-symbols-outlined text-[18px]"} aria-hidden={"true"}>{"forum"}</span>
<span>{"VIBER WHOLESALE"}</span>
</a>
<a className={"inline-flex items-center gap-2 bg-solar-amber text-on-surface px-4 py-2.5 rounded shadow-sm hover:brightness-105 font-label-mono-spec text-label-mono-spec font-bold transition-transform active:scale-95"} href={"tel:+959957933180"}>
<span className={"material-symbols-outlined text-[18px]"} aria-hidden={"true"}>{"call"}</span>
<span>{"HOTLINE (+959) 957933180"}</span>
</a>
</div>
</div>
</section>

<section className={"w-full bg-surface-container-low"}>
<div className={"max-w-7xl mx-auto px-6 py-space-md"}>
<div className={"grid grid-cols-1 lg:grid-cols-12 gap-space-md items-center"}>

<div className={"lg:col-span-7 relative"}>
<span className={"material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-outline text-[20px]"} aria-hidden={"true"}>{"search"}</span>
<input className={"w-full h-11 pl-11 pr-4 rounded bg-surface-card text-on-surface placeholder:text-outline text-body-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:bg-surface"} id={"catalogSearch"} placeholder={"Search by model, brand, spec (e.g. Next Electric, Solis, 51.2V LiFePO4, AIKO 675W, XLPE 33kV...)"} type={"text"} name={"catalogSearch"} />
</div>

<div className={"lg:col-span-5 flex flex-wrap items-center justify-start lg:justify-end gap-2"}>
<button className={"stock-filter-btn active inline-flex items-center gap-1.5 px-3 py-2 rounded font-label-mono-spec text-label-mono-spec font-semibold bg-primary text-on-primary shadow-sm"} data-filter={"all"} type={"button"}>
<span className={"material-symbols-outlined text-[15px]"} aria-hidden={"true"}>{"inventory_2"}</span>
<span>{"All Catalog (480+)"}</span>
</button>
<button className={"stock-filter-btn inline-flex items-center gap-1.5 px-3 py-2 rounded font-label-mono-spec text-label-mono-spec font-semibold bg-surface-card text-on-surface hover:bg-surface-container transition-colors shadow-sm"} data-filter={"yangon"} type={"button"}>
<span className={"w-2 h-2 rounded-full bg-tier-certified animate-pulse"}></span>
<span>{"In Stock Yangon"}</span>
</button>
<button className={"stock-filter-btn inline-flex items-center gap-1.5 px-3 py-2 rounded font-label-mono-spec text-label-mono-spec font-semibold bg-surface-card text-on-surface hover:bg-surface-container transition-colors shadow-sm"} data-filter={"container"} type={"button"}>
<span className={"material-symbols-outlined text-[15px] text-solar-amber"} aria-hidden={"true"}>{"directions_boat"}</span>
<span>{"Container Volume"}</span>
</button>
</div>
</div>
</div>
</section>

<section className={"w-full max-w-7xl mx-auto px-6 py-space-xl"}>
<div className={"grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start"}>

<aside className={"lg:col-span-3 flex flex-col gap-space-lg"}>

<div className={"bg-surface-card rounded shadow-sm p-space-md flex flex-col gap-space-sm"}>
<div className={"flex items-center justify-between pb-space-xs"}>
<span className={"font-headline-sm text-[15px] font-bold text-on-surface uppercase tracking-wide"}>{"Category Index"}</span>
<span className={"font-label-mono-spec text-[11px] text-primary bg-primary-fixed px-2 py-0.5 rounded font-bold"}>{"8 DIVISIONS"}</span>
</div>
<nav className={"flex flex-col gap-1"} id={"categoryNav"}>
<button className={"cat-nav-btn text-left px-3 py-2.5 rounded font-body-sm text-body-sm font-semibold bg-primary text-on-primary flex items-center justify-between transition-colors"} data-cat={"all"} type={"button"}>
<span className={"flex items-center gap-2"}>
<span className={"material-symbols-outlined text-[18px]"} aria-hidden={"true"}>{"apps"}</span>{" All Disciplines\n              "}</span>
<span className={"text-[11px] opacity-80"}>{"9"}</span>
</button>
<button className={"cat-nav-btn text-left px-3 py-2.5 rounded font-body-sm text-body-sm font-medium text-on-surface hover:bg-surface-container-low flex items-center justify-between transition-colors"} data-cat={"inverters"} type={"button"}>
<span className={"flex items-center gap-2"}>
<span className={"material-symbols-outlined text-[18px] text-primary"} aria-hidden={"true"}>{"solar_power"}</span>{" Solar Inverters\n              "}</span>
<span className={"text-[11px] text-secondary"}>{"3"}</span>
</button>
<button className={"cat-nav-btn text-left px-3 py-2.5 rounded font-body-sm text-body-sm font-medium text-on-surface hover:bg-surface-container-low flex items-center justify-between transition-colors"} data-cat={"batteries"} type={"button"}>
<span className={"flex items-center gap-2"}>
<span className={"material-symbols-outlined text-[18px] text-primary"} aria-hidden={"true"}>{"battery_charging_full"}</span>{" Solar Batteries\n              "}</span>
<span className={"text-[11px] text-secondary"}>{"2"}</span>
</button>
<button className={"cat-nav-btn text-left px-3 py-2.5 rounded font-body-sm text-body-sm font-medium text-on-surface hover:bg-surface-container-low flex items-center justify-between transition-colors"} data-cat={"panels"} type={"button"}>
<span className={"flex items-center gap-2"}>
<span className={"material-symbols-outlined text-[18px] text-primary"} aria-hidden={"true"}>{"grid_view"}</span>{" Solar PV Modules\n              "}</span>
<span className={"text-[11px] text-secondary"}>{"1"}</span>
</button>
<button className={"cat-nav-btn text-left px-3 py-2.5 rounded font-body-sm text-body-sm font-medium text-on-surface hover:bg-surface-container-low flex items-center justify-between transition-colors"} data-cat={"electrical"} type={"button"}>
<span className={"flex items-center gap-2"}>
<span className={"material-symbols-outlined text-[18px] text-primary"} aria-hidden={"true"}>{"cable"}</span>{" Electrical Cables\n              "}</span>
<span className={"text-[11px] text-secondary"}>{"1"}</span>
</button>
<button className={"cat-nav-btn text-left px-3 py-2.5 rounded font-body-sm text-body-sm font-medium text-on-surface hover:bg-surface-container-low flex items-center justify-between transition-colors"} data-cat={"bos"} type={"button"}>
<span className={"flex items-center gap-2"}>
<span className={"material-symbols-outlined text-[18px] text-primary"} aria-hidden={"true"}>{"hardware"}</span>{" BOS & Protection\n              "}</span>
<span className={"text-[11px] text-secondary"}>{"2"}</span>
</button>
</nav>
</div>

<div className={"bg-surface-container-low rounded p-space-md flex flex-col gap-space-sm shadow-sm"}>
<div className={"flex items-center gap-2 text-primary font-headline-sm text-[14px] font-bold"}>
<span className={"material-symbols-outlined text-[20px]"} aria-hidden={"true"}>{"shield"}</span>
<span>{"GDE Direct Assurance"}</span>
</div>
<p className={"font-body-sm text-body-sm text-on-surface-variant"}>{"\n            Official distributor with direct manufacturer factory warranty backing, genuine flash test reports, and factory calibration serial certificates for Myanmar infrastructure tenders.\n          "}</p>
<div className={"flex flex-col gap-1.5 pt-1"}>
<div className={"flex items-center gap-2 font-label-mono-spec text-[11px] text-on-surface"}>
<span className={"material-symbols-outlined text-[16px] text-tier-certified"} aria-hidden={"true"}>{"check_circle"}</span>
<span>{"100% Factory Direct Original"}</span>
</div>
<div className={"flex items-center gap-2 font-label-mono-spec text-[11px] text-on-surface"}>
<span className={"material-symbols-outlined text-[16px] text-tier-certified"} aria-hidden={"true"}>{"check_circle"}</span>
<span>{"Yangon FMI Hub Warranty Support"}</span>
</div>
<div className={"flex items-center gap-2 font-label-mono-spec text-[11px] text-on-surface"}>
<span className={"material-symbols-outlined text-[16px] text-tier-certified"} aria-hidden={"true"}>{"check_circle"}</span>
<span>{"Pre-dispatch Hi-Pot Testing"}</span>
</div>
</div>
</div>

<div className={"bg-surface-card rounded p-space-md shadow-sm flex flex-col gap-space-sm"}>
<div className={"flex items-center justify-between"}>
<span className={"font-headline-sm text-[14px] font-bold text-on-surface"}>{"EPC & Installer Desk"}</span>
<span className={"material-symbols-outlined text-primary text-[20px]"} aria-hidden={"true"}>{"engineering"}</span>
</div>
<p className={"font-body-sm text-body-sm text-on-surface-variant"}>{"\n            Need consolidated Bill of Quantities (BOQ) with container FOB/CIF or Yangon Ex-Warehouse pickup quotes?\n          "}</p>
<a className={"w-full inline-flex items-center justify-center gap-2 bg-primary text-on-primary py-2.5 rounded font-label-mono-spec text-label-mono-spec font-semibold hover:bg-primary-container transition-colors shadow-sm"} href={"tel:+959952706118"}>
<span className={"material-symbols-outlined text-[16px]"} aria-hidden={"true"}>{"support_agent"}</span>
<span>{"Contact Commercial Team"}</span>
</a>
</div>
</aside>

<div className={"lg:col-span-9 flex flex-col gap-space-lg"}>

<div className={"flex flex-wrap items-center justify-between gap-space-sm bg-surface-card p-3 rounded shadow-sm"}>
<div className={"flex items-center gap-space-sm"}>
<span className={"font-label-mono-spec text-label-mono-spec font-bold text-primary"} id={"productCount"}>{"Showing 9 Certified Products"}</span>
<span className={"text-secondary opacity-40"}>{"|"}</span>
<span className={"font-body-sm text-body-sm text-secondary"}>{"Verified Electrical & Solar Distribution Portfolio"}</span>
</div>
<div className={"flex items-center gap-2"}>
<span className={"font-body-sm text-[12px] text-secondary"}>{"Sort by:"}</span>
<select className={"h-8 px-2 rounded bg-surface-container-low text-on-surface font-label-mono-spec text-[11px] font-semibold border-0 focus:ring-1 focus:ring-primary"} aria-label={"Sort products"} data-action={"sort-products"}>
<option>{"Recommended / High Availability"}</option>
<option>{"Power Capacity (High to Low)"}</option>
<option>{"Voltage Rating"}</option>
</select>
</div>
</div>

<div className={"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-space-md"} id={"catalogGrid"}>

<article className={"product-item bg-surface-card rounded shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between overflow-hidden group"} data-category={"inverters"} data-stock={"yangon"}>
<div className={"p-4 flex flex-col gap-3"}>

<div className={"flex items-center justify-between gap-2"}>
<span className={"bg-primary text-on-primary font-badge-label text-badge-label px-2 py-0.5 rounded uppercase font-bold tracking-wider"}>{"\n                  Solis S6 Series\n                "}</span>
<span className={"inline-flex items-center gap-1 bg-surface-container-low text-tier-certified font-badge-label text-badge-label px-2 py-0.5 rounded font-bold"}>
<span className={"w-1.5 h-1.5 rounded-full bg-tier-certified"}></span>{" In Stock YGN\n                "}</span>
</div>

<div className={"w-full aspect-square bg-surface-canvas rounded flex items-center justify-center p-3 relative overflow-hidden"}>
<img alt={"Solis S6-EH3P50K-H Commercial Hybrid Inverter"} className={"w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"} src={"/images/asset-014.jpg"} loading={"lazy"} decoding={"async"} />
<span className={"absolute bottom-2 left-2 bg-inverse-surface/80 text-white font-label-mono-spec text-[10px] px-1.5 py-0.5 rounded"}>{"\n                  3-Phase HV Hybrid\n                "}</span>
</div>

<div>
<h3 className={"font-headline-sm text-[16px] font-bold text-on-surface leading-snug group-hover:text-primary transition-colors"}>{"\n                  Solis S6-EH3P50K-H Hybrid Inverter\n                "}</h3>
<p className={"font-body-sm text-[12px] text-secondary font-myanmar pt-0.5"}>{"\n                  အကြီးစားလုပ်ငန်းသုံး စွမ်းရည်မြင့် ၃-ဖေ့စ် ဆိုလာအင်ဗာတာ\n                "}</p>
</div>

<div className={"grid grid-cols-2 gap-1.5 bg-surface-container-low p-2 rounded font-label-mono-spec text-[11px] text-on-surface"}>
<div><span className={"text-secondary"}>{"Rated AC:"}</span>{" 50 kW"}</div>
<div><span className={"text-secondary"}>{"Battery:"}</span>{" High Voltage Li"}</div>
<div><span className={"text-secondary"}>{"MPPT:"}</span>{" 4 Strings (16A)"}</div>
<div><span className={"text-secondary"}>{"Warranty:"}</span>{" 5 Years Standard"}</div>
</div>
</div>

<div className={"p-4 pt-0 flex flex-col gap-2"}>
<a className={"w-full py-2.5 bg-primary text-on-primary rounded font-label-mono-spec text-label-mono-spec font-bold text-center hover:bg-primary-container transition-colors shadow-sm flex items-center justify-center gap-1.5"} href={"https://invite.viber.com/?g2=AQBL3Uw94Ep4qE7tS7yPEErHa5w1BRUcuxQHFfsZQLah3bkPINFLs3iUY9KGOXNJ"} rel={"noopener noreferrer"} target={"_blank"}>
<span className={"material-symbols-outlined text-[16px]"} aria-hidden={"true"}>{"price_change"}</span>
<span>{"Get B2B Wholesale Price"}</span>
</a>
<button className={"w-full py-1.5 bg-surface-container-low text-on-surface rounded font-label-mono-spec text-[11px] font-semibold text-center hover:bg-surface-container transition-colors flex items-center justify-center gap-1"} type={"button"} data-action={"request-datasheet"}>
<span className={"material-symbols-outlined text-[14px]"} aria-hidden={"true"}>{"description"}</span>
<span>{"Datasheet / Spec PDF"}</span>
</button>
</div>
</article>

<article className={"product-item bg-surface-card rounded shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between overflow-hidden group"} data-category={"panels"} data-stock={"yangon"}>
<div className={"p-4 flex flex-col gap-3"}>
<div className={"flex items-center justify-between gap-2"}>
<span className={"bg-[#0b1c30] text-white font-badge-label text-badge-label px-2 py-0.5 rounded uppercase font-bold tracking-wider"}>{"\n                  AIKO Solar · Tier 1\n                "}</span>
<span className={"inline-flex items-center gap-1 bg-surface-container-low text-tier-certified font-badge-label text-badge-label px-2 py-0.5 rounded font-bold"}>
<span className={"w-1.5 h-1.5 rounded-full bg-tier-certified"}></span>{" In Stock YGN\n                "}</span>
</div>
<div className={"w-full aspect-square bg-surface-canvas rounded flex items-center justify-center p-3 relative overflow-hidden"}>
<img alt={"AIKO Neostar 675W N-Type ABC High Efficiency Solar Panel"} className={"w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"} src={"/images/asset-011.jpg"} loading={"lazy"} decoding={"async"} />
<span className={"absolute bottom-2 left-2 bg-solar-amber text-on-surface font-label-mono-spec text-[10px] font-bold px-1.5 py-0.5 rounded"}>{"\n                  23.8% Efficiency\n                "}</span>
</div>
<div>
<h3 className={"font-headline-sm text-[16px] font-bold text-on-surface leading-snug group-hover:text-primary transition-colors"}>{"\n                  AIKO 675W N-Type ABC Module\n                "}</h3>
<p className={"font-body-sm text-[12px] text-secondary font-myanmar pt-0.5"}>{"\n                  အဆင့်မြင့် N-Type ABC စွမ်းဆောင်ရည်မြင့် ဆိုလာပြားကြီးများ\n                "}</p>
</div>
<div className={"grid grid-cols-2 gap-1.5 bg-surface-container-low p-2 rounded font-label-mono-spec text-[11px] text-on-surface"}>
<div><span className={"text-secondary"}>{"Pmax:"}</span>{" 675 Watt"}</div>
<div><span className={"text-secondary"}>{"Cell:"}</span>{" N-Type ABC Bifacial"}</div>
<div><span className={"text-secondary"}>{"Temp Coeff:"}</span>{" -0.26%/°C"}</div>
<div><span className={"text-secondary"}>{"Warranty:"}</span>{" 30 Yr Linear"}</div>
</div>
</div>
<div className={"p-4 pt-0 flex flex-col gap-2"}>
<a className={"w-full py-2.5 bg-primary text-on-primary rounded font-label-mono-spec text-label-mono-spec font-bold text-center hover:bg-primary-container transition-colors shadow-sm flex items-center justify-center gap-1.5"} href={"https://invite.viber.com/?g2=AQBL3Uw94Ep4qE7tS7yPEErHa5w1BRUcuxQHFfsZQLah3bkPINFLs3iUY9KGOXNJ"} rel={"noopener noreferrer"} target={"_blank"}>
<span className={"material-symbols-outlined text-[16px]"} aria-hidden={"true"}>{"price_change"}</span>
<span>{"Get Pallet / Container Rate"}</span>
</a>
<button className={"w-full py-1.5 bg-surface-container-low text-on-surface rounded font-label-mono-spec text-[11px] font-semibold text-center hover:bg-surface-container transition-colors flex items-center justify-center gap-1"} type={"button"} data-action={"request-datasheet"}>
<span className={"material-symbols-outlined text-[14px]"} aria-hidden={"true"}>{"description"}</span>
<span>{"Datasheet / Spec PDF"}</span>
</button>
</div>
</article>

<article className={"product-item bg-surface-card rounded shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between overflow-hidden group"} data-category={"inverters"} data-stock={"yangon"}>
<div className={"p-4 flex flex-col gap-3"}>
<div className={"flex items-center justify-between gap-2"}>
<span className={"bg-[#ba1a1a] text-white font-badge-label text-badge-label px-2 py-0.5 rounded uppercase font-bold tracking-wider"}>{"\n                  GoodWe · GW-OG\n                "}</span>
<span className={"inline-flex items-center gap-1 bg-surface-container-low text-tier-certified font-badge-label text-badge-label px-2 py-0.5 rounded font-bold"}>
<span className={"w-1.5 h-1.5 rounded-full bg-tier-certified"}></span>{" In Stock YGN\n                "}</span>
</div>
<div className={"w-full aspect-square bg-surface-canvas rounded flex items-center justify-center p-3 relative overflow-hidden"}>
<img alt={"GoodWe GW-OG 3P 10-30kW Commercial On-Grid & Off-Grid Inverter"} className={"w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"} src={"/images/asset-016.jpg"} loading={"lazy"} decoding={"async"} />
<span className={"absolute bottom-2 left-2 bg-inverse-surface/80 text-white font-label-mono-spec text-[10px] px-1.5 py-0.5 rounded"}>{"\n                  3-Phase Heavy Duty\n                "}</span>
</div>
<div>
<h3 className={"font-headline-sm text-[16px] font-bold text-on-surface leading-snug group-hover:text-primary transition-colors"}>{"\n                  GoodWe GW-OG 3P (10kW - 30kW)\n                "}</h3>
<p className={"font-body-sm text-[12px] text-secondary font-myanmar pt-0.5"}>{"\n                  စက်ရုံနှင့် လုပ်ငန်းသုံး ၃-ဖေ့စ် ဆိုလာအင်ဗာတာ\n                "}</p>
</div>
<div className={"grid grid-cols-2 gap-1.5 bg-surface-container-low p-2 rounded font-label-mono-spec text-[11px] text-on-surface"}>
<div><span className={"text-secondary"}>{"Output:"}</span>{" 10 - 30 kW"}</div>
<div><span className={"text-secondary"}>{"Protection:"}</span>{" IP65 Weatherproof"}</div>
<div><span className={"text-secondary"}>{"Efficiency:"}</span>{" 98.4% Peak"}</div>
<div><span className={"text-secondary"}>{"Monitoring:"}</span>{" Wi-Fi / 4G Built-in"}</div>
</div>
</div>
<div className={"p-4 pt-0 flex flex-col gap-2"}>
<a className={"w-full py-2.5 bg-primary text-on-primary rounded font-label-mono-spec text-label-mono-spec font-bold text-center hover:bg-primary-container transition-colors shadow-sm flex items-center justify-center gap-1.5"} href={"https://invite.viber.com/?g2=AQBL3Uw94Ep4qE7tS7yPEErHa5w1BRUcuxQHFfsZQLah3bkPINFLs3iUY9KGOXNJ"} rel={"noopener noreferrer"} target={"_blank"}>
<span className={"material-symbols-outlined text-[16px]"} aria-hidden={"true"}>{"price_change"}</span>
<span>{"Get B2B Wholesale Price"}</span>
</a>
<button className={"w-full py-1.5 bg-surface-container-low text-on-surface rounded font-label-mono-spec text-[11px] font-semibold text-center hover:bg-surface-container transition-colors flex items-center justify-center gap-1"} type={"button"} data-action={"request-datasheet"}>
<span className={"material-symbols-outlined text-[14px]"} aria-hidden={"true"}>{"description"}</span>
<span>{"Datasheet / Spec PDF"}</span>
</button>
</div>
</article>

<article className={"product-item bg-surface-card rounded shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between overflow-hidden group"} data-category={"inverters"} data-stock={"yangon"}>
<div className={"p-4 flex flex-col gap-3"}>
<div className={"flex items-center justify-between gap-2"}>
<span className={"bg-primary text-on-primary font-badge-label text-badge-label px-2 py-0.5 rounded uppercase font-bold tracking-wider"}>{"\n                  GoodWe · 1-Phase HB\n                "}</span>
<span className={"inline-flex items-center gap-1 bg-surface-container-low text-tier-certified font-badge-label text-badge-label px-2 py-0.5 rounded font-bold"}>
<span className={"w-1.5 h-1.5 rounded-full bg-tier-certified"}></span>{" In Stock YGN\n                "}</span>
</div>
<div className={"w-full aspect-square bg-surface-canvas rounded flex items-center justify-center p-3 relative overflow-hidden"}>
<img alt={"GoodWe GW HB 1P 5-12k Residential Hybrid Inverter"} className={"w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"} src={"/images/asset-023.jpg"} loading={"lazy"} decoding={"async"} />
<span className={"absolute bottom-2 left-2 bg-inverse-surface/80 text-white font-label-mono-spec text-[10px] px-1.5 py-0.5 rounded"}>{"\n                  Home Energy Storage\n                "}</span>
</div>
<div>
<h3 className={"font-headline-sm text-[16px] font-bold text-on-surface leading-snug group-hover:text-primary transition-colors"}>{"\n                  GoodWe GW-HB 1P (5kW - 12kW)\n                "}</h3>
<p className={"font-body-sm text-[12px] text-secondary font-myanmar pt-0.5"}>{"\n                  လူနေအိမ်သုံး တစ်ဖေ့စ် ဟိုက်ဘရစ် ဆိုလာအင်ဗာတာ\n                "}</p>
</div>
<div className={"grid grid-cols-2 gap-1.5 bg-surface-container-low p-2 rounded font-label-mono-spec text-[11px] text-on-surface"}>
<div><span className={"text-secondary"}>{"Rating:"}</span>{" 5kW - 12kW"}</div>
<div><span className={"text-secondary"}>{"Switch:"}</span>{" <10ms UPS Grade"}</div>
<div><span className={"text-secondary"}>{"Battery:"}</span>{" 48V / LiFePO4"}</div>
<div><span className={"text-secondary"}>{"Smart App:"}</span>{" SEMS Cloud"}</div>
</div>
</div>
<div className={"p-4 pt-0 flex flex-col gap-2"}>
<a className={"w-full py-2.5 bg-primary text-on-primary rounded font-label-mono-spec text-label-mono-spec font-bold text-center hover:bg-primary-container transition-colors shadow-sm flex items-center justify-center gap-1.5"} href={"https://invite.viber.com/?g2=AQBL3Uw94Ep4qE7tS7yPEErHa5w1BRUcuxQHFfsZQLah3bkPINFLs3iUY9KGOXNJ"} rel={"noopener noreferrer"} target={"_blank"}>
<span className={"material-symbols-outlined text-[16px]"} aria-hidden={"true"}>{"price_change"}</span>
<span>{"Get B2B Wholesale Price"}</span>
</a>
<button className={"w-full py-1.5 bg-surface-container-low text-on-surface rounded font-label-mono-spec text-[11px] font-semibold text-center hover:bg-surface-container transition-colors flex items-center justify-center gap-1"} type={"button"} data-action={"request-datasheet"}>
<span className={"material-symbols-outlined text-[14px]"} aria-hidden={"true"}>{"description"}</span>
<span>{"Datasheet / Spec PDF"}</span>
</button>
</div>
</article>

<article className={"product-item bg-surface-card rounded shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between overflow-hidden group"} data-category={"batteries"} data-stock={"yangon"}>
<div className={"p-4 flex flex-col gap-3"}>
<div className={"flex items-center justify-between gap-2"}>
<span className={"bg-[#006577] text-white font-badge-label text-badge-label px-2 py-0.5 rounded uppercase font-bold tracking-wider"}>{"\n                  GSL Energy Storage\n                "}</span>
<span className={"inline-flex items-center gap-1 bg-surface-container-low text-tier-certified font-badge-label text-badge-label px-2 py-0.5 rounded font-bold"}>
<span className={"w-1.5 h-1.5 rounded-full bg-tier-certified"}></span>{" In Stock YGN\n                "}</span>
</div>
<div className={"w-full aspect-square bg-surface-canvas rounded flex items-center justify-center p-3 relative overflow-hidden"}>
<img alt={"GSL-W-16K Wall-Mounted LiFePO4 Battery 51.2V 314Ah"} className={"w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"} src={"/images/asset-015.jpg"} loading={"lazy"} decoding={"async"} />
<span className={"absolute bottom-2 left-2 bg-solar-amber text-on-surface font-label-mono-spec text-[10px] font-bold px-1.5 py-0.5 rounded"}>{"\n                  16.0 kWh Capacity\n                "}</span>
</div>
<div>
<h3 className={"font-headline-sm text-[16px] font-bold text-on-surface leading-snug group-hover:text-primary transition-colors"}>{"\n                  GSL-W-16K LiFePO4 Wall Mount (51.2V 314Ah)\n                "}</h3>
<p className={"font-body-sm text-[12px] text-secondary font-myanmar pt-0.5"}>{"\n                  စွမ်းရည်မြင့် နံရံကပ် လီသီယမ်ဘက်ထရီ (၆၅၀၀+ သက်တမ်း)\n                "}</p>
</div>
<div className={"grid grid-cols-2 gap-1.5 bg-surface-container-low p-2 rounded font-label-mono-spec text-[11px] text-on-surface"}>
<div><span className={"text-secondary"}>{"Voltage:"}</span>{" 51.2 VDC"}</div>
<div><span className={"text-secondary"}>{"Capacity:"}</span>{" 314 Ah (16kWh)"}</div>
<div><span className={"text-secondary"}>{"Cycle Life:"}</span>{" 6,500+ Cycles"}</div>
<div><span className={"text-secondary"}>{"CAN/RS485:"}</span>{" Solis/GoodWe/Deye"}</div>
</div>
</div>
<div className={"p-4 pt-0 flex flex-col gap-2"}>
<a className={"w-full py-2.5 bg-primary text-on-primary rounded font-label-mono-spec text-label-mono-spec font-bold text-center hover:bg-primary-container transition-colors shadow-sm flex items-center justify-center gap-1.5"} href={"https://invite.viber.com/?g2=AQBL3Uw94Ep4qE7tS7yPEErHa5w1BRUcuxQHFfsZQLah3bkPINFLs3iUY9KGOXNJ"} rel={"noopener noreferrer"} target={"_blank"}>
<span className={"material-symbols-outlined text-[16px]"} aria-hidden={"true"}>{"price_change"}</span>
<span>{"Get B2B Wholesale Price"}</span>
</a>
<button className={"w-full py-1.5 bg-surface-container-low text-on-surface rounded font-label-mono-spec text-[11px] font-semibold text-center hover:bg-surface-container transition-colors flex items-center justify-center gap-1"} type={"button"} data-action={"request-datasheet"}>
<span className={"material-symbols-outlined text-[14px]"} aria-hidden={"true"}>{"description"}</span>
<span>{"Datasheet / Spec PDF"}</span>
</button>
</div>
</article>

<article className={"product-item bg-surface-card rounded shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between overflow-hidden group"} data-category={"batteries"} data-stock={"yangon"}>
<div className={"p-4 flex flex-col gap-3"}>
<div className={"flex items-center justify-between gap-2"}>
<span className={"bg-[#006577] text-white font-badge-label text-badge-label px-2 py-0.5 rounded uppercase font-bold tracking-wider"}>{"\n                  GSL Server Rack\n                "}</span>
<span className={"inline-flex items-center gap-1 bg-surface-container-low text-tier-certified font-badge-label text-badge-label px-2 py-0.5 rounded font-bold"}>
<span className={"w-1.5 h-1.5 rounded-full bg-tier-certified"}></span>{" In Stock YGN\n                "}</span>
</div>
<div className={"w-full aspect-square bg-surface-canvas rounded flex items-center justify-center p-3 relative overflow-hidden"}>
<img alt={"GSL-A51-200 Server Rack Mounted LiFePO4 Battery 10.24kWh"} className={"w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"} src={"/images/asset-024.jpg"} loading={"lazy"} decoding={"async"} />
<span className={"absolute bottom-2 left-2 bg-solar-amber text-on-surface font-label-mono-spec text-[10px] font-bold px-1.5 py-0.5 rounded"}>{"\n                  10.24 kWh Unit\n                "}</span>
</div>
<div>
<h3 className={"font-headline-sm text-[16px] font-bold text-on-surface leading-snug group-hover:text-primary transition-colors"}>{"\n                  GSL-A51-200 Rack Battery (51.2V 200Ah)\n                "}</h3>
<p className={"font-body-sm text-[12px] text-secondary font-myanmar pt-0.5"}>{"\n                  ဆာဗာရက်ခ်တင် လီသီယမ်အိုင်ယွန်း ဘက်ထရီ စနစ်\n                "}</p>
</div>
<div className={"grid grid-cols-2 gap-1.5 bg-surface-container-low p-2 rounded font-label-mono-spec text-[11px] text-on-surface"}>
<div><span className={"text-secondary"}>{"Nominal:"}</span>{" 51.2 VDC"}</div>
<div><span className={"text-secondary"}>{"Capacity:"}</span>{" 200 Ah (10.2kWh)"}</div>
<div><span className={"text-secondary"}>{"Parallel:"}</span>{" Up to 15 Units"}</div>
<div><span className={"text-secondary"}>{"BMS:"}</span>{" Built-in Smart BMS"}</div>
</div>
</div>
<div className={"p-4 pt-0 flex flex-col gap-2"}>
<a className={"w-full py-2.5 bg-primary text-on-primary rounded font-label-mono-spec text-label-mono-spec font-bold text-center hover:bg-primary-container transition-colors shadow-sm flex items-center justify-center gap-1.5"} href={"https://invite.viber.com/?g2=AQBL3Uw94Ep4qE7tS7yPEErHa5w1BRUcuxQHFfsZQLah3bkPINFLs3iUY9KGOXNJ"} rel={"noopener noreferrer"} target={"_blank"}>
<span className={"material-symbols-outlined text-[16px]"} aria-hidden={"true"}>{"price_change"}</span>
<span>{"Get B2B Wholesale Price"}</span>
</a>
<button className={"w-full py-1.5 bg-surface-container-low text-on-surface rounded font-label-mono-spec text-[11px] font-semibold text-center hover:bg-surface-container transition-colors flex items-center justify-center gap-1"} type={"button"} data-action={"request-datasheet"}>
<span className={"material-symbols-outlined text-[14px]"} aria-hidden={"true"}>{"description"}</span>
<span>{"Datasheet / Spec PDF"}</span>
</button>
</div>
</article>

<article className={"product-item bg-surface-card rounded shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between overflow-hidden group"} data-category={"bos"} data-stock={"yangon"}>
<div className={"p-4 flex flex-col gap-3"}>
<div className={"flex items-center justify-between gap-2"}>
<span className={"bg-[#565e74] text-white font-badge-label text-badge-label px-2 py-0.5 rounded uppercase font-bold tracking-wider"}>{"\n                  Antai Solar Hardware\n                "}</span>
<span className={"inline-flex items-center gap-1 bg-surface-container-low text-tier-certified font-badge-label text-badge-label px-2 py-0.5 rounded font-bold"}>
<span className={"w-1.5 h-1.5 rounded-full bg-tier-certified"}></span>{" Bulk Stock YGN\n                "}</span>
</div>
<div className={"w-full aspect-square bg-surface-canvas rounded flex items-center justify-center p-3 relative overflow-hidden"}>
<img alt={"Antai Heavy-Duty AL6005-T5 Aluminum L-Feet Roof Mounting Bracket"} className={"w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"} src={"/images/asset-013.jpg"} loading={"lazy"} decoding={"async"} />
<span className={"absolute bottom-2 left-2 bg-inverse-surface/80 text-white font-label-mono-spec text-[10px] px-1.5 py-0.5 rounded"}>{"\n                  AL6005-T5 Aluminum\n                "}</span>
</div>
<div>
<h3 className={"font-headline-sm text-[16px] font-bold text-on-surface leading-snug group-hover:text-primary transition-colors"}>{"\n                  Antai Solar AL6005-T5 L-Feet Kit\n                "}</h3>
<p className={"font-body-sm text-[12px] text-secondary font-myanmar pt-0.5"}>{"\n                  သွပ်မိုးခေါင်မိုး ဆိုလာဒေါက်တိုင် တပ်ဆင်ဆက်စပ်ပစ္စည်းများ\n                "}</p>
</div>
<div className={"grid grid-cols-2 gap-1.5 bg-surface-container-low p-2 rounded font-label-mono-spec text-[11px] text-on-surface"}>
<div><span className={"text-secondary"}>{"Material:"}</span>{" Anodized AL6005"}</div>
<div><span className={"text-secondary"}>{"Hardware:"}</span>{" SUS304 Stainless"}</div>
<div><span className={"text-secondary"}>{"Wind Load:"}</span>{" Up to 60 m/s"}</div>
<div><span className={"text-secondary"}>{"EPDM:"}</span>{" Waterproof Rubber"}</div>
</div>
</div>
<div className={"p-4 pt-0 flex flex-col gap-2"}>
<a className={"w-full py-2.5 bg-primary text-on-primary rounded font-label-mono-spec text-label-mono-spec font-bold text-center hover:bg-primary-container transition-colors shadow-sm flex items-center justify-center gap-1.5"} href={"https://invite.viber.com/?g2=AQBL3Uw94Ep4qE7tS7yPEErHa5w1BRUcuxQHFfsZQLah3bkPINFLs3iUY9KGOXNJ"} rel={"noopener noreferrer"} target={"_blank"}>
<span className={"material-symbols-outlined text-[16px]"} aria-hidden={"true"}>{"price_change"}</span>
<span>{"Wholesale Carton Pricing"}</span>
</a>
<button className={"w-full py-1.5 bg-surface-container-low text-on-surface rounded font-label-mono-spec text-[11px] font-semibold text-center hover:bg-surface-container transition-colors flex items-center justify-center gap-1"} type={"button"} data-action={"request-datasheet"}>
<span className={"material-symbols-outlined text-[14px]"} aria-hidden={"true"}>{"description"}</span>
<span>{"Datasheet / Spec PDF"}</span>
</button>
</div>
</article>

<article className={"product-item bg-surface-card rounded shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between overflow-hidden group"} data-category={"bos"} data-stock={"yangon"}>
<div className={"p-4 flex flex-col gap-3"}>
<div className={"flex items-center justify-between gap-2"}>
<span className={"bg-[#007bb9] text-white font-badge-label text-badge-label px-2 py-0.5 rounded uppercase font-bold tracking-wider"}>{"\n                  BENY Electric · DC MCCB\n                "}</span>
<span className={"inline-flex items-center gap-1 bg-surface-container-low text-tier-certified font-badge-label text-badge-label px-2 py-0.5 rounded font-bold"}>
<span className={"w-1.5 h-1.5 rounded-full bg-tier-certified"}></span>{" In Stock YGN\n                "}</span>
</div>
<div className={"w-full aspect-square bg-surface-canvas rounded flex items-center justify-center p-3 relative overflow-hidden"}>
<img alt={"Beny BDM-125 DC Molded Case Circuit Breaker 500V 125A"} className={"w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"} src={"/images/asset-017.jpg"} loading={"lazy"} decoding={"async"} />
<span className={"absolute bottom-2 left-2 bg-inverse-surface/80 text-white font-label-mono-spec text-[10px] px-1.5 py-0.5 rounded"}>{"\n                  IEC / UL Certified\n                "}</span>
</div>
<div>
<h3 className={"font-headline-sm text-[16px] font-bold text-on-surface leading-snug group-hover:text-primary transition-colors"}>{"\n                  Beny BDM-125 Solar DC MCCB (125A)\n                "}</h3>
<p className={"font-body-sm text-[12px] text-secondary font-myanmar pt-0.5"}>{"\n                  ဘက်ထရီနှင့် ဆိုလာအတွက် ဒီစီ ဆားကစ်ဘရိတ်ကာကြီးများ\n                "}</p>
</div>
<div className={"grid grid-cols-2 gap-1.5 bg-surface-container-low p-2 rounded font-label-mono-spec text-[11px] text-on-surface"}>
<div><span className={"text-secondary"}>{"Rated Current:"}</span>{" 125 Amp"}</div>
<div><span className={"text-secondary"}>{"Voltage:"}</span>{" 500 VDC 2P"}</div>
<div><span className={"text-secondary"}>{"Icu / Ics:"}</span>{" 20 kA Breaking"}</div>
<div><span className={"text-secondary"}>{"Standard:"}</span>{" IEC 60947-2"}</div>
</div>
</div>
<div className={"p-4 pt-0 flex flex-col gap-2"}>
<a className={"w-full py-2.5 bg-primary text-on-primary rounded font-label-mono-spec text-label-mono-spec font-bold text-center hover:bg-primary-container transition-colors shadow-sm flex items-center justify-center gap-1.5"} href={"https://invite.viber.com/?g2=AQBL3Uw94Ep4qE7tS7yPEErHa5w1BRUcuxQHFfsZQLah3bkPINFLs3iUY9KGOXNJ"} rel={"noopener noreferrer"} target={"_blank"}>
<span className={"material-symbols-outlined text-[16px]"} aria-hidden={"true"}>{"price_change"}</span>
<span>{"Get B2B Wholesale Price"}</span>
</a>
<button className={"w-full py-1.5 bg-surface-container-low text-on-surface rounded font-label-mono-spec text-[11px] font-semibold text-center hover:bg-surface-container transition-colors flex items-center justify-center gap-1"} type={"button"} data-action={"request-datasheet"}>
<span className={"material-symbols-outlined text-[14px]"} aria-hidden={"true"}>{"description"}</span>
<span>{"Datasheet / Spec PDF"}</span>
</button>
</div>
</article>

<article className={"product-item bg-surface-card rounded shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between overflow-hidden group"} data-category={"electrical"} data-stock={"container"}>
<div className={"p-4 flex flex-col gap-3"}>
<div className={"flex items-center justify-between gap-2"}>
<span className={"bg-[#ba1a1a] text-white font-badge-label text-badge-label px-2 py-0.5 rounded uppercase font-bold tracking-wider"}>{"\n                  Xinhongye · TUV Certified\n                "}</span>
<span className={"inline-flex items-center gap-1 bg-surface-container-low text-solar-amber font-badge-label text-badge-label px-2 py-0.5 rounded font-bold"}>
<span className={"w-1.5 h-1.5 rounded-full bg-solar-amber"}></span>{" Drum Available\n                "}</span>
</div>
<div className={"w-full aspect-square bg-surface-canvas rounded flex items-center justify-center p-3 relative overflow-hidden"}>
<img alt={"Xinhongye Solar PV Cable 4mm2 / 6mm2 1500V DC TUV Standard"} className={"w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"} src={"/images/asset-012.jpg"} loading={"lazy"} decoding={"async"} />
<span className={"absolute bottom-2 left-2 bg-inverse-surface/80 text-white font-label-mono-spec text-[10px] px-1.5 py-0.5 rounded"}>{"\n                  1500V DC EN 50618\n                "}</span>
</div>
<div>
<h3 className={"font-headline-sm text-[16px] font-bold text-on-surface leading-snug group-hover:text-primary transition-colors"}>{"\n                  Xinhongye TUV PV Cable (4mm² / 6mm²)\n                "}</h3>
<p className={"font-body-sm text-[12px] text-secondary font-myanmar pt-0.5"}>{"\n                  ၁၅၀၀ ဗို့ ဒီစီ သီးသန့် ဆိုလာကြိုး (အနီ / အနက် ခွေလိုက်ရရှိနိုင်)\n                "}</p>
</div>
<div className={"grid grid-cols-2 gap-1.5 bg-surface-container-low p-2 rounded font-label-mono-spec text-[11px] text-on-surface"}>
<div><span className={"text-secondary"}>{"Conductor:"}</span>{" Tinned Copper"}</div>
<div><span className={"text-secondary"}>{"Voltage:"}</span>{" 1500V DC Rating"}</div>
<div><span className={"text-secondary"}>{"Temp:"}</span>{" -40°C to +120°C"}</div>
<div><span className={"text-secondary"}>{"Package:"}</span>{" 100m / 500m / 1000m"}</div>
</div>
</div>
<div className={"p-4 pt-0 flex flex-col gap-2"}>
<a className={"w-full py-2.5 bg-primary text-on-primary rounded font-label-mono-spec text-label-mono-spec font-bold text-center hover:bg-primary-container transition-colors shadow-sm flex items-center justify-center gap-1.5"} href={"https://invite.viber.com/?g2=AQBL3Uw94Ep4qE7tS7yPEErHa5w1BRUcuxQHFfsZQLah3bkPINFLs3iUY9KGOXNJ"} rel={"noopener noreferrer"} target={"_blank"}>
<span className={"material-symbols-outlined text-[16px]"} aria-hidden={"true"}>{"price_change"}</span>
<span>{"Get Drum & Spool Rates"}</span>
</a>
<button className={"w-full py-1.5 bg-surface-container-low text-on-surface rounded font-label-mono-spec text-[11px] font-semibold text-center hover:bg-surface-container transition-colors flex items-center justify-center gap-1"} type={"button"} data-action={"request-datasheet"}>
<span className={"material-symbols-outlined text-[14px]"} aria-hidden={"true"}>{"description"}</span>
<span>{"Datasheet / Spec PDF"}</span>
</button>
</div>
</article>
</div>

<div className={"hidden bg-surface-card rounded p-space-xl text-center flex-col items-center justify-center gap-2"} id={"noResultsMsg"}>
<span className={"material-symbols-outlined text-[48px] text-outline"} aria-hidden={"true"}>{"search_off"}</span>
<p className={"font-headline-sm text-headline-sm font-bold text-on-surface"}>{"No products match your search or filter"}</p>
<p className={"font-body-md text-body-md text-secondary"}>{"Try searching by general terms like \"cable\", \"inverter\", \"battery\", or reset your filters."}</p>
<button className={"mt-2 px-4 py-2 bg-primary text-on-primary rounded font-label-mono-spec text-label-mono-spec font-bold"} type={"button"} data-action={"reset-filters"}>{"\n            Reset Filters\n          "}</button>
</div>
</div>
</div>
</section>

<section className={"w-full bg-surface-container-low py-space-xl"}>
<div className={"max-w-7xl mx-auto px-6 flex flex-col gap-space-lg"}>
<div className={"bg-surface-card rounded p-space-lg shadow-sm"}>
<div className={"grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center"}>
<div className={"lg:col-span-8 flex flex-col gap-2"}>
<div className={"inline-flex items-center gap-2 text-solar-amber font-label-mono-spec text-label-mono-spec uppercase font-bold tracking-wider"}>
<span className={"material-symbols-outlined text-[18px]"} aria-hidden={"true"}>{"local_shipping"}</span>
<span>{"Nationwide Expressway Freight Network"}</span>
</div>
<h2 className={"font-headline-lg text-headline-lg font-black text-on-surface"}>{"\n              Daily Shipments to All States & Regions\n            "}</h2>
<p className={"font-body-md text-body-md text-secondary max-w-2xl font-myanmar"}>{"\n              မြန်မာတစ်နိုင်ငံလုံးရှိ မန္တလေး၊ တောင်ကြီး၊ မော်လမြိုင်၊ နေပြည်တော်၊ ပြည်၊ မကွေး စသည့် မြို့ကြီးများအားလုံးသို့ ကားဂိတ် Express စနစ်ဖြင့် နေ့ချင်းပြီး ပို့ဆောင်ပေးပါသည်။\n            "}</p>
<div className={"flex flex-wrap gap-2 pt-2"}>
<span className={"bg-surface-container px-3 py-1 rounded font-label-mono-spec text-[11px] font-semibold text-on-surface"}>{"\n                ✓ Yangon Same-Day Pickup (FMI City)\n              "}</span>
<span className={"bg-surface-container px-3 py-1 rounded font-label-mono-spec text-[11px] font-semibold text-on-surface"}>{"\n                ✓ Bayintnaung & Aung Mingalar Gate Delivery\n              "}</span>
<span className={"bg-surface-container px-3 py-1 rounded font-label-mono-spec text-[11px] font-semibold text-on-surface"}>{"\n                ✓ Containerized Bulk Orders Direct to Project Site\n              "}</span>
</div>
</div>
<div className={"lg:col-span-4 flex flex-col gap-3 bg-surface-container-high/40 p-space-md rounded"}>
<span className={"font-label-mono-spec text-[12px] uppercase text-primary font-bold"}>{"\n              Engineering BOQ Assistance\n            "}</span>
<p className={"font-body-sm text-body-sm text-on-surface"}>{"\n              Need technical sizing, string calculation, or single-line diagrams for tender submissions?\n            "}</p>
<div className={"flex flex-col gap-2 pt-1"}>
<a className={"inline-flex items-center justify-center gap-2 bg-primary text-on-primary py-2.5 rounded font-label-mono-spec text-label-mono-spec font-bold hover:bg-primary-container transition-colors shadow-sm"} href={"tel:+959957933180"}>
<span className={"material-symbols-outlined text-[18px]"} aria-hidden={"true"}>{"call"}</span>
<span>{"Call Hotline 1: (+959) 957933180"}</span>
</a>
<a className={"inline-flex items-center justify-center gap-2 bg-surface-card text-on-surface py-2.5 rounded font-label-mono-spec text-label-mono-spec font-bold hover:bg-surface-container transition-colors shadow-sm"} href={"tel:+959952706118"}>
<span className={"material-symbols-outlined text-[18px]"} aria-hidden={"true"}>{"call"}</span>
<span>{"Call Hotline 2: (+959) 952706118"}</span>
</a>
</div>
</div>
</div>
</div>

<div className={"grid grid-cols-2 md:grid-cols-4 gap-space-md"}>
<div className={"bg-surface-card p-4 rounded shadow-sm flex items-center gap-3"}>
<span className={"material-symbols-outlined text-[32px] text-primary"} aria-hidden={"true"}>{"verified_user"}</span>
<div className={"flex flex-col"}>
<span className={"font-headline-sm text-[14px] font-bold text-on-surface"}>{"Original Guarantee"}</span>
<span className={"font-body-sm text-[11px] text-secondary"}>{"Direct Factory Importer"}</span>
</div>
</div>
<div className={"bg-surface-card p-4 rounded shadow-sm flex items-center gap-3"}>
<span className={"material-symbols-outlined text-[32px] text-tier-certified"} aria-hidden={"true"}>{"handshake"}</span>
<div className={"flex flex-col"}>
<span className={"font-headline-sm text-[14px] font-bold text-on-surface"}>{"EPC Contractor Terms"}</span>
<span className={"font-body-sm text-[11px] text-secondary"}>{"Volume Discount Tiers"}</span>
</div>
</div>
<div className={"bg-surface-card p-4 rounded shadow-sm flex items-center gap-3"}>
<span className={"material-symbols-outlined text-[32px] text-solar-amber"} aria-hidden={"true"}>{"build_circle"}</span>
<div className={"flex flex-col"}>
<span className={"font-headline-sm text-[14px] font-bold text-on-surface"}>{"RMA / Warranty Hub"}</span>
<span className={"font-body-sm text-[11px] text-secondary"}>{"Yangon Technical Repair"}</span>
</div>
</div>
<div className={"bg-surface-card p-4 rounded shadow-sm flex items-center gap-3"}>
<span className={"material-symbols-outlined text-[32px] text-tertiary"} aria-hidden={"true"}>{"bolt"}</span>
<div className={"flex flex-col"}>
<span className={"font-headline-sm text-[14px] font-bold text-on-surface"}>{"Complete BOS Parts"}</span>
<span className={"font-body-sm text-[11px] text-secondary"}>{"Cables, Breakers, Rails"}</span>
</div>
</div>
</div>
</div>
</section>


</div></main>
);
}
