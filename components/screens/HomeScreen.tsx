export default function HomeScreen() {
return (
<main className={"w-full pt-[116px] bg-surface-canvas"}><div className={"flex flex-col w-full"}>

<section className={"w-full bg-surface-container-low py-2.5 px-6 border-b border-border-subtle"}>
<div className={"max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-space-sm font-label-mono-spec text-label-mono-spec"}>
<div className={"flex items-center gap-space-md"}>
<span className={"inline-flex items-center gap-1.5 text-primary font-bold"}>
<span className={"material-symbols-outlined text-[16px] text-tertiary"} aria-hidden={"true"}>{"bolt"}</span>{"\n          Official Direct Importer & Distributor in Myanmar\n        "}</span>
<span className={"text-outline-variant"}>{"|"}</span>
<span className={"text-secondary font-medium"}>{"High / Medium / Low Voltage Power Cables & Solar Solutions"}</span>
</div>
<div className={"flex items-center gap-space-lg"}>
<span className={"inline-flex items-center gap-1 text-tier-certified font-semibold"}>
<span className={"material-symbols-outlined text-[14px]"} aria-hidden={"true"}>{"local_shipping"}</span>{"\n          Nationwide Dispatch (Yangon, Mandalay & All Regions)\n        "}</span>
<span className={"hidden sm:inline-block text-outline-variant"}>{"|"}</span>
<span className={"hidden sm:inline-flex items-center gap-1 text-solar-amber font-bold"}>
<span className={"material-symbols-outlined text-[14px]"} aria-hidden={"true"}>{"verified"}</span>{"\n          100% Genuine Guaranteed\n        "}</span>
</div>
</div>
</section>

<section className={"relative w-full overflow-hidden bg-gradient-to-b from-surface via-surface to-surface-container-low py-space-xl px-6 border-b border-border-subtle"}>
<div className={"max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center relative z-10"}>

<div className={"lg:col-span-7 flex flex-col gap-space-md"}>
<div className={"inline-flex items-center gap-space-xs self-start bg-surface-container px-3.5 py-1.5 rounded-full text-primary font-badge-label text-badge-label uppercase tracking-wider border border-border-subtle"}>
<span className={"material-symbols-outlined text-[15px] text-solar-amber"} aria-hidden={"true"}>{"verified"}</span>{"\n          Golden Diamond Eagle Co., Ltd. (GDE) · Myanmar\n        "}</div>
<div className={"flex flex-col gap-space-xs"}>
<h1 className={"font-display-hero text-[34px] sm:text-display-hero text-on-surface font-extrabold tracking-tight leading-tight"}>{"\n            Your Most Trusted "}<br />
<span className={"text-primary"}>{"Electrical Power & Solar"}</span>
<br />
<span className={"text-solar-amber"}>{"Energy Partner in Myanmar"}</span>
</h1>
<p className={"font-body-lg text-body-lg text-on-surface-variant max-w-2xl pt-space-xs leading-relaxed"}>{"\n            Official Importer & Nationwide Wholesale Distributor of High/Medium/Low Voltage Cables & Accessories, PC Wire, Tier-1 Solar Inverters (Next Electric, Livfast, Solis, GoodWe), Solar Panels, Solar Lithium/Gel/Tubular Batteries, and Complete Turnkey Solar Packages.\n          "}</p>
<p className={"text-primary font-myanmar text-body-md font-semibold pt-1"}>{"\n            \"Golden Diamond Eagle Co., Ltd. — Electrical Power & Solar Energy နဲ့ ပတ်သတ်လို့ ယုံကြည်စိတ်ချရဆုံး လက်တွဲဖော်\"\n          "}</p>
</div>

<div className={"flex flex-wrap items-center gap-space-md pt-space-sm"}>
<a className={"inline-flex items-center justify-center gap-space-xs bg-solar-amber text-on-surface font-bold px-6 py-3.5 rounded-lg font-headline-sm text-[16px] shadow hover:bg-amber-500 transition-all"} href={"/solar-packages"}>
<span className={"material-symbols-outlined text-[20px]"} aria-hidden={"true"}>{"solar_power"}</span>{"\n            View Solar Packages\n          "}</a>
<a className={"inline-flex items-center justify-center gap-space-xs bg-primary text-on-primary px-6 py-3.5 rounded-lg font-headline-sm text-[16px] font-bold shadow hover:bg-primary-container transition-all"} href={"tel:+959957933180"}>
<span className={"material-symbols-outlined text-[20px]"} aria-hidden={"true"}>{"phone_in_talk"}</span>
<span>{"အခမဲ့ ဆွေးနွေးတိုင်ပင်ရန် / Call Sales"}</span>
</a>
<a className={"inline-flex items-center justify-center gap-space-xs bg-[#7360F2] text-white px-5 py-3.5 rounded-lg font-headline-sm text-[15px] font-bold shadow hover:opacity-95 transition-all"} href={"https://invite.viber.com/?g2=AQBL3Uw94Ep4qE7tS7yPEErHa5w1BRUcuxQHFfsZQLah3bkPINFLs3iUY9KGOXNJ"} rel={"noopener noreferrer"} target={"_blank"}>
<span className={"material-symbols-outlined text-[18px]"} aria-hidden={"true"}>{"forum"}</span>{"\n            Viber Chat\n          "}</a>
</div>

<div className={"grid grid-cols-2 sm:grid-cols-4 gap-space-sm pt-space-md"}>
<div className={"flex items-center gap-2 p-2.5 rounded-lg bg-surface-card shadow-sm border border-border-subtle"}>
<span className={"material-symbols-outlined text-[22px] text-tier-certified"} aria-hidden={"true"}>{"verified"}</span>
<div className={"flex flex-col"}>
<span className={"font-label-mono-spec text-label-mono-spec font-bold text-on-surface"}>{"100% Genuine"}</span>
<span className={"font-body-sm text-body-sm text-secondary"}>{"Direct Import"}</span>
</div>
</div>
<div className={"flex items-center gap-2 p-2.5 rounded-lg bg-surface-card shadow-sm border border-border-subtle"}>
<span className={"material-symbols-outlined text-[22px] text-primary"} aria-hidden={"true"}>{"power"}</span>
<div className={"flex flex-col"}>
<span className={"font-label-mono-spec text-label-mono-spec font-bold text-on-surface"}>{"HV / MV / LV"}</span>
<span className={"font-body-sm text-body-sm text-secondary"}>{"Cables & PC Wire"}</span>
</div>
</div>
<div className={"flex items-center gap-2 p-2.5 rounded-lg bg-surface-card shadow-sm border border-border-subtle"}>
<span className={"material-symbols-outlined text-[22px] text-tertiary"} aria-hidden={"true"}>{"local_shipping"}</span>
<div className={"flex flex-col"}>
<span className={"font-label-mono-spec text-label-mono-spec font-bold text-on-surface"}>{"Nationwide"}</span>
<span className={"font-body-sm text-body-sm text-secondary"}>{"Whole Myanmar"}</span>
</div>
</div>
<div className={"flex items-center gap-2 p-2.5 rounded-lg bg-surface-card shadow-sm border border-border-subtle"}>
<span className={"material-symbols-outlined text-[22px] text-solar-amber"} aria-hidden={"true"}>{"engineering"}</span>
<div className={"flex flex-col"}>
<span className={"font-label-mono-spec text-label-mono-spec font-bold text-on-surface"}>{"Turnkey EPC"}</span>
<span className={"font-body-sm text-body-sm text-secondary"}>{"Expert Engineering"}</span>
</div>
</div>
</div>
</div>

<div className={"lg:col-span-5 relative"}>
<div className={"relative bg-surface-card rounded-2xl p-space-md shadow-xl border border-border-subtle overflow-hidden"}>
<div className={"flex items-center justify-between pb-space-sm border-b border-border-subtle"}>
<div className={"flex items-center gap-2"}>
<img alt={"GDE Logo"} className={"w-8 h-8 rounded object-contain"} src={"/images/asset-004.jpg"} loading={"lazy"} decoding={"async"} />
<span className={"font-label-mono-spec text-label-mono-spec uppercase text-primary font-bold"}>{"GDE Official Distribution"}</span>
</div>
<span className={"bg-tier-certified text-on-secondary font-badge-label text-badge-label uppercase px-2 py-0.5 rounded font-bold"}>{"Ready in Stock"}</span>
</div>

<div className={"grid grid-cols-2 gap-space-sm items-center bg-surface-container-low rounded-xl p-space-sm mt-space-sm"}>
<div className={"relative flex flex-col items-center group p-2 bg-surface-card rounded-lg"}>
<img alt={"Livfast / Next Electric Solar Inverters"} className={"w-full h-36 object-contain transition-transform duration-300 group-hover:scale-105"} src={"/images/asset-019.jpg"} loading={"lazy"} decoding={"async"} />
<span className={"font-label-mono-spec text-label-mono-spec font-bold text-on-surface text-center mt-2"}>{"Hybrid & Off-Grid"}</span>
<span className={"font-body-sm text-[11px] text-primary font-semibold"}>{"Next Electric & Livfast"}</span>
</div>
<div className={"relative flex flex-col items-center group p-2 bg-surface-card rounded-lg"}>
<img alt={"GDE Solar Lithium & Tubular Battery"} className={"w-full h-36 object-contain transition-transform duration-300 group-hover:scale-105"} src={"/images/asset-025.jpg"} loading={"lazy"} decoding={"async"} />
<span className={"font-label-mono-spec text-label-mono-spec font-bold text-on-surface text-center mt-2"}>{"Energy Storage"}</span>
<span className={"font-body-sm text-[11px] text-primary font-semibold"}>{"Lithium, Gel & Tubular"}</span>
</div>
</div>

<div className={"grid grid-cols-2 gap-space-xs mt-space-sm"}>
<div className={"bg-surface-container-low p-2.5 rounded-lg flex items-center gap-2"}>
<span className={"material-symbols-outlined text-solar-amber text-[20px]"} aria-hidden={"true"}>{"electric_meter"}</span>
<div className={"flex flex-col"}>
<span className={"font-badge-label text-badge-label text-secondary uppercase"}>{"Power Grid"}</span>
<span className={"font-label-mono-spec text-[11px] text-on-surface font-bold"}>{"HV/MV Cable Solutions"}</span>
</div>
</div>
<div className={"bg-surface-container-low p-2.5 rounded-lg flex items-center gap-2"}>
<span className={"material-symbols-outlined text-tertiary text-[20px]"} aria-hidden={"true"}>{"lightbulb"}</span>
<div className={"flex flex-col"}>
<span className={"font-badge-label text-badge-label text-secondary uppercase"}>{"Turnkey Sets"}</span>
<span className={"font-label-mono-spec text-[11px] text-on-surface font-bold"}>{"5 Complete Solar Packages"}</span>
</div>
</div>
</div>

<div className={"mt-space-sm p-3 rounded-lg bg-surface-container flex items-center justify-between"}>
<div className={"flex flex-col"}>
<span className={"text-[11px] text-secondary font-semibold"}>{"Yangon Head Office Hotline:"}</span>
<span className={"font-label-mono-spec text-body-sm font-bold text-primary"}>{"(+959) 957933180 / 952706118"}</span>
</div>
<a className={"font-label-mono-spec text-label-mono-spec text-primary font-bold hover:underline flex items-center gap-1"} href={"/contact"}>{"Contact Hub →"}</a>
</div>
</div>
</div>
</div>
</section>

<section className={"w-full bg-surface-container py-space-lg px-6 border-b border-border-subtle"}>
<div className={"max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-space-md"}>
<div className={"flex items-center gap-space-md p-space-sm bg-surface-card rounded-xl shadow-sm border border-border-subtle"}>
<div className={"w-12 h-12 rounded-lg bg-surface-container-low flex items-center justify-center text-primary shrink-0"}>
<span className={"material-symbols-outlined text-[28px]"} aria-hidden={"true"}>{"electric_bolt"}</span>
</div>
<div className={"flex flex-col"}>
<span className={"font-headline-lg text-headline-lg font-black text-on-surface leading-none"}>{"Power Cables"}</span>
<span className={"font-body-sm text-body-sm text-secondary font-medium"}>{"HV, MV, LV & PC Wire"}</span>
</div>
</div>
<div className={"flex items-center gap-space-md p-space-sm bg-surface-card rounded-xl shadow-sm border border-border-subtle"}>
<div className={"w-12 h-12 rounded-lg bg-surface-container-low flex items-center justify-center text-solar-amber shrink-0"}>
<span className={"material-symbols-outlined text-[28px]"} aria-hidden={"true"}>{"solar_power"}</span>
</div>
<div className={"flex flex-col"}>
<span className={"font-headline-lg text-headline-lg font-black text-on-surface leading-none"}>{"5 Packages"}</span>
<span className={"font-body-sm text-body-sm text-secondary font-medium"}>{"Basic to Platinum Solar"}</span>
</div>
</div>
<div className={"flex items-center gap-space-md p-space-sm bg-surface-card rounded-xl shadow-sm border border-border-subtle"}>
<div className={"w-12 h-12 rounded-lg bg-surface-container-low flex items-center justify-center text-tertiary shrink-0"}>
<span className={"material-symbols-outlined text-[28px]"} aria-hidden={"true"}>{"battery_charging_full"}</span>
</div>
<div className={"flex flex-col"}>
<span className={"font-headline-lg text-headline-lg font-black text-on-surface leading-none"}>{"4 Battery Tech"}</span>
<span className={"font-body-sm text-body-sm text-secondary font-medium"}>{"Lithium, Gel, Tubular, Auto"}</span>
</div>
</div>
<div className={"flex items-center gap-space-md p-space-sm bg-surface-card rounded-xl shadow-sm border border-border-subtle"}>
<div className={"w-12 h-12 rounded-lg bg-surface-container-low flex items-center justify-center text-tier-certified shrink-0"}>
<span className={"material-symbols-outlined text-[28px]"} aria-hidden={"true"}>{"verified_user"}</span>
</div>
<div className={"flex flex-col"}>
<span className={"font-headline-lg text-headline-lg font-black text-on-surface leading-none"}>{"ISO / CE / IEC"}</span>
<span className={"font-body-sm text-body-sm text-secondary font-medium"}>{"Certified & Factory Warranty"}</span>
</div>
</div>
</div>
</section>

<section className={"w-full bg-surface-canvas py-space-xl px-6 border-b border-border-subtle"} id={"packages"}>
<div className={"max-w-7xl mx-auto flex flex-col gap-space-lg"}>
<div className={"flex flex-col md:flex-row md:items-end justify-between gap-space-md"}>
<div className={"flex flex-col gap-space-xs"}>
<div className={"inline-flex items-center gap-1.5 font-badge-label text-badge-label uppercase text-solar-amber tracking-widest font-bold"}>
<span className={"material-symbols-outlined text-[16px]"} aria-hidden={"true"}>{"verified"}</span>{" Available Turnkey Packages\n          "}</div>
<h2 className={"font-headline-lg text-headline-lg font-bold text-on-surface"}>{"Signature Solar Packages"}</h2>
<p className={"font-body-md text-body-md text-on-surface-variant max-w-2xl font-myanmar"}>{"\n            အိမ်သုံး၊ ဆိုင်သုံး၊ ရုံးသုံးနှင့် စက်ရုံသုံးများအတွက် စိတ်ကြိုက်ရွေးချယ်နိုင်သော GDE Complete Solar System Packages များ\n          "}</p>
</div>
<a className={"inline-flex items-center gap-space-xs font-label-mono-spec text-label-mono-spec text-primary font-bold hover:underline"} href={"tel:+959957933180"}>{"\n          Request Custom Package Sizing\n          "}<span className={"material-symbols-outlined text-[16px]"} aria-hidden={"true"}>{"arrow_forward"}</span>
</a>
</div>

<div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-space-md"}>

<div className={"bg-surface-card rounded-2xl p-space-md shadow-sm border border-border-subtle hover:border-primary transition-all flex flex-col justify-between"}>
<div>
<div className={"flex items-center justify-between pb-space-xs"}>
<span className={"font-badge-label text-badge-label text-secondary uppercase font-bold bg-surface-container px-2 py-0.5 rounded"}>{"Essential"}</span>
<span className={"font-label-mono-spec text-[11px] text-tier-certified font-bold"}>{"3kW - 5kW"}</span>
</div>
<h3 className={"font-headline-sm text-[18px] font-black text-on-surface mt-2"}>{"Basic Package"}</h3>
<p className={"font-body-sm text-[12px] text-on-surface-variant mt-1"}>{"Residential & Small Shop Essential Backup System"}</p>
<div className={"border-t border-border-subtle my-3 pt-3 flex flex-col gap-2 font-body-sm text-[12px]"}>
<div className={"flex items-start gap-1.5"}><span className={"material-symbols-outlined text-primary text-[16px] shrink-0"} aria-hidden={"true"}>{"check_circle"}</span><span>{"Next Electric / Livfast 3.5kW - 5kW Off-Grid/Hybrid Inverter"}</span></div>
<div className={"flex items-start gap-1.5"}><span className={"material-symbols-outlined text-primary text-[16px] shrink-0"} aria-hidden={"true"}>{"check_circle"}</span><span>{"Tall Tubular / Solar Gel Heavy Duty Batteries"}</span></div>
<div className={"flex items-start gap-1.5"}><span className={"material-symbols-outlined text-primary text-[16px] shrink-0"} aria-hidden={"true"}>{"check_circle"}</span><span>{"Tier-1 Monocrystalline Solar Panels (4-6 Pcs)"}</span></div>
<div className={"flex items-start gap-1.5"}><span className={"material-symbols-outlined text-primary text-[16px] shrink-0"} aria-hidden={"true"}>{"check_circle"}</span><span>{"Complete DC/AC Protection Box & PV Wire"}</span></div>
</div>
</div>
<div className={"pt-3 border-t border-border-subtle flex flex-col gap-2"}>
<span className={"font-label-mono-spec text-[11px] text-secondary font-medium"}>{"Lights, Fans, TV, Refrigerator, WiFi"}</span>
<a className={"bg-surface-container hover:bg-primary hover:text-on-primary text-primary py-2 rounded-lg text-center font-label-mono-spec text-[12px] font-bold transition-colors"} href={"tel:+959957933180"}>{"Get Package Pricing"}</a>
</div>
</div>

<div className={"bg-surface-card rounded-2xl p-space-md shadow-sm border border-primary/50 relative hover:shadow-md transition-all flex flex-col justify-between"}>
<div className={"absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-on-primary font-badge-label text-[10px] uppercase font-bold px-2.5 py-0.5 rounded-full shadow"}>{"Popular Choice"}</div>
<div>
<div className={"flex items-center justify-between pb-space-xs pt-1"}>
<span className={"font-badge-label text-badge-label text-primary uppercase font-bold bg-surface-container px-2 py-0.5 rounded"}>{"Pro Home"}</span>
<span className={"font-label-mono-spec text-[11px] text-primary font-bold"}>{"5kW - 8kW"}</span>
</div>
<h3 className={"font-headline-sm text-[18px] font-black text-on-surface mt-2"}>{"Pro Package"}</h3>
<p className={"font-body-sm text-[12px] text-on-surface-variant mt-1"}>{"Full Modern Residence & Office Air-Con System"}</p>
<div className={"border-t border-border-subtle my-3 pt-3 flex flex-col gap-2 font-body-sm text-[12px]"}>
<div className={"flex items-start gap-1.5"}><span className={"material-symbols-outlined text-primary text-[16px] shrink-0"} aria-hidden={"true"}>{"check_circle"}</span><span>{"Solis / Next Electric 6kW - 8kW Smart Hybrid"}</span></div>
<div className={"flex items-start gap-1.5"}><span className={"material-symbols-outlined text-primary text-[16px] shrink-0"} aria-hidden={"true"}>{"check_circle"}</span><span>{"Lithium-Ion LiFePO4 Smart Battery Pack 5.12kWh"}</span></div>
<div className={"flex items-start gap-1.5"}><span className={"material-symbols-outlined text-primary text-[16px] shrink-0"} aria-hidden={"true"}>{"check_circle"}</span><span>{"High-Efficiency Tier-1 Bifacial PV (8-12 Pcs)"}</span></div>
<div className={"flex items-start gap-1.5"}><span className={"material-symbols-outlined text-primary text-[16px] shrink-0"} aria-hidden={"true"}>{"check_circle"}</span><span>{"Antai Aluminum Rail & Dual Surge Protection"}</span></div>
</div>
</div>
<div className={"pt-3 border-t border-border-subtle flex flex-col gap-2"}>
<span className={"font-label-mono-spec text-[11px] text-secondary font-medium"}>{"1-2 Inverter ACs, Pump, Full Home"}</span>
<a className={"bg-primary text-on-primary py-2 rounded-lg text-center font-label-mono-spec text-[12px] font-bold hover:bg-primary-container transition-colors shadow-sm"} href={"tel:+959957933180"}>{"Get Package Pricing"}</a>
</div>
</div>

<div className={"bg-surface-card rounded-2xl p-space-md shadow-sm border border-border-subtle hover:border-solar-amber transition-all flex flex-col justify-between"}>
<div>
<div className={"flex items-center justify-between pb-space-xs"}>
<span className={"font-badge-label text-badge-label text-solar-amber uppercase font-bold bg-amber-50 px-2 py-0.5 rounded"}>{"Commercial"}</span>
<span className={"font-label-mono-spec text-[11px] text-solar-amber font-bold"}>{"10kW - 15kW"}</span>
</div>
<h3 className={"font-headline-sm text-[18px] font-black text-on-surface mt-2"}>{"Premium Package"}</h3>
<p className={"font-body-sm text-[12px] text-on-surface-variant mt-1"}>{"Luxury Villa, Clinic, Petrol Station & Commercial"}</p>
<div className={"border-t border-border-subtle my-3 pt-3 flex flex-col gap-2 font-body-sm text-[12px]"}>
<div className={"flex items-start gap-1.5"}><span className={"material-symbols-outlined text-solar-amber text-[16px] shrink-0"} aria-hidden={"true"}>{"check_circle"}</span><span>{"GoodWe / Solis 10kW - 15kW 3-Phase Hybrid"}</span></div>
<div className={"flex items-start gap-1.5"}><span className={"material-symbols-outlined text-solar-amber text-[16px] shrink-0"} aria-hidden={"true"}>{"check_circle"}</span><span>{"High-Voltage Lithium Storage (10kWh - 15kWh)"}</span></div>
<div className={"flex items-start gap-1.5"}><span className={"material-symbols-outlined text-solar-amber text-[16px] shrink-0"} aria-hidden={"true"}>{"check_circle"}</span><span>{"AIKO N-Type ABC High-Yield Modules (18-24 Pcs)"}</span></div>
<div className={"flex items-start gap-1.5"}><span className={"material-symbols-outlined text-solar-amber text-[16px] shrink-0"} aria-hidden={"true"}>{"check_circle"}</span><span>{"Zero Export Smart Meter & Remote App Monitor"}</span></div>
</div>
</div>
<div className={"pt-3 border-t border-border-subtle flex flex-col gap-2"}>
<span className={"font-label-mono-spec text-[11px] text-secondary font-medium"}>{"Multiple ACs, Freezers, Heavy Pumps"}</span>
<a className={"bg-surface-container hover:bg-solar-amber hover:text-on-surface text-on-surface py-2 rounded-lg text-center font-label-mono-spec text-[12px] font-bold transition-colors"} href={"tel:+959957933180"}>{"Get Package Pricing"}</a>
</div>
</div>

<div className={"bg-surface-card rounded-2xl p-space-md shadow-sm border border-border-subtle hover:border-amber-400 transition-all flex flex-col justify-between"}>
<div>
<div className={"flex items-center justify-between pb-space-xs"}>
<span className={"font-badge-label text-badge-label text-amber-700 uppercase font-bold bg-amber-100 px-2 py-0.5 rounded"}>{"Heavy Duty"}</span>
<span className={"font-label-mono-spec text-[11px] text-amber-800 font-bold"}>{"20kW - 30kW"}</span>
</div>
<h3 className={"font-headline-sm text-[18px] font-black text-on-surface mt-2"}>{"Gold Package"}</h3>
<p className={"font-body-sm text-[12px] text-on-surface-variant mt-1"}>{"Medium Enterprise, Supermarket & Warehousing"}</p>
<div className={"border-t border-border-subtle my-3 pt-3 flex flex-col gap-2 font-body-sm text-[12px]"}>
<div className={"flex items-start gap-1.5"}><span className={"material-symbols-outlined text-amber-600 text-[16px] shrink-0"} aria-hidden={"true"}>{"check_circle"}</span><span>{"GoodWe / Solis Commercial Hybrid String Units"}</span></div>
<div className={"flex items-start gap-1.5"}><span className={"material-symbols-outlined text-amber-600 text-[16px] shrink-0"} aria-hidden={"true"}>{"check_circle"}</span><span>{"GDE Modular Rack Lithium Battery (20kWh - 30kWh)"}</span></div>
<div className={"flex items-start gap-1.5"}><span className={"material-symbols-outlined text-amber-600 text-[16px] shrink-0"} aria-hidden={"true"}>{"check_circle"}</span><span>{"Tier-1 580W-675W Monocrystalline PV Array"}</span></div>
<div className={"flex items-start gap-1.5"}><span className={"material-symbols-outlined text-amber-600 text-[16px] shrink-0"} aria-hidden={"true"}>{"check_circle"}</span><span>{"Full Rapid Shutdown (RSD) Fire Protection"}</span></div>
</div>
</div>
<div className={"pt-3 border-t border-border-subtle flex flex-col gap-2"}>
<span className={"font-label-mono-spec text-[11px] text-secondary font-medium"}>{"Continuous Business Operations"}</span>
<a className={"bg-surface-container hover:bg-primary hover:text-on-primary text-primary py-2 rounded-lg text-center font-label-mono-spec text-[12px] font-bold transition-colors"} href={"tel:+959957933180"}>{"Get Package Pricing"}</a>
</div>
</div>

<div className={"bg-surface-card rounded-2xl p-space-md shadow-sm border border-tertiary/40 hover:border-tertiary transition-all flex flex-col justify-between"}>
<div>
<div className={"flex items-center justify-between pb-space-xs"}>
<span className={"font-badge-label text-badge-label text-tertiary uppercase font-bold bg-teal-50 px-2 py-0.5 rounded"}>{"Industrial"}</span>
<span className={"font-label-mono-spec text-[11px] text-tertiary font-bold"}>{"50kW - 100kW+"}</span>
</div>
<h3 className={"font-headline-sm text-[18px] font-black text-on-surface mt-2"}>{"Platinum Package"}</h3>
<p className={"font-body-sm text-[12px] text-on-surface-variant mt-1"}>{"Industrial Factory, Large Agricultural Farm & Microgrid"}</p>
<div className={"border-t border-border-subtle my-3 pt-3 flex flex-col gap-2 font-body-sm text-[12px]"}>
<div className={"flex items-start gap-1.5"}><span className={"material-symbols-outlined text-tertiary text-[16px] shrink-0"} aria-hidden={"true"}>{"check_circle"}</span><span>{"50kW - 100kW High-Capacity Industrial Inverter Bank"}</span></div>
<div className={"flex items-start gap-1.5"}><span className={"material-symbols-outlined text-tertiary text-[16px] shrink-0"} aria-hidden={"true"}>{"check_circle"}</span><span>{"High Voltage C&I Cabinet Lithium Battery Storage"}</span></div>
<div className={"flex items-start gap-1.5"}><span className={"material-symbols-outlined text-tertiary text-[16px] shrink-0"} aria-hidden={"true"}>{"check_circle"}</span><span>{"Custom Ground Mount or Metal Sheet Structure"}</span></div>
<div className={"flex items-start gap-1.5"}><span className={"material-symbols-outlined text-tertiary text-[16px] shrink-0"} aria-hidden={"true"}>{"check_circle"}</span><span>{"GDE Certified EPC Engineering & Commissioning"}</span></div>
</div>
</div>
<div className={"pt-3 border-t border-border-subtle flex flex-col gap-2"}>
<span className={"font-label-mono-spec text-[11px] text-secondary font-medium"}>{"Full Factory Machinery & Cold Storage"}</span>
<a className={"bg-surface-container hover:bg-tertiary hover:text-white text-tertiary py-2 rounded-lg text-center font-label-mono-spec text-[12px] font-bold transition-colors"} href={"tel:+959957933180"}>{"Get Package Pricing"}</a>
</div>
</div>
</div>
</div>
</section>

<section className={"w-full bg-surface py-space-xl px-6 border-b border-border-subtle"} id={"products"}>
<div className={"max-w-7xl mx-auto flex flex-col gap-space-lg"}>
<div className={"flex flex-col md:flex-row md:items-end justify-between gap-space-md"}>
<div className={"flex flex-col gap-space-xs"}>
<span className={"font-badge-label text-badge-label uppercase text-primary font-bold"}>{"Comprehensive Product Catalog"}</span>
<h2 className={"font-headline-lg text-headline-lg font-bold text-on-surface"}>{"Core Product Categories"}</h2>
<p className={"font-body-md text-body-md text-on-surface-variant max-w-2xl"}>{"\n            From High, Medium and Low Voltage Cables to Inverters, Solar Batteries, and Lighting — 100% genuine products imported directly by Golden Diamond Eagle Co., Ltd.\n          "}</p>
</div>
<a className={"inline-flex items-center gap-space-xs font-label-mono-spec text-label-mono-spec text-primary font-bold hover:underline"} href={"#catalog"}>{"\n          View All Hardware\n          "}<span className={"material-symbols-outlined text-[16px]"} aria-hidden={"true"}>{"arrow_forward"}</span>
</a>
</div>

<div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-space-md"}>

<div className={"bg-surface-card rounded-2xl p-space-md shadow-sm border border-border-subtle hover:shadow-md transition-shadow flex flex-col justify-between"} id={"electrical"}>
<div>
<div className={"flex items-center justify-between pb-space-sm"}>
<span className={"font-badge-label text-badge-label text-primary uppercase font-bold bg-surface-container px-2 py-0.5 rounded"}>{"HV / MV / LV"}</span>
<span className={"font-label-mono-spec text-label-mono-spec text-secondary"}>{"Power Cables"}</span>
</div>
<div className={"h-36 w-full flex items-center justify-center p-3 bg-surface-container-low rounded-xl"}>
<img alt={"High Voltage and Medium Voltage Cables"} className={"max-h-full max-w-full object-contain"} src={"/images/asset-020.jpg"} loading={"lazy"} decoding={"async"} />
</div>
<h3 className={"font-headline-sm text-headline-sm font-bold text-on-surface mt-space-sm"}>{"Electrical Products"}</h3>
<p className={"font-body-sm text-body-sm text-on-surface-variant mt-1"}>{"\n              High Voltage Cable & Accessories, Medium Voltage Cable & Accessories, Low Voltage Cable, and PC Wire for infrastructure & commercial electrification.\n            "}</p>
</div>
<a className={"inline-flex items-center justify-between font-label-mono-spec text-label-mono-spec text-primary font-bold pt-space-md mt-space-sm hover:text-primary-container"} href={"#catalog"}>
<span>{"Cable Specifications"}</span>
<span className={"material-symbols-outlined text-[16px]"} aria-hidden={"true"}>{"chevron_right"}</span>
</a>
</div>

<div className={"bg-surface-card rounded-2xl p-space-md shadow-sm border border-border-subtle hover:shadow-md transition-shadow flex flex-col justify-between"} id={"inverters"}>
<div>
<div className={"flex items-center justify-between pb-space-sm"}>
<span className={"font-badge-label text-badge-label text-tier-certified uppercase font-bold bg-surface-container px-2 py-0.5 rounded"}>{"Authorized"}</span>
<span className={"font-label-mono-spec text-label-mono-spec text-secondary"}>{"3kW - 125kW"}</span>
</div>
<div className={"h-36 w-full flex items-center justify-center p-3 bg-surface-container-low rounded-xl"}>
<img alt={"Next Electric, Livfast, Solis, GoodWe Inverters"} className={"max-h-full max-w-full object-contain"} src={"/images/asset-018.jpg"} loading={"lazy"} decoding={"async"} />
</div>
<h3 className={"font-headline-sm text-headline-sm font-bold text-on-surface mt-space-sm"}>{"Solar Inverters"}</h3>
<p className={"font-body-sm text-body-sm text-on-surface-variant mt-1"}>{"\n              Next Electric, Livfast, Solis, and GoodWe. On-Grid, Off-Grid, and Smart Hybrid inverters designed for Myanmar power stability.\n            "}</p>
</div>
<a className={"inline-flex items-center justify-between font-label-mono-spec text-label-mono-spec text-primary font-bold pt-space-md mt-space-sm hover:text-primary-container"} href={"#catalog"}>
<span>{"View Inverters"}</span>
<span className={"material-symbols-outlined text-[16px]"} aria-hidden={"true"}>{"chevron_right"}</span>
</a>
</div>

<div className={"bg-surface-card rounded-2xl p-space-md shadow-sm border border-border-subtle hover:shadow-md transition-shadow flex flex-col justify-between"} id={"batteries"}>
<div>
<div className={"flex items-center justify-between pb-space-sm"}>
<span className={"font-badge-label text-badge-label text-solar-amber uppercase font-bold bg-surface-container px-2 py-0.5 rounded"}>{"Deep Cycle"}</span>
<span className={"font-label-mono-spec text-label-mono-spec text-secondary"}>{"LiFePO4 & Tubular"}</span>
</div>
<div className={"h-36 w-full flex items-center justify-center p-3 bg-surface-container-low rounded-xl"}>
<img alt={"Lithium Ion Battery, Solar Gel, Tall Tubular Battery"} className={"max-h-full max-w-full object-contain"} src={"/images/asset-025.jpg"} loading={"lazy"} decoding={"async"} />
</div>
<h3 className={"font-headline-sm text-headline-sm font-bold text-on-surface mt-space-sm"}>{"Solar Batteries"}</h3>
<p className={"font-body-sm text-body-sm text-on-surface-variant mt-1"}>{"\n              Lithium Ion Battery packs (48V/51.2V), Solar Gel Battery, and Tall Tubular heavy-duty deep-cycle batteries for long-duration outages.\n            "}</p>
</div>
<a className={"inline-flex items-center justify-between font-label-mono-spec text-label-mono-spec text-primary font-bold pt-space-md mt-space-sm hover:text-primary-container"} href={"#catalog"}>
<span>{"View Batteries"}</span>
<span className={"material-symbols-outlined text-[16px]"} aria-hidden={"true"}>{"chevron_right"}</span>
</a>
</div>

<div className={"bg-surface-card rounded-2xl p-space-md shadow-sm border border-border-subtle hover:shadow-md transition-shadow flex flex-col justify-between"}>
<div>
<div className={"flex items-center justify-between pb-space-sm"}>
<span className={"font-badge-label text-badge-label text-tier-certified uppercase font-bold bg-surface-container px-2 py-0.5 rounded"}>{"Tier 1 PV"}</span>
<span className={"font-label-mono-spec text-label-mono-spec text-secondary"}>{"540W - 675W"}</span>
</div>
<div className={"h-36 w-full flex items-center justify-center p-3 bg-surface-container-low rounded-xl"}>
<img alt={"AIKO & Longi Solar Modules"} className={"max-h-full max-w-full object-contain"} src={"/images/asset-022.jpg"} loading={"lazy"} decoding={"async"} />
</div>
<h3 className={"font-headline-sm text-headline-sm font-bold text-on-surface mt-space-sm"}>{"Solar Panels"}</h3>
<p className={"font-body-sm text-body-sm text-on-surface-variant mt-1"}>{"\n              Tier-1 high efficiency Monocrystalline, N-Type TOPCon & ABC bifacial modules (AIKO, Longi, Jinko) with up to 30-year performance warranties.\n            "}</p>
</div>
<a className={"inline-flex items-center justify-between font-label-mono-spec text-label-mono-spec text-primary font-bold pt-space-md mt-space-sm hover:text-primary-container"} href={"#catalog"}>
<span>{"View Solar Panels"}</span>
<span className={"material-symbols-outlined text-[16px]"} aria-hidden={"true"}>{"chevron_right"}</span>
</a>
</div>

<div className={"bg-surface-card rounded-2xl p-space-md shadow-sm border border-border-subtle hover:shadow-md transition-shadow flex flex-col justify-between"}>
<div>
<div className={"flex items-center justify-between pb-space-sm"}>
<span className={"font-badge-label text-badge-label text-secondary uppercase font-bold bg-surface-container px-2 py-0.5 rounded"}>{"Commercial"}</span>
<span className={"font-label-mono-spec text-label-mono-spec text-secondary"}>{"12V 45Ah-200Ah"}</span>
</div>
<div className={"h-36 w-full flex items-center justify-center p-3 bg-surface-container-low rounded-xl"}>
<div className={"flex flex-col items-center justify-center text-primary"}>
<span className={"material-symbols-outlined text-[64px]"} aria-hidden={"true"}>{"battery_horiz_007"}</span>
<span className={"font-label-mono-spec text-[11px] font-bold mt-1"}>{"Heavy Duty Cranking"}</span>
</div>
</div>
<h3 className={"font-headline-sm text-headline-sm font-bold text-on-surface mt-space-sm"}>{"Automotive Battery"}</h3>
<p className={"font-body-sm text-body-sm text-on-surface-variant mt-1"}>{"\n              Maintenance-free & dry-charged automotive batteries for commercial transport, trucks, agricultural machinery, and backup generator starter sets.\n            "}</p>
</div>
<a className={"inline-flex items-center justify-between font-label-mono-spec text-label-mono-spec text-primary font-bold pt-space-md mt-space-sm hover:text-primary-container"} href={"#catalog"}>
<span>{"View Automotive Range"}</span>
<span className={"material-symbols-outlined text-[16px]"} aria-hidden={"true"}>{"chevron_right"}</span>
</a>
</div>

<div className={"bg-surface-card rounded-2xl p-space-md shadow-sm border border-border-subtle hover:shadow-md transition-shadow flex flex-col justify-between"}>
<div>
<div className={"flex items-center justify-between pb-space-sm"}>
<span className={"font-badge-label text-badge-label text-secondary uppercase font-bold bg-surface-container px-2 py-0.5 rounded"}>{"Mounting"}</span>
<span className={"font-label-mono-spec text-label-mono-spec text-secondary"}>{"AL-6005 & Protection"}</span>
</div>
<div className={"h-36 w-full flex items-center justify-center p-3 bg-surface-container-low rounded-xl"}>
<img alt={"Antai Mounting and Protection"} className={"max-h-full max-w-full object-contain"} src={"/images/asset-021.jpg"} loading={"lazy"} decoding={"async"} />
</div>
<h3 className={"font-headline-sm text-headline-sm font-bold text-on-surface mt-space-sm"}>{"Solar Fitting & Accessories"}</h3>
<p className={"font-body-sm text-body-sm text-on-surface-variant mt-1"}>{"\n              Antai Solar aluminum rails, mid & end clamps, roof brackets, DC combiner boxes, Moreday & Beny circuit breakers, and SPD surge arrestors.\n            "}</p>
</div>
<a className={"inline-flex items-center justify-between font-label-mono-spec text-label-mono-spec text-primary font-bold pt-space-md mt-space-sm hover:text-primary-container"} href={"#catalog"}>
<span>{"View Solar Fittings"}</span>
<span className={"material-symbols-outlined text-[16px]"} aria-hidden={"true"}>{"chevron_right"}</span>
</a>
</div>

<div className={"bg-surface-card rounded-2xl p-space-md shadow-sm border border-border-subtle hover:shadow-md transition-shadow flex flex-col justify-between"}>
<div>
<div className={"flex items-center justify-between pb-space-sm"}>
<span className={"font-badge-label text-badge-label text-solar-amber uppercase font-bold bg-surface-container px-2 py-0.5 rounded"}>{"All-In-One"}</span>
<span className={"font-label-mono-spec text-label-mono-spec text-secondary"}>{"Solar & AC"}</span>
</div>
<div className={"h-36 w-full flex items-center justify-center p-3 bg-surface-container-low rounded-xl"}>
<div className={"flex flex-col items-center justify-center text-solar-amber"}>
<span className={"material-symbols-outlined text-[64px]"} aria-hidden={"true"}>{"wb_twilight"}</span>
<span className={"font-label-mono-spec text-[11px] font-bold mt-1 text-on-surface"}>{"LED Street & Flood"}</span>
</div>
</div>
<h3 className={"font-headline-sm text-headline-sm font-bold text-on-surface mt-space-sm"}>{"Lighting (AC & Solar)"}</h3>
<p className={"font-body-sm text-body-sm text-on-surface-variant mt-1"}>{"\n              Integrated Solar Street Lighting, High-Bay AC Industrial Lighting, LED Flood Lights, and rural compound autonomous illumination systems.\n            "}</p>
</div>
<a className={"inline-flex items-center justify-between font-label-mono-spec text-label-mono-spec text-primary font-bold pt-space-md mt-space-sm hover:text-primary-container"} href={"#catalog"}>
<span>{"View Lighting Catalog"}</span>
<span className={"material-symbols-outlined text-[16px]"} aria-hidden={"true"}>{"chevron_right"}</span>
</a>
</div>

<div className={"bg-surface-card rounded-2xl p-space-md shadow-sm border border-border-subtle hover:shadow-md transition-shadow flex flex-col justify-between"}>
<div>
<div className={"flex items-center justify-between pb-space-sm"}>
<span className={"font-badge-label text-badge-label text-primary uppercase font-bold bg-surface-container px-2 py-0.5 rounded"}>{"Infrastructure"}</span>
<span className={"font-label-mono-spec text-label-mono-spec text-secondary"}>{"Prestressed & BOS"}</span>
</div>
<div className={"h-36 w-full flex items-center justify-center p-3 bg-surface-container-low rounded-xl"}>
<div className={"flex flex-col items-center justify-center text-tertiary"}>
<span className={"material-symbols-outlined text-[64px]"} aria-hidden={"true"}>{"handyman"}</span>
<span className={"font-label-mono-spec text-[11px] font-bold mt-1 text-on-surface"}>{"PC Wire & Hardware"}</span>
</div>
</div>
<h3 className={"font-headline-sm text-headline-sm font-bold text-on-surface mt-space-sm"}>{"PC Wire & Electrical Goods"}</h3>
<p className={"font-body-sm text-body-sm text-on-surface-variant mt-1"}>{"\n              Prestressed concrete (PC) wire, transmission accessories, grounding rods, conduit, and complete balance-of-system hardware.\n            "}</p>
</div>
<a className={"inline-flex items-center justify-between font-label-mono-spec text-label-mono-spec text-primary font-bold pt-space-md mt-space-sm hover:text-primary-container"} href={"#catalog"}>
<span>{"View Electrical Hardware"}</span>
<span className={"material-symbols-outlined text-[16px]"} aria-hidden={"true"}>{"chevron_right"}</span>
</a>
</div>
</div>
</div>
</section>

<section className={"w-full bg-surface-canvas py-space-xl px-6 border-b border-border-subtle"} id={"certificates"}>
<div className={"max-w-7xl mx-auto flex flex-col items-center gap-space-lg"}>
<div className={"flex flex-col items-center text-center gap-space-xs max-w-2xl"}>
<span className={"font-badge-label text-badge-label uppercase text-primary tracking-widest font-bold"}>{"Import and Distribution"}</span>
<h2 className={"font-headline-lg text-headline-lg font-bold text-on-surface"}>{"Our Authorized Brand Partners"}</h2>
<p className={"font-body-md text-body-md text-on-surface-variant"}>{"Golden Diamond Eagle Co., Ltd. (GDE) brings global electrical and solar manufacturing excellence directly to Myanmar."}</p>
</div>

<div className={"w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-space-sm"}>
<div className={"bg-surface-card p-4 rounded-xl shadow-sm border border-border-subtle flex flex-col items-center justify-center text-center hover:bg-surface-container transition-colors group"}>
<span className={"font-label-mono-spec text-[13px] font-extrabold text-on-surface group-hover:text-primary"}>{"NEXT ELECTRIC"}</span>
<span className={"font-badge-label text-[10px] text-secondary uppercase mt-0.5"}>{"Inverters"}</span>
</div>
<div className={"bg-surface-card p-4 rounded-xl shadow-sm border border-border-subtle flex flex-col items-center justify-center text-center hover:bg-surface-container transition-colors group"}>
<span className={"font-label-mono-spec text-[13px] font-extrabold text-on-surface group-hover:text-primary"}>{"LIVFAST"}</span>
<span className={"font-badge-label text-[10px] text-secondary uppercase mt-0.5"}>{"Inverters & Batts"}</span>
</div>
<div className={"bg-surface-card p-4 rounded-xl shadow-sm border border-border-subtle flex flex-col items-center justify-center text-center hover:bg-surface-container transition-colors group"}>
<span className={"font-label-mono-spec text-[13px] font-extrabold text-on-surface group-hover:text-primary"}>{"SOLIS"}</span>
<span className={"font-badge-label text-[10px] text-secondary uppercase mt-0.5"}>{"Hybrid Solar"}</span>
</div>
<div className={"bg-surface-card p-4 rounded-xl shadow-sm border border-border-subtle flex flex-col items-center justify-center text-center hover:bg-surface-container transition-colors group"}>
<span className={"font-label-mono-spec text-[13px] font-extrabold text-on-surface group-hover:text-primary"}>{"GOODWE"}</span>
<span className={"font-badge-label text-[10px] text-secondary uppercase mt-0.5"}>{"C&I Inverters"}</span>
</div>
<div className={"bg-surface-card p-4 rounded-xl shadow-sm border border-border-subtle flex flex-col items-center justify-center text-center hover:bg-surface-container transition-colors group"}>
<span className={"font-label-mono-spec text-[13px] font-extrabold text-on-surface group-hover:text-primary"}>{"AIKO SOLAR"}</span>
<span className={"font-badge-label text-[10px] text-secondary uppercase mt-0.5"}>{"ABC Panels"}</span>
</div>
<div className={"bg-surface-card p-4 rounded-xl shadow-sm border border-border-subtle flex flex-col items-center justify-center text-center hover:bg-surface-container transition-colors group"}>
<span className={"font-label-mono-spec text-[13px] font-extrabold text-on-surface group-hover:text-primary"}>{"ANTAI SOLAR"}</span>
<span className={"font-badge-label text-[10px] text-secondary uppercase mt-0.5"}>{"Mounting Systems"}</span>
</div>
<div className={"bg-surface-card p-4 rounded-xl shadow-sm border border-border-subtle flex flex-col items-center justify-center text-center hover:bg-surface-container transition-colors group"}>
<span className={"font-label-mono-spec text-[13px] font-extrabold text-on-surface group-hover:text-primary"}>{"MOREDAY"}</span>
<span className={"font-badge-label text-[10px] text-secondary uppercase mt-0.5"}>{"Circuit Breakers"}</span>
</div>
<div className={"bg-surface-card p-4 rounded-xl shadow-sm border border-border-subtle flex flex-col items-center justify-center text-center hover:bg-surface-container transition-colors group"}>
<span className={"font-label-mono-spec text-[13px] font-extrabold text-on-surface group-hover:text-primary"}>{"BENY"}</span>
<span className={"font-badge-label text-[10px] text-secondary uppercase mt-0.5"}>{"DC Combiners"}</span>
</div>
<div className={"bg-surface-card p-4 rounded-xl shadow-sm border border-border-subtle flex flex-col items-center justify-center text-center hover:bg-surface-container transition-colors group"}>
<span className={"font-label-mono-spec text-[13px] font-extrabold text-on-surface group-hover:text-primary"}>{"XINHONGYE"}</span>
<span className={"font-badge-label text-[10px] text-secondary uppercase mt-0.5"}>{"TUV Solar Cable"}</span>
</div>
</div>
</div>
</section>

<section className={"w-full bg-surface-canvas py-space-xl px-6 border-b border-border-subtle"} id={"catalog"}>
<div className={"max-w-7xl mx-auto flex flex-col gap-space-lg"}>

<div className={"flex flex-col gap-space-sm"}>
<div className={"flex flex-col md:flex-row md:items-end justify-between gap-space-sm"}>
<div>
<span className={"font-badge-label text-badge-label uppercase text-primary font-bold"}>{"Stock In Yangon & Nationwide"}</span>
<h2 className={"font-headline-lg text-headline-lg font-bold text-on-surface"}>{"Available Inventory & Wholesale Equipment"}</h2>
<p className={"font-body-md text-body-md text-on-surface-variant font-myanmar"}>{"တိုက်ရိုက်တင်သွင်းထားသော စက်ပစ္စည်းစစ်စစ်များ — လက်ကားနှင့် ပရောဂျက်ဈေးနှုန်းများ"}</p>
</div>
<div className={"inline-flex items-center gap-2 bg-surface-card px-3 py-1.5 rounded-lg shadow-sm border border-border-subtle"}>
<span className={"w-2.5 h-2.5 rounded-full bg-tier-certified animate-pulse"}></span>
<span className={"font-label-mono-spec text-label-mono-spec text-on-surface font-semibold"}>{"Yangon Warehouse Ready For Dispatch"}</span>
</div>
</div>

<div className={"flex items-center gap-space-xs overflow-x-auto pb-2 pt-2 scrollbar-none"} id={"productFilterTabs"}>
<button className={"px-4 py-2 rounded-lg font-label-mono-spec text-label-mono-spec font-bold bg-primary text-on-primary whitespace-nowrap shadow-sm filter-btn active"} data-filter={"all"} type={"button"}>{"All Products"}</button>
<button className={"px-4 py-2 rounded-lg font-label-mono-spec text-label-mono-spec font-semibold bg-surface-card text-on-surface hover:bg-surface-container whitespace-nowrap filter-btn border border-border-subtle"} data-filter={"inverters"} type={"button"}>{"Inverters"}</button>
<button className={"px-4 py-2 rounded-lg font-label-mono-spec text-label-mono-spec font-semibold bg-surface-card text-on-surface hover:bg-surface-container whitespace-nowrap filter-btn border border-border-subtle"} data-filter={"batteries"} type={"button"}>{"Solar & Auto Batteries"}</button>
<button className={"px-4 py-2 rounded-lg font-label-mono-spec text-label-mono-spec font-semibold bg-surface-card text-on-surface hover:bg-surface-container whitespace-nowrap filter-btn border border-border-subtle"} data-filter={"cables"} type={"button"}>{"Power Cables & Electrical"}</button>
<button className={"px-4 py-2 rounded-lg font-label-mono-spec text-label-mono-spec font-semibold bg-surface-card text-on-surface hover:bg-surface-container whitespace-nowrap filter-btn border border-border-subtle"} data-filter={"panels"} type={"button"}>{"Solar Panels & Fittings"}</button>
</div>
</div>

<div className={"p-space-sm bg-surface-container rounded-xl flex items-center justify-between flex-wrap gap-2 text-on-surface-variant font-body-sm text-body-sm border border-border-subtle"}>
<div className={"flex items-center gap-2"}>
<span className={"material-symbols-outlined text-[18px] text-primary"} aria-hidden={"true"}>{"info"}</span>
<span>{"B2B Wholesale prices, contractor volumes, and project quotes are provided instantly by our engineering sales team."}</span>
</div>
<a className={"text-primary font-bold font-label-mono-spec text-label-mono-spec hover:underline flex items-center gap-1"} href={"tel:+959957933180"}>{"Call (+959) 957933180 →"}</a>
</div>

<div className={"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md"} id={"productCardsGrid"}>

<div className={"bg-surface-card rounded-2xl p-space-md shadow-sm border border-border-subtle hover:shadow-md transition-all flex flex-col justify-between product-item"} data-category={"inverters"}>
<div>
<div className={"flex items-center justify-between pb-space-xs"}>
<span className={"font-badge-label text-badge-label text-primary uppercase font-bold bg-surface-container px-2 py-0.5 rounded"}>{"Off-Grid / Hybrid"}</span>
<span className={"font-label-mono-spec text-label-mono-spec text-secondary"}>{"3.5kW - 6kW"}</span>
</div>
<div className={"h-44 w-full bg-surface-container-low rounded-xl flex items-center justify-center p-2 mt-2"}>
<img alt={"Next Electric Solar Inverter"} className={"max-h-full max-w-full object-contain"} src={"/images/asset-019.jpg"} loading={"lazy"} decoding={"async"} />
</div>
<div className={"pt-space-sm"}>
<span className={"font-badge-label text-badge-label text-primary font-bold uppercase"}>{"Next Electric"}</span>
<h3 className={"font-headline-sm text-headline-sm font-bold text-on-surface mt-0.5"}>{"Next Electric Solar Inverter"}</h3>
<p className={"font-body-sm text-body-sm text-secondary mt-1"}>{"High-surge capacity, built-in MPPT solar charger, compatible with lithium & tubular batteries."}</p>
</div>
</div>
<div className={"pt-space-md flex flex-col gap-space-xs"}>
<div className={"flex items-center justify-between"}>
<span className={"font-badge-label text-badge-label text-tier-certified font-bold"}>{"In Stock Yangon"}</span>
<span className={"font-label-mono-spec text-label-mono-spec text-primary font-bold"}>{"Wholesale Available"}</span>
</div>
<div className={"grid grid-cols-2 gap-2 mt-2"}>
<a className={"bg-primary text-on-primary py-2 rounded-lg text-center font-label-mono-spec text-[11px] font-bold hover:bg-primary-container"} href={"tel:+959957933180"}>{"Quote Price"}</a>
<a className={"bg-surface-container text-primary py-2 rounded-lg text-center font-label-mono-spec text-[11px] font-bold hover:bg-surface-container-high"} href={"tel:+959952706118"}>{"Inquire Specs"}</a>
</div>
</div>
</div>

<div className={"bg-surface-card rounded-2xl p-space-md shadow-sm border border-border-subtle hover:shadow-md transition-all flex flex-col justify-between product-item"} data-category={"inverters"}>
<div>
<div className={"flex items-center justify-between pb-space-xs"}>
<span className={"font-badge-label text-badge-label text-solar-amber uppercase font-bold bg-amber-50 px-2 py-0.5 rounded"}>{"Heavy Duty"}</span>
<span className={"font-label-mono-spec text-label-mono-spec text-secondary"}>{"Pure Sine Wave"}</span>
</div>
<div className={"h-44 w-full bg-surface-container-low rounded-xl flex items-center justify-center p-2 mt-2"}>
<img alt={"Livfast Solar Inverter"} className={"max-h-full max-w-full object-contain"} src={"/images/asset-018.jpg"} loading={"lazy"} decoding={"async"} />
</div>
<div className={"pt-space-sm"}>
<span className={"font-badge-label text-badge-label text-primary font-bold uppercase"}>{"Livfast"}</span>
<h3 className={"font-headline-sm text-headline-sm font-bold text-on-surface mt-0.5"}>{"Livfast Solar Inverter Range"}</h3>
<p className={"font-body-sm text-body-sm text-secondary mt-1"}>{"Engineered for heavy loads and extreme voltage fluctuations. Seamless UPS transfer time."}</p>
</div>
</div>
<div className={"pt-space-md flex flex-col gap-space-xs"}>
<div className={"flex items-center justify-between"}>
<span className={"font-badge-label text-badge-label text-tier-certified font-bold"}>{"Genuine Factory Stock"}</span>
<span className={"font-label-mono-spec text-label-mono-spec text-on-surface font-bold"}>{"Full Warranty"}</span>
</div>
<div className={"grid grid-cols-2 gap-2 mt-2"}>
<a className={"bg-primary text-on-primary py-2 rounded-lg text-center font-label-mono-spec text-[11px] font-bold hover:bg-primary-container"} href={"tel:+959957933180"}>{"Quote Price"}</a>
<a className={"bg-surface-container text-primary py-2 rounded-lg text-center font-label-mono-spec text-[11px] font-bold hover:bg-surface-container-high"} href={"tel:+959952706118"}>{"Details"}</a>
</div>
</div>
</div>

<div className={"bg-surface-card rounded-2xl p-space-md shadow-sm border border-border-subtle hover:shadow-md transition-all flex flex-col justify-between product-item"} data-category={"batteries"}>
<div>
<div className={"flex items-center justify-between pb-space-xs"}>
<span className={"font-badge-label text-badge-label text-tertiary uppercase font-bold bg-teal-50 px-2 py-0.5 rounded"}>{"LiFePO4 IP65"}</span>
<span className={"font-label-mono-spec text-label-mono-spec text-secondary"}>{"51.2V 100Ah / 314Ah"}</span>
</div>
<div className={"h-44 w-full bg-surface-container-low rounded-xl flex items-center justify-center p-2 mt-2"}>
<img alt={"Lithium Ion Battery Pack LiFePO4"} className={"max-h-full max-w-full object-contain"} src={"/images/asset-025.jpg"} loading={"lazy"} decoding={"async"} />
</div>
<div className={"pt-space-sm"}>
<span className={"font-badge-label text-badge-label text-primary font-bold uppercase"}>{"GDE Storage"}</span>
<h3 className={"font-headline-sm text-headline-sm font-bold text-on-surface mt-0.5"}>{"Lithium-Ion Solar Battery"}</h3>
<p className={"font-body-sm text-body-sm text-secondary mt-1"}>{"6000+ Cycles, Smart BMS communication with Solis, Next Electric & GoodWe inverters."}</p>
</div>
</div>
<div className={"pt-space-md flex flex-col gap-space-xs"}>
<div className={"flex items-center justify-between"}>
<span className={"font-badge-label text-badge-label text-tier-certified font-bold"}>{"10-Yr Cell Life"}</span>
<span className={"font-label-mono-spec text-label-mono-spec text-on-surface font-bold"}>{"High Density"}</span>
</div>
<div className={"grid grid-cols-2 gap-2 mt-2"}>
<a className={"bg-primary text-on-primary py-2 rounded-lg text-center font-label-mono-spec text-[11px] font-bold hover:bg-primary-container"} href={"tel:+959957933180"}>{"Quote Price"}</a>
<a className={"bg-surface-container text-primary py-2 rounded-lg text-center font-label-mono-spec text-[11px] font-bold hover:bg-surface-container-high"} href={"tel:+959952706118"}>{"BMS Spec"}</a>
</div>
</div>
</div>

<div className={"bg-surface-card rounded-2xl p-space-md shadow-sm border border-border-subtle hover:shadow-md transition-all flex flex-col justify-between product-item"} data-category={"batteries"}>
<div>
<div className={"flex items-center justify-between pb-space-xs"}>
<span className={"font-badge-label text-badge-label text-secondary uppercase font-bold bg-surface-container px-2 py-0.5 rounded"}>{"Deep Cycle"}</span>
<span className={"font-label-mono-spec text-label-mono-spec text-secondary"}>{"150Ah - 220Ah"}</span>
</div>
<div className={"h-44 w-full bg-surface-container-low rounded-xl flex items-center justify-center p-2 mt-2"}>
<div className={"flex flex-col items-center justify-center text-primary"}>
<span className={"material-symbols-outlined text-[68px]"} aria-hidden={"true"}>{"battery_saver"}</span>
<span className={"font-label-mono-spec text-[11px] font-bold mt-1 text-on-surface"}>{"Tall Tubular Technology"}</span>
</div>
</div>
<div className={"pt-space-sm"}>
<span className={"font-badge-label text-badge-label text-primary font-bold uppercase"}>{"Solar Battery"}</span>
<h3 className={"font-headline-sm text-headline-sm font-bold text-on-surface mt-0.5"}>{"Tall Tubular & Gel Battery"}</h3>
<p className={"font-body-sm text-body-sm text-secondary mt-1"}>{"High heat tolerance, robust thick plates, optimal for long power cut durations across Myanmar."}</p>
</div>
</div>
<div className={"pt-space-md flex flex-col gap-space-xs"}>
<div className={"flex items-center justify-between"}>
<span className={"font-badge-label text-badge-label text-tier-certified font-bold"}>{"Low Maintenance"}</span>
<span className={"font-label-mono-spec text-label-mono-spec text-on-surface font-bold"}>{"Long Backup"}</span>
</div>
<div className={"grid grid-cols-2 gap-2 mt-2"}>
<a className={"bg-primary text-on-primary py-2 rounded-lg text-center font-label-mono-spec text-[11px] font-bold hover:bg-primary-container"} href={"tel:+959957933180"}>{"Quote Price"}</a>
<a className={"bg-surface-container text-primary py-2 rounded-lg text-center font-label-mono-spec text-[11px] font-bold hover:bg-surface-container-high"} href={"tel:+959952706118"}>{"Details"}</a>
</div>
</div>
</div>

<div className={"bg-surface-card rounded-2xl p-space-md shadow-sm border border-border-subtle hover:shadow-md transition-all flex flex-col justify-between product-item"} data-category={"cables"}>
<div>
<div className={"flex items-center justify-between pb-space-xs"}>
<span className={"font-badge-label text-badge-label text-error uppercase font-bold bg-red-50 px-2 py-0.5 rounded"}>{"High Voltage"}</span>
<span className={"font-label-mono-spec text-label-mono-spec text-secondary"}>{"HV / 33kV+"}</span>
</div>
<div className={"h-44 w-full bg-surface-container-low rounded-xl flex items-center justify-center p-2 mt-2"}>
<img alt={"High Voltage Cable & Accessories"} className={"max-h-full max-w-full object-contain"} src={"/images/asset-020.jpg"} loading={"lazy"} decoding={"async"} />
</div>
<div className={"pt-space-sm"}>
<span className={"font-badge-label text-badge-label text-primary font-bold uppercase"}>{"GDE Electrical"}</span>
<h3 className={"font-headline-sm text-headline-sm font-bold text-on-surface mt-0.5"}>{"High Voltage Cable & Fittings"}</h3>
<p className={"font-body-sm text-body-sm text-secondary mt-1"}>{"XLPE insulated HV power cables, termination kits, joints, and substation connection accessories."}</p>
</div>
</div>
<div className={"pt-space-md flex flex-col gap-space-xs"}>
<div className={"flex items-center justify-between"}>
<span className={"font-badge-label text-badge-label text-tier-certified font-bold"}>{"IEC / BS Standard"}</span>
<span className={"font-label-mono-spec text-label-mono-spec text-on-surface font-bold"}>{"Tested & Certified"}</span>
</div>
<div className={"grid grid-cols-2 gap-2 mt-2"}>
<a className={"bg-primary text-on-primary py-2 rounded-lg text-center font-label-mono-spec text-[11px] font-bold hover:bg-primary-container"} href={"tel:+959957933180"}>{"Quote Price"}</a>
<a className={"bg-surface-container text-primary py-2 rounded-lg text-center font-label-mono-spec text-[11px] font-bold hover:bg-surface-container-high"} href={"tel:+959952706118"}>{"Datasheet"}</a>
</div>
</div>
</div>

<div className={"bg-surface-card rounded-2xl p-space-md shadow-sm border border-border-subtle hover:shadow-md transition-all flex flex-col justify-between product-item"} data-category={"cables"}>
<div>
<div className={"flex items-center justify-between pb-space-xs"}>
<span className={"font-badge-label text-badge-label text-primary uppercase font-bold bg-surface-container px-2 py-0.5 rounded"}>{"MV & LV Cables"}</span>
<span className={"font-label-mono-spec text-label-mono-spec text-secondary"}>{"0.6/1kV - 11/22kV"}</span>
</div>
<div className={"h-44 w-full bg-surface-container-low rounded-xl flex items-center justify-center p-2 mt-2"}>
<div className={"flex flex-col items-center justify-center text-primary"}>
<span className={"material-symbols-outlined text-[68px]"} aria-hidden={"true"}>{"cable"}</span>
<span className={"font-label-mono-spec text-[11px] font-bold mt-1 text-on-surface"}>{"Armoured & Unarmoured"}</span>
</div>
</div>
<div className={"pt-space-sm"}>
<span className={"font-badge-label text-badge-label text-primary font-bold uppercase"}>{"GDE Power"}</span>
<h3 className={"font-headline-sm text-headline-sm font-bold text-on-surface mt-0.5"}>{"Medium & Low Voltage Cables"}</h3>
<p className={"font-body-sm text-body-sm text-secondary mt-1"}>{"Copper and Aluminum multi-core armoured cables for factories, power distribution, and building installations."}</p>
</div>
</div>
<div className={"pt-space-md flex flex-col gap-space-xs"}>
<div className={"flex items-center justify-between"}>
<span className={"font-badge-label text-badge-label text-tier-certified font-bold"}>{"Drum Ready"}</span>
<span className={"font-label-mono-spec text-label-mono-spec text-on-surface font-bold"}>{"Standard Sizes"}</span>
</div>
<div className={"grid grid-cols-2 gap-2 mt-2"}>
<a className={"bg-primary text-on-primary py-2 rounded-lg text-center font-label-mono-spec text-[11px] font-bold hover:bg-primary-container"} href={"tel:+959957933180"}>{"Quote Price"}</a>
<a className={"bg-surface-container text-primary py-2 rounded-lg text-center font-label-mono-spec text-[11px] font-bold hover:bg-surface-container-high"} href={"tel:+959952706118"}>{"Sizes"}</a>
</div>
</div>
</div>

<div className={"bg-surface-card rounded-2xl p-space-md shadow-sm border border-border-subtle hover:shadow-md transition-all flex flex-col justify-between product-item"} data-category={"panels"}>
<div>
<div className={"flex items-center justify-between pb-space-xs"}>
<span className={"font-badge-label text-badge-label text-tier-certified uppercase font-bold bg-surface-container px-2 py-0.5 rounded"}>{"Tier 1 Module"}</span>
<span className={"font-label-mono-spec text-label-mono-spec text-secondary"}>{"580W - 675W ABC"}</span>
</div>
<div className={"h-44 w-full bg-surface-container-low rounded-xl flex items-center justify-center p-2 mt-2"}>
<img alt={"Tier-1 High Efficiency Solar Panel"} className={"max-h-full max-w-full object-contain"} src={"/images/asset-022.jpg"} loading={"lazy"} decoding={"async"} />
</div>
<div className={"pt-space-sm"}>
<span className={"font-badge-label text-badge-label text-primary font-bold uppercase"}>{"AIKO & Longi"}</span>
<h3 className={"font-headline-sm text-headline-sm font-bold text-on-surface mt-0.5"}>{"High Efficiency Solar Panels"}</h3>
<p className={"font-body-sm text-body-sm text-secondary mt-1"}>{"Bifacial dual-glass, maximum power output per square meter, anti-shading ABC technology."}</p>
</div>
</div>
<div className={"pt-space-md flex flex-col gap-space-xs"}>
<div className={"flex items-center justify-between"}>
<span className={"font-badge-label text-badge-label text-tier-certified font-bold"}>{"30-Yr Warranty"}</span>
<span className={"font-label-mono-spec text-label-mono-spec text-on-surface font-bold"}>{"Pallet Discounts"}</span>
</div>
<div className={"grid grid-cols-2 gap-2 mt-2"}>
<a className={"bg-primary text-on-primary py-2 rounded-lg text-center font-label-mono-spec text-[11px] font-bold hover:bg-primary-container"} href={"tel:+959957933180"}>{"Quote Price"}</a>
<a className={"bg-surface-container text-primary py-2 rounded-lg text-center font-label-mono-spec text-[11px] font-bold hover:bg-surface-container-high"} href={"tel:+959952706118"}>{"Details"}</a>
</div>
</div>
</div>

<div className={"bg-surface-card rounded-2xl p-space-md shadow-sm border border-border-subtle hover:shadow-md transition-all flex flex-col justify-between product-item"} data-category={"panels"}>
<div>
<div className={"flex items-center justify-between pb-space-xs"}>
<span className={"font-badge-label text-badge-label text-solar-amber uppercase font-bold bg-amber-50 px-2 py-0.5 rounded"}>{"All-In-One"}</span>
<span className={"font-label-mono-spec text-label-mono-spec text-secondary"}>{"60W - 300W LED"}</span>
</div>
<div className={"h-44 w-full bg-surface-container-low rounded-xl flex items-center justify-center p-2 mt-2"}>
<div className={"flex flex-col items-center justify-center text-solar-amber"}>
<span className={"material-symbols-outlined text-[68px]"} aria-hidden={"true"}>{"light_mode"}</span>
<span className={"font-label-mono-spec text-[11px] font-bold mt-1 text-on-surface"}>{"Integrated LiFePO4"}</span>
</div>
</div>
<div className={"pt-space-sm"}>
<span className={"font-badge-label text-badge-label text-primary font-bold uppercase"}>{"Solar Lighting"}</span>
<h3 className={"font-headline-sm text-headline-sm font-bold text-on-surface mt-0.5"}>{"Solar Street & Flood Lighting"}</h3>
<p className={"font-body-sm text-body-sm text-secondary mt-1"}>{"Autonomous dusk-to-dawn operation, motion sensor, high-lumen Philips LED chips with IP66 protection."}</p>
</div>
</div>
<div className={"pt-space-md flex flex-col gap-space-xs"}>
<div className={"flex items-center justify-between"}>
<span className={"font-badge-label text-badge-label text-tier-certified font-bold"}>{"Zero Electric Bill"}</span>
<span className={"font-label-mono-spec text-label-mono-spec text-on-surface font-bold"}>{"Direct Wholesale"}</span>
</div>
<div className={"grid grid-cols-2 gap-2 mt-2"}>
<a className={"bg-primary text-on-primary py-2 rounded-lg text-center font-label-mono-spec text-[11px] font-bold hover:bg-primary-container"} href={"tel:+959957933180"}>{"Quote Price"}</a>
<a className={"bg-surface-container text-primary py-2 rounded-lg text-center font-label-mono-spec text-[11px] font-bold hover:bg-surface-container-high"} href={"tel:+959952706118"}>{"Models"}</a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className={"w-full bg-surface py-space-xl px-6 border-b border-border-subtle"}>
<div className={"max-w-4xl mx-auto flex flex-col gap-space-lg"}>
<div className={"text-center flex flex-col items-center gap-space-xs"}>
<span className={"font-badge-label text-badge-label uppercase text-primary font-bold"}>{"Frequently Asked Questions"}</span>
<h2 className={"font-headline-lg text-headline-lg font-bold text-on-surface"}>{"Frequently Asked Questions"}</h2>
<p className={"font-body-md text-body-md text-on-surface-variant font-myanmar"}>{"မကြာခဏ မေးလေ့ရှိသော မေးခွန်းများနှင့် အချက်အလက်များ"}</p>
</div>
<div className={"flex flex-col gap-space-sm"} id={"faqAccordion"}>

<div className={"bg-surface-card rounded-xl p-space-md shadow-sm border border-border-subtle faq-item"}>
<button className={"w-full flex items-center justify-between gap-space-md text-left font-headline-sm text-[16px] font-bold text-on-surface faq-trigger"} type={"button"} aria-expanded={"true"}>
<span>{"Which products and brands does Golden Diamond Eagle (GDE) distribute in Myanmar?"}</span>
<span className={"material-symbols-outlined text-primary text-[22px] transition-transform faq-icon"} aria-hidden={"true"}>{"expand_less"}</span>
</button>
<div className={"mt-space-sm font-body-md text-body-md text-on-surface-variant faq-content"}>{"\n            Golden Diamond Eagle Co., Ltd. (GDE) is the premier official importer and nationwide distributor of: High Voltage Cable & Accessories, Medium Voltage Cable & Accessories, Low Voltage Cable, PC Wire & Electrical Goods, Solar Inverters (Next Electric, Livfast, Solis, GoodWe), Tier-1 Solar Panels, Solar Batteries (Lithium Ion, Solar Gel, Tall Tubular), Automotive Batteries, Solar Mounting Fittings & Accessories (Antai, Moreday, Beny), and Complete Turnkey Solar Packages.\n          "}</div>
</div>

<div className={"bg-surface-card rounded-xl p-space-md shadow-sm border border-border-subtle faq-item"}>
<button className={"w-full flex items-center justify-between gap-space-md text-left font-headline-sm text-[16px] font-bold text-on-surface faq-trigger"} type={"button"} aria-expanded={"true"}>
<span>{"Do you provide delivery to Mandalay, Taunggyi, and all States/Regions across Myanmar?"}</span>
<span className={"material-symbols-outlined text-primary text-[22px] transition-transform faq-icon"} aria-hidden={"true"}>{"expand_less"}</span>
</button>
<div className={"mt-space-sm font-body-md text-body-md text-on-surface-variant faq-content"}>{"\n            Yes. Our main warehouse and logistics hub is situated in FMI City, Hlaing Tharyar, Yangon. We arrange fast and insured delivery across all States and Divisions via reliable transport highway express lines and freight carriers.\n          "}</div>
</div>

<div className={"bg-surface-card rounded-xl p-space-md shadow-sm border border-border-subtle faq-item"}>
<button className={"w-full flex items-center justify-between gap-space-md text-left font-headline-sm text-[16px] font-bold text-on-surface faq-trigger"} type={"button"} aria-expanded={"true"}>
<span>{"Can GDE help design and size custom Solar Packages for factories and residences?"}</span>
<span className={"material-symbols-outlined text-primary text-[22px] transition-transform faq-icon"} aria-hidden={"true"}>{"expand_less"}</span>
</button>
<div className={"mt-space-sm font-body-md text-body-md text-on-surface-variant faq-content font-myanmar"}>{"\n            ဟုတ်ကဲ့၊ ရရှိပါသည်။ ကျွန်ုပ်တို့၏ အင်ဂျင်နီယာကျွမ်းကျင်အဖွဲ့မှ သင့်အိမ်၊ ဆိုင်၊ စက်ရုံနှင့် မွေးမြူရေးခြံများ၏ နေ့စဉ်အသုံးပြုမည့် လျှပ်စစ်ဝန်အား (Load calculation) ကို တွက်ချက်ပေးပြီး Basic, Pro, Premium, Gold, Platinum Package များအနက် သင့်တော်ရာ စနစ်ကို အခမဲ့ဆွေးနွေး အကြံဉာဏ်ပေးပါသည်။\n          "}</div>
</div>

<div className={"bg-surface-card rounded-xl p-space-md shadow-sm border border-border-subtle faq-item"}>
<button className={"w-full flex items-center justify-between gap-space-md text-left font-headline-sm text-[16px] font-bold text-on-surface faq-trigger"} type={"button"} aria-expanded={"true"}>
<span>{"How can electrical contractors and wholesale dealers get distributor pricing?"}</span>
<span className={"material-symbols-outlined text-primary text-[22px] transition-transform faq-icon"} aria-hidden={"true"}>{"expand_less"}</span>
</button>
<div className={"mt-space-sm font-body-md text-body-md text-on-surface-variant faq-content"}>{"\n            Wholesale shops, EPC installers, and contractors can contact our direct sales lines (+959) 957933180 / (+959) 952706118, connect via Viber, or message our official Facebook page to receive volume dealer price catalogs and credit terms.\n          "}</div>
</div>
</div>
</div>
</section>

<section className={"w-full bg-inverse-surface text-inverse-on-surface py-space-xl px-6 relative overflow-hidden"} id={"contact"}>
<div className={"max-w-7xl mx-auto flex flex-col gap-space-xl relative z-10"}>

<div className={"flex flex-col lg:flex-row lg:items-center justify-between gap-space-lg"}>
<div className={"flex flex-col gap-space-xs max-w-2xl"}>
<div className={"flex items-center gap-2"}>
<img alt={"GDE Logo"} className={"h-8 w-8 object-contain rounded"} src={"/images/asset-004.jpg"} loading={"lazy"} decoding={"async"} />
<span className={"font-badge-label text-badge-label uppercase text-solar-amber tracking-widest font-bold"}>{"Contact Golden Diamond Eagle Co., Ltd."}</span>
</div>
<h2 className={"font-display-hero text-[30px] sm:text-display-hero font-extrabold text-inverse-on-surface tracking-tight leading-tight"}>{"\n            Ready to Power Up Your Energy Security? "}<br />
<span className={"text-primary-fixed"}>{"Direct Import & Engineering Solutions"}</span>
</h2>
<p className={"font-body-lg text-body-lg text-secondary-fixed-dim font-myanmar"}>{"\n            လျှပ်စစ်နှင့် ဆိုလာစွမ်းအင်ဆိုင်ရာ ပစ္စည်းများကို စိတ်ချယုံကြည်စွာဖြင့် တိုက်ရိုက်မှာယူနိုင်ပါသည်။\n          "}</p>
</div>
<div className={"flex flex-wrap items-center gap-space-md"}>
<a className={"inline-flex items-center gap-space-xs bg-[#7360F2] text-white px-6 py-3.5 rounded-lg font-headline-sm text-[15px] font-bold shadow-lg hover:opacity-95 transition-all"} href={"https://invite.viber.com/?g2=AQBL3Uw94Ep4qE7tS7yPEErHa5w1BRUcuxQHFfsZQLah3bkPINFLs3iUY9KGOXNJ"} rel={"noopener noreferrer"} target={"_blank"}>
<span className={"material-symbols-outlined text-[20px]"} aria-hidden={"true"}>{"forum"}</span>{"\n            Chat on Viber\n          "}</a>
<a className={"inline-flex items-center gap-space-xs bg-[#0084FF] text-white px-6 py-3.5 rounded-lg font-headline-sm text-[15px] font-bold shadow-lg hover:opacity-95 transition-all"} href={"https://www.facebook.com/messages/t/1123518094416164"} rel={"noopener noreferrer"} target={"_blank"}>
<span className={"material-symbols-outlined text-[20px]"} aria-hidden={"true"}>{"chat"}</span>{"\n            Facebook Messenger\n          "}</a>
<a className={"inline-flex items-center gap-space-xs bg-solar-amber text-on-surface px-6 py-3.5 rounded-lg font-headline-sm text-[15px] font-bold shadow-lg hover:bg-amber-400 transition-all"} href={"tel:+959957933180"}>
<span className={"material-symbols-outlined text-[20px]"} aria-hidden={"true"}>{"call"}</span>{"\n            Call (+959) 957933180\n          "}</a>
</div>
</div>

<div className={"grid grid-cols-1 md:grid-cols-3 gap-space-md pt-space-md border-t border-secondary-fixed/20"}>
<div className={"p-4 bg-surface-container-highest/10 rounded-xl flex flex-col gap-1 border border-secondary-fixed/10"}>
<div className={"flex items-center gap-2 text-primary-fixed font-bold"}>
<span className={"material-symbols-outlined text-[20px]"} aria-hidden={"true"}>{"location_on"}</span>
<span>{"Company Address"}</span>
</div>
<p className={"font-body-sm text-[13px] text-inverse-on-surface"}>{"E-32, SAGAWAH ST (3), FMI CITY, HLAING THARYAR TOWNSHIP, YANGON, MYANMAR"}</p>
</div>
<div className={"p-4 bg-surface-container-highest/10 rounded-xl flex flex-col gap-1 border border-secondary-fixed/10"}>
<div className={"flex items-center gap-2 text-solar-amber font-bold"}>
<span className={"material-symbols-outlined text-[20px]"} aria-hidden={"true"}>{"phone_in_talk"}</span>
<span>{"Direct Phone Lines"}</span>
</div>
<div className={"flex flex-col font-label-mono-spec text-[13px] text-inverse-on-surface"}>
<a className={"hover:text-primary-fixed"} href={"tel:+959957933180"}>{"(+959) 957933180"}</a>
<a className={"hover:text-primary-fixed"} href={"tel:+959952706118"}>{"(+959) 952706118"}</a>
</div>
</div>
<div className={"p-4 bg-surface-container-highest/10 rounded-xl flex flex-col gap-1 border border-secondary-fixed/10"}>
<div className={"flex items-center gap-2 text-tertiary-fixed font-bold"}>
<span className={"material-symbols-outlined text-[20px]"} aria-hidden={"true"}>{"alternate_email"}</span>
<span>{"Official Email & Web"}</span>
</div>
<p className={"font-label-mono-spec text-[13px] text-inverse-on-surface truncate"}>{"goldendiamondeagle@gmail.com"}</p>
<p className={"font-body-sm text-[12px] text-secondary-fixed-dim"}>{"https://goldendiamondeagle.com"}</p>
</div>
</div>
</div>
</section>


</div></main>
);
}
