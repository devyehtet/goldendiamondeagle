export default function PackagesScreen() {
return (
<main className={"w-full pt-[116px] bg-surface-canvas"}><div className={"flex flex-col w-full"}>

<section className={"w-full bg-surface-container-high py-space-sm px-6"}>
<div className={"max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-space-sm text-on-surface"}>
<div className={"flex items-center gap-space-sm"}>
<span className={"inline-flex items-center gap-1 bg-surface-card text-tier-certified font-badge-label text-badge-label px-2 py-0.5 rounded uppercase font-bold shadow-sm"}>
<span className={"material-symbols-outlined text-[14px]"} aria-hidden={"true"}>{"bolt"}</span>{" 2026 Turnkey Systems\n        "}</span>
<span className={"font-label-mono-spec text-label-mono-spec text-secondary"}>{"\n          Certified Myanmar Grid & Hybrid Standards · IEC 62109 · UL 1973\n        "}</span>
</div>
<div className={"flex items-center gap-space-md font-label-mono-spec text-label-mono-spec text-on-surface-variant"}>
<span className={"flex items-center gap-1"}><span className={"material-symbols-outlined text-[15px] text-tier-certified"} aria-hidden={"true"}>{"verified"}</span>{" Direct Wholesale Import"}</span>
<span className={"text-outline-variant"}>{"/"}</span>
<span className={"flex items-center gap-1"}><span className={"material-symbols-outlined text-[15px] text-primary"} aria-hidden={"true"}>{"local_shipping"}</span>{" Express Nationwide Freight"}</span>
</div>
</div>
</section>

<section className={"w-full bg-surface py-space-xl px-6 relative overflow-hidden"}>
<div className={"max-w-7xl mx-auto flex flex-col gap-space-lg relative z-10"}>
<div className={"grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-end"}>
<div className={"lg:col-span-8 flex flex-col gap-space-xs"}>
<div className={"flex items-center gap-2"}>
<span className={"font-badge-label text-badge-label uppercase text-primary font-bold tracking-wider"}>{"Turnkey Engineering Portfolio"}</span>
<span className={"text-secondary font-label-mono-spec text-label-mono-spec"}>{"| 3kW — 100kW+ Modular Architectures"}</span>
</div>
<h1 className={"font-headline-lg text-headline-lg text-on-surface font-black tracking-tight"}>{"\n            Golden Diamond Eagle Complete Turnkey Packages\n          "}</h1>
<p className={"font-body-lg text-body-lg text-secondary font-myanmar max-w-3xl pt-1"}>{"\n            အိမ်သုံး၊ ဆိုင်သုံး၊ ရုံးသုံးနှင့် စက်ရုံသုံးများအတွက် စိတ်ကြိုက်ရွေးချယ်နိုင်သော GDE Complete Solar & Power Backup System Packages\n          "}</p>
<p className={"font-body-md text-body-md text-on-surface-variant max-w-3xl"}>{"\n            Pre-configured, engineering-tested hybrid & off-grid solar architectures engineered specifically for Myanmar’s variable grid reliability, severe blackout conditions, and heavy inductive loads.\n          "}</p>
</div>
<div className={"lg:col-span-4 flex flex-col gap-space-sm bg-surface-card p-space-md rounded-xl shadow-sm"}>
<div className={"flex items-center justify-between"}>
<span className={"font-badge-label text-badge-label uppercase font-bold text-on-surface"}>{"System Reliability Guarantee"}</span>
<span className={"font-label-mono-spec text-label-mono-spec text-tier-certified font-bold"}>{"100% Genuine"}</span>
</div>
<div className={"grid grid-cols-3 gap-space-xs text-center pt-1"}>
<div className={"bg-surface-container-low p-2 rounded"}>
<span className={"font-headline-sm text-headline-sm font-bold text-primary block"}>{"25y"}</span>
<span className={"font-badge-label text-badge-label text-secondary"}>{"Panel Output"}</span>
</div>
<div className={"bg-surface-container-low p-2 rounded"}>
<span className={"font-headline-sm text-headline-sm font-bold text-solar-amber block"}>{"6k"}</span>
<span className={"font-badge-label text-badge-label text-secondary"}>{"LiFePO4 Cycles"}</span>
</div>
<div className={"bg-surface-container-low p-2 rounded"}>
<span className={"font-headline-sm text-headline-sm font-bold text-tier-certified block"}>{"24/7"}</span>
<span className={"font-badge-label text-badge-label text-secondary"}>{"Yangon Center"}</span>
</div>
</div>
</div>
</div>

<div className={"flex items-center gap-space-xs overflow-x-auto pb-1 pt-2 no-scrollbar"} id={"packageFilterContainer"}>
<button className={"filter-tab px-4 py-2.5 rounded-lg font-label-mono-spec text-label-mono-spec transition-all whitespace-nowrap bg-primary text-on-primary shadow-sm"} data-category={"all"}>{"\n          All Turnkey Packages (5)\n        "}</button>
<button className={"filter-tab px-4 py-2.5 rounded-lg font-label-mono-spec text-label-mono-spec transition-all whitespace-nowrap bg-surface-card text-on-surface-variant hover:text-primary shadow-sm"} data-category={"residential"}>{"\n          Residential (Basic & Pro)\n        "}</button>
<button className={"filter-tab px-4 py-2.5 rounded-lg font-label-mono-spec text-label-mono-spec transition-all whitespace-nowrap bg-surface-card text-on-surface-variant hover:text-primary shadow-sm"} data-category={"commercial"}>{"\n          Commercial (Premium & Gold)\n        "}</button>
<button className={"filter-tab px-4 py-2.5 rounded-lg font-label-mono-spec text-label-mono-spec transition-all whitespace-nowrap bg-surface-card text-on-surface-variant hover:text-primary shadow-sm"} data-category={"industrial"}>{"\n          Industrial & Farm (Platinum)\n        "}</button>
<a className={"ml-auto px-4 py-2.5 rounded-lg font-label-mono-spec text-label-mono-spec transition-all whitespace-nowrap bg-surface-container-high text-primary hover:bg-surface-variant flex items-center gap-1 shadow-sm"} href={"#sizing-calculator"}>
<span className={"material-symbols-outlined text-[16px]"} aria-hidden={"true"}>{"calculate"}</span>
<span>{"Load Sizing Calculator"}</span>
</a>
</div>
</div>
</section>

<section className={"w-full bg-surface-canvas py-space-xl px-6"}>
<div className={"max-w-7xl mx-auto flex flex-col gap-space-xl"}>
<div className={"flex flex-col md:flex-row items-baseline justify-between gap-space-sm"}>
<div>
<span className={"font-badge-label text-badge-label uppercase text-secondary font-bold"}>{"Standardized Configurations"}</span>
<h2 className={"font-headline-md text-headline-md text-on-surface font-black"}>{"Pre-Engineered Systems for Immediate Deployment"}</h2>
</div>
<p className={"font-body-sm text-body-sm text-on-surface-variant max-w-md"}>{"\n          Every turnkey bundle arrives with pre-wired AC/DC breaker enclosures, rapid disconnects, certified MC4 accessories, and mounting gear.\n        "}</p>
</div>
<div className={"grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-stretch"}>

<article className={"package-card lg:col-span-6 bg-surface-card rounded-xl p-space-lg flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"} data-category={"residential"}>
<div className={"absolute top-0 right-0 bg-secondary-container text-on-secondary-fixed-variant px-3 py-1 rounded-bl-lg font-badge-label text-badge-label uppercase font-bold"}>{"\n            Essential Backup\n          "}</div>
<div className={"flex flex-col gap-space-md"}>
<div className={"flex flex-col gap-space-xs"}>
<span className={"font-label-mono-spec text-label-mono-spec text-primary font-bold"}>{"PACKAGE 01 · 230V SINGLE-PHASE"}</span>
<h3 className={"font-headline-sm text-headline-sm text-on-surface font-bold"}>{"Basic Package (3kW – 5kW Off-Grid)"}</h3>
<p className={"font-body-sm text-body-sm text-secondary font-myanmar"}>{"\n                လူနေအိမ်သုံး မီးသီး၊ ပန်ကာ၊ ရေခဲသေတ္တာ၊ TV နှင့် WiFi backup အတွက် အထူးသင့်လျော်သော အခြေခံစနစ်\n              "}</p>
</div>

<div className={"flex flex-wrap gap-1.5"}>
<span className={"bg-surface-container-low text-on-surface-variant px-2.5 py-1 rounded text-[11px] font-medium flex items-center gap-1"}>
<span className={"material-symbols-outlined text-[13px] text-primary"} aria-hidden={"true"}>{"lightbulb"}</span>{" LED Lighting\n              "}</span>
<span className={"bg-surface-container-low text-on-surface-variant px-2.5 py-1 rounded text-[11px] font-medium flex items-center gap-1"}>
<span className={"material-symbols-outlined text-[13px] text-primary"} aria-hidden={"true"}>{"mode_fan"}</span>{" Ceiling Fans\n              "}</span>
<span className={"bg-surface-container-low text-on-surface-variant px-2.5 py-1 rounded text-[11px] font-medium flex items-center gap-1"}>
<span className={"material-symbols-outlined text-[13px] text-primary"} aria-hidden={"true"}>{"kitchen"}</span>{" 1x Refrigerator\n              "}</span>
<span className={"bg-surface-container-low text-on-surface-variant px-2.5 py-1 rounded text-[11px] font-medium flex items-center gap-1"}>
<span className={"material-symbols-outlined text-[13px] text-primary"} aria-hidden={"true"}>{"wifi"}</span>{" Router & CCTV\n              "}</span>
</div>

<div className={"bg-surface-container-low rounded-lg p-space-md flex flex-col gap-space-xs font-body-sm text-body-sm"}>
<div className={"flex items-start justify-between gap-space-xs py-1"}>
<span className={"text-secondary font-medium shrink-0"}>{"Inverter Core:"}</span>
<span className={"text-on-surface font-semibold text-right"}>{"Next Electric / Livfast 3.5kW or 5kW Off-Grid"}</span>
</div>
<div className={"flex items-start justify-between gap-space-xs py-1"}>
<span className={"text-secondary font-medium shrink-0"}>{"Storage:"}</span>
<span className={"text-on-surface font-semibold text-right"}>{"2x 150Ah/200Ah Tall Tubular or Solar Gel (Opt. LiFePO4)"}</span>
</div>
<div className={"flex items-start justify-between gap-space-xs py-1"}>
<span className={"text-secondary font-medium shrink-0"}>{"PV Generation:"}</span>
<span className={"text-on-surface font-semibold text-right"}>{"4x – 6x Tier-1 Mono PERC 540W–580W Array"}</span>
</div>
<div className={"flex items-start justify-between gap-space-xs py-1"}>
<span className={"text-secondary font-medium shrink-0"}>{"Protection:"}</span>
<span className={"text-on-surface font-semibold text-right"}>{"Pre-wired Beny/Moreday DC Breaker + AC SPD"}</span>
</div>
<div className={"flex items-start justify-between gap-space-xs py-1"}>
<span className={"text-secondary font-medium shrink-0"}>{"Mounting:"}</span>
<span className={"text-on-surface font-semibold text-right"}>{"Aluminum Extrusion Railing & MC4 1500V Kit"}</span>
</div>
</div>

<div className={"flex items-center justify-between text-label-mono-spec font-label-mono-spec text-on-surface-variant"}>
<span>{"Avg Daily Yield: "}<strong className={"text-primary"}>{"12–16 kWh/day"}</strong></span>
<span className={"text-solar-amber font-bold"}>{"2–5y Inverter · 25y Panels"}</span>
</div>
</div>
<div className={"mt-space-lg pt-space-md flex items-center justify-between gap-space-sm bg-surface-container p-space-md rounded-lg"}>
<div>
<span className={"font-badge-label text-badge-label uppercase text-secondary block"}>{"Wholesale Pricing"}</span>
<span className={"font-headline-sm text-headline-sm font-bold text-on-surface"}>{"Factory Direct Tier"}</span>
</div>
<div className={"flex items-center gap-space-xs"}>
<a className={"inline-flex items-center gap-1 bg-primary text-on-primary px-4 py-2 rounded-lg font-label-mono-spec text-label-mono-spec font-bold hover:bg-primary-container transition-colors shadow-sm"} href={"tel:+959957933180"}>
<span className={"material-symbols-outlined text-[16px]"} aria-hidden={"true"}>{"call"}</span>{" Instant Quote\n              "}</a>
<a className={"bg-surface-card text-on-surface px-3 py-2 rounded-lg font-label-mono-spec text-label-mono-spec font-bold hover:bg-surface transition-colors shadow-sm"} href={"https://invite.viber.com/?g2=AQBL3Uw94Ep4qE7tS7yPEErHa5w1BRUcuxQHFfsZQLah3bkPINFLs3iUY9KGOXNJ"} rel={"noopener noreferrer"} target={"_blank"}>{"\n                Viber\n              "}</a>
</div>
</div>
</article>

<article className={"package-card lg:col-span-6 bg-surface-card rounded-xl p-space-lg flex flex-col justify-between shadow-md relative overflow-hidden"} data-category={"residential"}>
<div className={"absolute top-0 right-0 bg-primary text-on-primary px-3 py-1 rounded-bl-lg font-badge-label text-badge-label uppercase font-bold flex items-center gap-1 shadow-sm"}>
<span className={"material-symbols-outlined text-[13px]"} aria-hidden={"true"}>{"star"}</span>{" Most Popular Residential\n          "}</div>
<div className={"flex flex-col gap-space-md"}>
<div className={"flex flex-col gap-space-xs"}>
<span className={"font-label-mono-spec text-label-mono-spec text-solar-amber font-bold"}>{"PACKAGE 02 · HYBRID SMART RESIDENCE"}</span>
<h3 className={"font-headline-sm text-headline-sm text-on-surface font-bold"}>{"Pro Package (5kW – 8kW Hybrid)"}</h3>
<p className={"font-body-sm text-body-sm text-secondary font-myanmar"}>{"\n                အိမ်ကြီးအိမ်ကောင်း၊ ဆေးခန်းနှင့် ရုံးခန်းများအတွက် နေ့ရောညပါ အဲကွန်းစွဲသုံးနိုင်သော အဆင့်မြင့်စနစ်\n              "}</p>
</div>

<div className={"flex flex-wrap gap-1.5"}>
<span className={"bg-surface-container-low text-on-surface-variant px-2.5 py-1 rounded text-[11px] font-medium flex items-center gap-1"}>
<span className={"material-symbols-outlined text-[13px] text-primary"} aria-hidden={"true"}>{"ac_unit"}</span>{" 2x Inverter Air-Con\n              "}</span>
<span className={"bg-surface-container-low text-on-surface-variant px-2.5 py-1 rounded text-[11px] font-medium flex items-center gap-1"}>
<span className={"material-symbols-outlined text-[13px] text-primary"} aria-hidden={"true"}>{"water_drop"}</span>{" 1–1.5HP Water Pump\n              "}</span>
<span className={"bg-surface-container-low text-on-surface-variant px-2.5 py-1 rounded text-[11px] font-medium flex items-center gap-1"}>
<span className={"material-symbols-outlined text-[13px] text-primary"} aria-hidden={"true"}>{"devices"}</span>{" Office PCs & Servers\n              "}</span>
<span className={"bg-surface-container-low text-on-surface-variant px-2.5 py-1 rounded text-[11px] font-medium flex items-center gap-1"}>
<span className={"material-symbols-outlined text-[13px] text-primary"} aria-hidden={"true"}>{"flash_on"}</span>{" Continuous 24h Load\n              "}</span>
</div>

<div className={"bg-surface-container-low rounded-lg p-space-md flex flex-col gap-space-xs font-body-sm text-body-sm"}>
<div className={"flex items-start justify-between gap-space-xs py-1"}>
<span className={"text-secondary font-medium shrink-0"}>{"Inverter Core:"}</span>
<span className={"text-on-surface font-semibold text-right"}>{"Solis / Next Electric 6kW–8kW Smart Hybrid"}</span>
</div>
<div className={"flex items-start justify-between gap-space-xs py-1"}>
<span className={"text-secondary font-medium shrink-0"}>{"Storage:"}</span>
<span className={"text-on-surface font-semibold text-right"}>{"GDE Wall-Mounted LiFePO4 5.12kWh – 10.24kWh"}</span>
</div>
<div className={"flex items-start justify-between gap-space-xs py-1"}>
<span className={"text-secondary font-medium shrink-0"}>{"PV Generation:"}</span>
<span className={"text-on-surface font-semibold text-right"}>{"8x – 12x 580W N-Type Bifacial Tier-1 Arrays"}</span>
</div>
<div className={"flex items-start justify-between gap-space-xs py-1"}>
<span className={"text-secondary font-medium shrink-0"}>{"Switching & BMS:"}</span>
<span className={"text-on-surface font-semibold text-right"}>{"10ms UPS Grade Seamless Automatic Transfer"}</span>
</div>
<div className={"flex items-start justify-between gap-space-xs py-1"}>
<span className={"text-secondary font-medium shrink-0"}>{"Mounting:"}</span>
<span className={"text-on-surface font-semibold text-right"}>{"Antai Heavy Duty Roof Clamp & Rail Structure"}</span>
</div>
</div>

<div className={"flex items-center justify-between text-label-mono-spec font-label-mono-spec text-on-surface-variant"}>
<span>{"Avg Daily Yield: "}<strong className={"text-primary"}>{"25–38 kWh/day"}</strong></span>
<span className={"text-tier-certified font-bold"}>{"6,000 Battery Cycles (5y Warranty)"}</span>
</div>
</div>
<div className={"mt-space-lg pt-space-md flex items-center justify-between gap-space-sm bg-primary text-on-primary p-space-md rounded-lg"}>
<div>
<span className={"font-badge-label text-badge-label uppercase text-primary-fixed block"}>{"Turnkey Installation Available"}</span>
<span className={"font-headline-sm text-headline-sm font-bold text-on-primary"}>{"Wholesale / EPC Kit"}</span>
</div>
<div className={"flex items-center gap-space-xs"}>
<a className={"inline-flex items-center gap-1 bg-surface-card text-primary px-4 py-2 rounded-lg font-label-mono-spec text-label-mono-spec font-bold hover:bg-surface-container transition-colors shadow-sm"} href={"tel:+959957933180"}>
<span className={"material-symbols-outlined text-[16px]"} aria-hidden={"true"}>{"call"}</span>{" Inquire GDE\n              "}</a>
<a className={"bg-primary-container text-on-primary px-3 py-2 rounded-lg font-label-mono-spec text-label-mono-spec font-bold hover:opacity-90 transition-opacity shadow-sm"} href={"https://www.facebook.com/messages/t/1123518094416164"} rel={"noopener noreferrer"} target={"_blank"}>{"\n                Chat\n              "}</a>
</div>
</div>
</article>

<article className={"package-card lg:col-span-4 bg-surface-card rounded-xl p-space-lg flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"} data-category={"commercial"}>
<div className={"flex flex-col gap-space-md"}>
<div className={"flex flex-col gap-space-xs"}>
<span className={"font-label-mono-spec text-label-mono-spec text-primary font-bold"}>{"PACKAGE 03 · 400V THREE-PHASE"}</span>
<h3 className={"font-headline-sm text-headline-sm text-on-surface font-bold"}>{"Premium Package (10kW – 15kW)"}</h3>
<p className={"font-body-sm text-body-sm text-secondary font-myanmar"}>{"\n                စက်သုံးဆီဆိုင်၊ မီနီမတ်၊ အဆင့်မြင့်အိမ်ကြီးများနှင့် ဆေးရုံငယ်များအတွက်\n              "}</p>
</div>
<div className={"flex flex-wrap gap-1"}>
<span className={"bg-surface-container-low text-on-surface-variant px-2 py-0.5 rounded text-[11px] font-medium"}>{"Gas Stations"}</span>
<span className={"bg-surface-container-low text-on-surface-variant px-2 py-0.5 rounded text-[11px] font-medium"}>{"3-Phase Freezers"}</span>
<span className={"bg-surface-container-low text-on-surface-variant px-2 py-0.5 rounded text-[11px] font-medium"}>{"Commercial AC"}</span>
</div>
<div className={"bg-surface-container-low rounded-lg p-space-sm flex flex-col gap-space-xs font-body-sm text-body-sm"}>
<div className={"flex justify-between gap-1 py-0.5"}>
<span className={"text-secondary text-xs"}>{"Inverter:"}</span>
<span className={"text-on-surface font-semibold text-xs text-right"}>{"GoodWe / Solis 10–15kW 3-Phase"}</span>
</div>
<div className={"flex justify-between gap-1 py-0.5"}>
<span className={"text-secondary text-xs"}>{"Storage:"}</span>
<span className={"text-on-surface font-semibold text-xs text-right"}>{"HV Lithium Stack (15–20.4kWh)"}</span>
</div>
<div className={"flex justify-between gap-1 py-0.5"}>
<span className={"text-secondary text-xs"}>{"Solar Modules:"}</span>
<span className={"text-on-surface font-semibold text-xs text-right"}>{"18x–24x AIKO N-Type 675W Bifacial"}</span>
</div>
<div className={"flex justify-between gap-1 py-0.5"}>
<span className={"text-secondary text-xs"}>{"Management:"}</span>
<span className={"text-on-surface font-semibold text-xs text-right"}>{"Zero-Export Meter + 4G/WiFi Dongle"}</span>
</div>
</div>
<div className={"text-label-mono-spec font-label-mono-spec text-on-surface-variant flex justify-between"}>
<span>{"Yield: "}<strong className={"text-primary"}>{"50–70 kWh/d"}</strong></span>
<span className={"text-tier-certified font-bold"}>{"Commercial Grade"}</span>
</div>
</div>
<div className={"mt-space-md pt-space-sm flex items-center justify-between gap-space-xs bg-surface-container-low p-space-sm rounded-lg"}>
<span className={"font-label-mono-spec text-label-mono-spec text-secondary"}>{"3-Phase Ready"}</span>
<a className={"bg-primary text-on-primary px-3 py-1.5 rounded-lg font-label-mono-spec text-label-mono-spec font-bold hover:bg-primary-container transition-colors shadow-sm"} href={"tel:+959957933180"}>{"\n              Request B2B Quote\n            "}</a>
</div>
</article>

<article className={"package-card lg:col-span-4 bg-surface-card rounded-xl p-space-lg flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"} data-category={"commercial"}>
<div className={"flex flex-col gap-space-md"}>
<div className={"flex flex-col gap-space-xs"}>
<span className={"font-label-mono-spec text-label-mono-spec text-solar-amber font-bold"}>{"PACKAGE 04 · HEAVY COMMERCIAL"}</span>
<h3 className={"font-headline-sm text-headline-sm text-on-surface font-bold"}>{"Gold Package (20kW – 30kW)"}</h3>
<p className={"font-body-sm text-body-sm text-secondary font-myanmar"}>{"\n                ကုန်တိုက်ကြီးများ၊ သိုလှောင်ရုံများနှင့် အလတ်စား အလုပ်ရုံများအတွက်\n              "}</p>
</div>
<div className={"flex flex-wrap gap-1"}>
<span className={"bg-surface-container-low text-on-surface-variant px-2 py-0.5 rounded text-[11px] font-medium"}>{"Warehouses"}</span>
<span className={"bg-surface-container-low text-on-surface-variant px-2 py-0.5 rounded text-[11px] font-medium"}>{"Central Chillers"}</span>
<span className={"bg-surface-container-low text-on-surface-variant px-2 py-0.5 rounded text-[11px] font-medium"}>{"Manufacturing"}</span>
</div>
<div className={"bg-surface-container-low rounded-lg p-space-sm flex flex-col gap-space-xs font-body-sm text-body-sm"}>
<div className={"flex justify-between gap-1 py-0.5"}>
<span className={"text-secondary text-xs"}>{"Inverter:"}</span>
<span className={"text-on-surface font-semibold text-xs text-right"}>{"Commercial String/Hybrid 20–30kW"}</span>
</div>
<div className={"flex justify-between gap-1 py-0.5"}>
<span className={"text-secondary text-xs"}>{"Storage:"}</span>
<span className={"text-on-surface font-semibold text-xs text-right"}>{"Modular Battery Rack (30–50kWh)"}</span>
</div>
<div className={"flex justify-between gap-1 py-0.5"}>
<span className={"text-secondary text-xs"}>{"Solar Modules:"}</span>
<span className={"text-on-surface font-semibold text-xs text-right"}>{"36x–50x Tier-1 High-Output 675W"}</span>
</div>
<div className={"flex justify-between gap-1 py-0.5"}>
<span className={"text-secondary text-xs"}>{"Safety:"}</span>
<span className={"text-on-surface font-semibold text-xs text-right"}>{"Rapid Shutdown Fire Protection (Beny)"}</span>
</div>
</div>
<div className={"text-label-mono-spec font-label-mono-spec text-on-surface-variant flex justify-between"}>
<span>{"Yield: "}<strong className={"text-primary"}>{"100–145 kWh/d"}</strong></span>
<span className={"text-tier-certified font-bold"}>{"High Duty Cycle"}</span>
</div>
</div>
<div className={"mt-space-md pt-space-sm flex items-center justify-between gap-space-xs bg-surface-container-low p-space-sm rounded-lg"}>
<span className={"font-label-mono-spec text-label-mono-spec text-secondary"}>{"Custom Combiner"}</span>
<a className={"bg-primary text-on-primary px-3 py-1.5 rounded-lg font-label-mono-spec text-label-mono-spec font-bold hover:bg-primary-container transition-colors shadow-sm"} href={"tel:+959952706118"}>{"\n              Request B2B Quote\n            "}</a>
</div>
</article>

<article className={"package-card lg:col-span-4 bg-surface-card rounded-xl p-space-lg flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"} data-category={"industrial"}>
<div className={"flex flex-col gap-space-md"}>
<div className={"flex flex-col gap-space-xs"}>
<span className={"font-label-mono-spec text-label-mono-spec text-tier-certified font-bold"}>{"PACKAGE 05 · INDUSTRIAL MEGAWATT CLASS"}</span>
<h3 className={"font-headline-sm text-headline-sm text-on-surface font-bold"}>{"Platinum Package (50kW – 100kW+)"}</h3>
<p className={"font-body-sm text-body-sm text-secondary font-myanmar"}>{"\n                စက်ရုံကြီးများ၊ အထည်ချုပ်လုပ်ငန်း၊ မွေးမြူရေးခြံများနှင့် Microgrid စနစ်များ\n              "}</p>
</div>
<div className={"flex flex-wrap gap-1"}>
<span className={"bg-surface-container-low text-on-surface-variant px-2 py-0.5 rounded text-[11px] font-medium"}>{"Textile Mills"}</span>
<span className={"bg-surface-container-low text-on-surface-variant px-2 py-0.5 rounded text-[11px] font-medium"}>{"Poultry & Agribusiness"}</span>
<span className={"bg-surface-container-low text-on-surface-variant px-2 py-0.5 rounded text-[11px] font-medium"}>{"Microgrid Sync"}</span>
</div>
<div className={"bg-surface-container-low rounded-lg p-space-sm flex flex-col gap-space-xs font-body-sm text-body-sm"}>
<div className={"flex justify-between gap-1 py-0.5"}>
<span className={"text-secondary text-xs"}>{"Inverter Bank:"}</span>
<span className={"text-on-surface font-semibold text-xs text-right"}>{"50kW–100kW+ Industrial Parallel Array"}</span>
</div>
<div className={"flex justify-between gap-1 py-0.5"}>
<span className={"text-secondary text-xs"}>{"Storage (Opt.):"}</span>
<span className={"text-on-surface font-semibold text-xs text-right"}>{"High-Voltage C&I BESS Cabinet (100–200kWh)"}</span>
</div>
<div className={"flex justify-between gap-1 py-0.5"}>
<span className={"text-secondary text-xs"}>{"Array Scale:"}</span>
<span className={"text-on-surface font-semibold text-xs text-right"}>{"80x–160x Industrial 675W–700W Modules"}</span>
</div>
<div className={"flex justify-between gap-1 py-0.5"}>
<span className={"text-secondary text-xs"}>{"Engineering:"}</span>
<span className={"text-on-surface font-semibold text-xs text-right"}>{"GDE Turnkey EPC, Site Testing & Commissioning"}</span>
</div>
</div>
<div className={"text-label-mono-spec font-label-mono-spec text-on-surface-variant flex justify-between"}>
<span>{"Yield: "}<strong className={"text-primary"}>{"240–480+ kWh/d"}</strong></span>
<span className={"text-tier-certified font-bold"}>{"Industrial Diesel Offset"}</span>
</div>
</div>
<div className={"mt-space-md pt-space-sm flex items-center justify-between gap-space-xs bg-surface-container-low p-space-sm rounded-lg"}>
<span className={"font-label-mono-spec text-label-mono-spec text-secondary"}>{"EPC Turnkey"}</span>
<a className={"bg-primary text-on-primary px-3 py-1.5 rounded-lg font-label-mono-spec text-label-mono-spec font-bold hover:bg-primary-container transition-colors shadow-sm"} href={"tel:+959957933180"}>{"\n              Engineering Consult\n            "}</a>
</div>
</article>
</div>
</div>
</section>

<section className={"w-full bg-surface-container-low py-space-xl px-6"} id={"sizing-calculator"}>
<div className={"max-w-7xl mx-auto flex flex-col gap-space-lg"}>
<div className={"flex flex-col gap-space-xs max-w-3xl"}>
<span className={"font-badge-label text-badge-label uppercase text-primary font-bold"}>{"Instant Engineering Sizer"}</span>
<h2 className={"font-headline-lg text-headline-lg text-on-surface font-black"}>{"Interactive System Sizing & Fuel Savings Estimator"}</h2>
<p className={"font-body-md text-body-md text-on-surface-variant font-myanmar"}>{"\n          သင့်လုပ်ငန်း သို့မဟုတ် နေအိမ်တွင် နေ့စဉ်သုံးစွဲမည့် လျှပ်စစ်ပစ္စည်းများကို ရွေးချယ်ပြီး အသင့်တော်ဆုံး GDE Package နှင့် ဒီဇယ်မီးစက်ဆီဖိုး သက်သာမည့် ပမာဏကို တွက်ချက်ကြည့်ပါ\n        "}</p>
</div>
<div className={"grid grid-cols-1 lg:grid-cols-12 gap-space-lg bg-surface-card rounded-xl p-space-lg shadow-sm"}>

<div className={"lg:col-span-7 flex flex-col gap-space-md"}>
<span className={"font-headline-sm text-headline-sm font-bold text-on-surface"}>{"Step 1: Select Your Active Daytime & Nighttime Loads"}</span>
<div className={"grid grid-cols-1 sm:grid-cols-2 gap-space-sm"}>

<div className={"bg-surface p-space-sm rounded-lg flex items-center justify-between"}>
<div className={"flex items-center gap-space-xs"}>
<span className={"material-symbols-outlined text-primary text-[22px]"} aria-hidden={"true"}>{"ac_unit"}</span>
<div>
<span className={"font-body-sm text-body-sm font-semibold text-on-surface block"}>{"Air Conditioner (1.5 HP)"}</span>
<span className={"font-badge-label text-[11px] text-secondary"}>{"~1,200W each"}</span>
</div>
</div>
<div className={"flex items-center gap-2"}>
<button className={"calc-btn-dec w-7 h-7 rounded bg-surface-container-high text-on-surface font-bold hover:bg-surface-variant"} data-target={"ac"} type={"button"} aria-label={"Decrease ac count"}>{"-"}</button>
<span className={"font-label-mono-spec text-label-mono-spec font-bold w-6 text-center"} id={"count-ac"}>{"1"}</span>
<button className={"calc-btn-inc w-7 h-7 rounded bg-primary text-on-primary font-bold hover:bg-primary-container"} data-target={"ac"} type={"button"} aria-label={"Increase ac count"}>{"+"}</button>
</div>
</div>

<div className={"bg-surface p-space-sm rounded-lg flex items-center justify-between"}>
<div className={"flex items-center gap-space-xs"}>
<span className={"material-symbols-outlined text-primary text-[22px]"} aria-hidden={"true"}>{"kitchen"}</span>
<div>
<span className={"font-body-sm text-body-sm font-semibold text-on-surface block"}>{"Refrigerator / Deep Freezer"}</span>
<span className={"font-badge-label text-[11px] text-secondary"}>{"~350W continuous"}</span>
</div>
</div>
<div className={"flex items-center gap-2"}>
<button className={"calc-btn-dec w-7 h-7 rounded bg-surface-container-high text-on-surface font-bold hover:bg-surface-variant"} data-target={"fridge"} type={"button"} aria-label={"Decrease fridge count"}>{"-"}</button>
<span className={"font-label-mono-spec text-label-mono-spec font-bold w-6 text-center"} id={"count-fridge"}>{"1"}</span>
<button className={"calc-btn-inc w-7 h-7 rounded bg-primary text-on-primary font-bold hover:bg-primary-container"} data-target={"fridge"} type={"button"} aria-label={"Increase fridge count"}>{"+"}</button>
</div>
</div>

<div className={"bg-surface p-space-sm rounded-lg flex items-center justify-between"}>
<div className={"flex items-center gap-space-xs"}>
<span className={"material-symbols-outlined text-primary text-[22px]"} aria-hidden={"true"}>{"water_pump"}</span>
<div>
<span className={"font-body-sm text-body-sm font-semibold text-on-surface block"}>{"Water Pump (1 HP Motor)"}</span>
<span className={"font-badge-label text-[11px] text-secondary"}>{"~750W inductive surge"}</span>
</div>
</div>
<div className={"flex items-center gap-2"}>
<button className={"calc-btn-dec w-7 h-7 rounded bg-surface-container-high text-on-surface font-bold hover:bg-surface-variant"} data-target={"pump"} type={"button"} aria-label={"Decrease pump count"}>{"-"}</button>
<span className={"font-label-mono-spec text-label-mono-spec font-bold w-6 text-center"} id={"count-pump"}>{"1"}</span>
<button className={"calc-btn-inc w-7 h-7 rounded bg-primary text-on-primary font-bold hover:bg-primary-container"} data-target={"pump"} type={"button"} aria-label={"Increase pump count"}>{"+"}</button>
</div>
</div>

<div className={"bg-surface p-space-sm rounded-lg flex items-center justify-between"}>
<div className={"flex items-center gap-space-xs"}>
<span className={"material-symbols-outlined text-primary text-[22px]"} aria-hidden={"true"}>{"light"}</span>
<div>
<span className={"font-body-sm text-body-sm font-semibold text-on-surface block"}>{"Essential Base (Lights/Fans)"}</span>
<span className={"font-badge-label text-[11px] text-secondary"}>{"~500W group"}</span>
</div>
</div>
<div className={"flex items-center gap-2"}>
<button className={"calc-btn-dec w-7 h-7 rounded bg-surface-container-high text-on-surface font-bold hover:bg-surface-variant"} data-target={"base"} type={"button"} aria-label={"Decrease base count"}>{"-"}</button>
<span className={"font-label-mono-spec text-label-mono-spec font-bold w-6 text-center"} id={"count-base"}>{"1"}</span>
<button className={"calc-btn-inc w-7 h-7 rounded bg-primary text-on-primary font-bold hover:bg-primary-container"} data-target={"base"} type={"button"} aria-label={"Increase base count"}>{"+"}</button>
</div>
</div>
</div>

<div className={"flex flex-col gap-space-xs pt-space-xs bg-surface p-space-md rounded-lg"}>
<div className={"flex items-center justify-between"}>
<span className={"font-body-sm text-body-sm font-semibold text-on-surface"}>{"Daily Grid Blackout Expectation:"}</span>
<span className={"font-label-mono-spec text-label-mono-spec font-bold text-primary"} id={"blackout-val"}>{"8 Hours / Day"}</span>
</div>
<input className={"w-full accent-primary cursor-pointer"} id={"blackout-slider"} max={"24"} min={"4"} step={"1"} type={"range"} name={"blackout-slider"} defaultValue={"8"} />
<div className={"flex justify-between text-[11px] text-secondary font-label-mono-spec"}>
<span>{"4 hrs (Mild)"}</span>
<span>{"8 hrs (Yangon Normal)"}</span>
<span>{"16+ hrs (Severe / Off-Grid)"}</span>
</div>
</div>
</div>

<div className={"lg:col-span-5 bg-surface-container p-space-md rounded-xl flex flex-col justify-between"}>
<div className={"flex flex-col gap-space-sm"}>
<div className={"flex items-center justify-between pb-space-xs"}>
<span className={"font-badge-label text-badge-label uppercase font-bold text-primary"}>{"Sizing Assessment Output"}</span>
<span className={"bg-tier-certified text-on-primary font-badge-label text-badge-label px-2 py-0.5 rounded uppercase font-bold"}>{"Recommended"}</span>
</div>
<div className={"flex flex-col gap-1"}>
<span className={"font-label-mono-spec text-label-mono-spec text-secondary"}>{"Recommended GDE System"}</span>
<span className={"font-headline-md text-headline-md font-black text-on-surface"} id={"calc-package-title"}>{"Pro Package (6kW - 8kW Hybrid)"}</span>
<span className={"font-body-sm text-body-sm text-secondary font-myanmar"} id={"calc-package-desc"}>{"နေ့ရောညပါ သက်တောင့်သက်သာ သုံးနိုင်သော Lithium Hybrid စနစ်"}</span>
</div>

<div className={"grid grid-cols-2 gap-space-xs pt-space-xs"}>
<div className={"bg-surface-card p-3 rounded-lg"}>
<span className={"font-badge-label text-badge-label text-secondary uppercase block"}>{"Est. Daily Generation"}</span>
<span className={"font-headline-sm text-headline-sm font-black text-primary"} id={"calc-daily-kwh"}>{"28.5 kWh"}</span>
</div>
<div className={"bg-surface-card p-3 rounded-lg"}>
<span className={"font-badge-label text-badge-label text-secondary uppercase block"}>{"Battery Storage"}</span>
<span className={"font-headline-sm text-headline-sm font-black text-solar-amber"} id={"calc-battery-size"}>{"10.24 kWh LiFePO4"}</span>
</div>
</div>

<div className={"bg-surface-card p-space-sm rounded-lg flex items-center justify-between"}>
<div>
<span className={"font-badge-label text-badge-label text-tier-certified uppercase font-bold block"}>{"Est. Diesel Fuel Saved / Month"}</span>
<span className={"font-body-sm text-body-sm text-secondary"}>{"Based on generator diesel offset in Yangon"}</span>
</div>
<div className={"text-right"}>
<span className={"font-headline-sm text-headline-sm font-black text-tier-certified block"} id={"calc-fuel-savings"}>{"~350,000 MMK+"}</span>
<span className={"font-label-mono-spec text-[10px] text-secondary"}>{"per month"}</span>
</div>
</div>
</div>

<div className={"pt-space-md flex flex-col gap-space-xs"}>
<a className={"w-full text-center bg-primary text-on-primary py-2.5 rounded-lg font-label-mono-spec text-label-mono-spec font-bold hover:bg-primary-container transition-colors shadow-sm"} href={"tel:+959957933180"}>{"\n              Confirm Sizing With GDE Engineer\n            "}</a>
<span className={"text-center font-body-sm text-[11px] text-secondary"}>{"\n              Free Site Survey & Single-Line Electrical Diagram Provided\n            "}</span>
</div>
</div>
</div>
</div>
</section>

<section className={"w-full bg-surface py-space-xl px-6"}>
<div className={"max-w-7xl mx-auto flex flex-col gap-space-lg"}>
<div className={"flex flex-col md:flex-row items-baseline justify-between gap-space-sm"}>
<div>
<span className={"font-badge-label text-badge-label uppercase text-primary font-bold"}>{"Authorized Component Ecosystem"}</span>
<h2 className={"font-headline-md text-headline-md text-on-surface font-black"}>{"Genuine Engineering Inside Every Package"}</h2>
</div>
<p className={"font-body-sm text-body-sm text-secondary max-w-md"}>{"\n          GDE rejects refurbished or counterfeit hardware. We exclusively deploy Tier-1 brand new equipment with factory serial verification.\n        "}</p>
</div>
<div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md"}>

<div className={"bg-surface-card rounded-xl p-space-md flex flex-col gap-space-sm shadow-sm hover:shadow-md transition-shadow"}>
<div className={"w-full h-44 rounded-lg overflow-hidden bg-surface-container-low flex items-center justify-center relative"}>
<img className={"object-cover w-full h-full"} data-alt={"High precision modern solar inverter front panel display showing glowing turquoise telemetry on clean white engineering enclosure inside bright testing lab, studio lighting"} src={"/images/asset-010.jpg"} loading={"lazy"} decoding={"async"} />
<span className={"absolute top-2 left-2 bg-surface-card text-on-surface font-badge-label text-badge-label px-2 py-0.5 rounded font-bold shadow-sm"}>{"Inverters"}</span>
</div>
<div className={"flex flex-col gap-1"}>
<span className={"font-label-mono-spec text-label-mono-spec text-primary font-bold"}>{"Next Electric & Solis"}</span>
<span className={"font-headline-sm text-headline-sm font-bold text-on-surface"}>{"Hybrid Inverter Line"}</span>
<p className={"font-body-sm text-body-sm text-secondary"}>{"\n              Pure sine wave, integrated MPPT dual trackers, 10ms seamless blackout transfer, dual AC outputs.\n            "}</p>
</div>
<div className={"pt-2 flex items-center justify-between text-label-mono-spec font-label-mono-spec text-secondary"}>
<span>{"Efficiency: "}<strong>{"98.2%"}</strong></span>
<span className={"text-tier-certified font-bold"}>{"5y Warranty"}</span>
</div>
</div>

<div className={"bg-surface-card rounded-xl p-space-md flex flex-col gap-space-sm shadow-sm hover:shadow-md transition-shadow"}>
<div className={"w-full h-44 rounded-lg overflow-hidden bg-surface-container-low flex items-center justify-center relative"}>
<img className={"object-cover w-full h-full"} data-alt={"Sleek wall mounted home battery energy storage system in clean architectural garage with subtle LED charge status indicators, crisp blue and white color scheme"} src={"/images/asset-001.jpg"} loading={"lazy"} decoding={"async"} />
<span className={"absolute top-2 left-2 bg-surface-card text-on-surface font-badge-label text-badge-label px-2 py-0.5 rounded font-bold shadow-sm"}>{"Lithium Storage"}</span>
</div>
<div className={"flex flex-col gap-1"}>
<span className={"font-label-mono-spec text-label-mono-spec text-solar-amber font-bold"}>{"GDE LiFePO4 Smart Battery"}</span>
<span className={"font-headline-sm text-headline-sm font-bold text-on-surface"}>{"5.12kWh & 10.24kWh"}</span>
<p className={"font-body-sm text-body-sm text-secondary"}>{"\n              A-grade prismatic cells, integrated CAN/RS485 smart BMS, 6,000+ deep cycles at 80% DoD.\n            "}</p>
</div>
<div className={"pt-2 flex items-center justify-between text-label-mono-spec font-label-mono-spec text-secondary"}>
<span>{"Cycle Life: "}<strong>{"6,000+"}</strong></span>
<span className={"text-tier-certified font-bold"}>{"UL 1973"}</span>
</div>
</div>

<div className={"bg-surface-card rounded-xl p-space-md flex flex-col gap-space-sm shadow-sm hover:shadow-md transition-shadow"}>
<div className={"w-full h-44 rounded-lg overflow-hidden bg-surface-container-low flex items-center justify-center relative"}>
<img className={"object-cover w-full h-full"} data-alt={"High efficiency crystalline bifacial solar panel array glistening under intense natural sunlight with anti-reflective nanocoating against clear sky"} src={"/images/asset-006.jpg"} loading={"lazy"} decoding={"async"} />
<span className={"absolute top-2 left-2 bg-surface-card text-on-surface font-badge-label text-badge-label px-2 py-0.5 rounded font-bold shadow-sm"}>{"Solar Arrays"}</span>
</div>
<div className={"flex flex-col gap-1"}>
<span className={"font-label-mono-spec text-label-mono-spec text-primary font-bold"}>{"AIKO & Tier-1 Mono"}</span>
<span className={"font-headline-sm text-headline-sm font-bold text-on-surface"}>{"580W – 675W Bifacial"}</span>
<p className={"font-body-sm text-body-sm text-secondary"}>{"\n              N-Type ABC cell technology, higher temperature tolerance in Myanmar hot climates, 23.8% module efficiency.\n            "}</p>
</div>
<div className={"pt-2 flex items-center justify-between text-label-mono-spec font-label-mono-spec text-secondary"}>
<span>{"Degradation: "}<strong>{"<0.4%/yr"}</strong></span>
<span className={"text-tier-certified font-bold"}>{"25y Output"}</span>
</div>
</div>

<div className={"bg-surface-card rounded-xl p-space-md flex flex-col gap-space-sm shadow-sm hover:shadow-md transition-shadow"}>
<div className={"w-full h-44 rounded-lg overflow-hidden bg-surface-container-low flex items-center justify-center relative"}>
<img className={"object-cover w-full h-full"} data-alt={"Industrial electrical protection combiner box with precision neat wiring, DIN rail mounted surge protection devices, miniature circuit breakers and safety labels"} src={"/images/asset-005.jpg"} loading={"lazy"} decoding={"async"} />
<span className={"absolute top-2 left-2 bg-surface-card text-on-surface font-badge-label text-badge-label px-2 py-0.5 rounded font-bold shadow-sm"}>{"Protection"}</span>
</div>
<div className={"flex flex-col gap-1"}>
<span className={"font-label-mono-spec text-label-mono-spec text-secondary font-bold"}>{"Beny & Moreday Components"}</span>
<span className={"font-headline-sm text-headline-sm font-bold text-on-surface"}>{"Pre-Wired DC/AC Boxes"}</span>
<p className={"font-body-sm text-body-sm text-secondary"}>{"\n              IP65 waterproof enclosure, Type II DC surge arresters, dual pole DC isolator switches, grounded lugs.\n            "}</p>
</div>
<div className={"pt-2 flex items-center justify-between text-label-mono-spec font-label-mono-spec text-secondary"}>
<span>{"Rating: "}<strong>{"1000V DC"}</strong></span>
<span className={"text-tier-certified font-bold"}>{"IEC 60947"}</span>
</div>
</div>
</div>
</div>
</section>

<section className={"w-full bg-surface-canvas py-space-xl px-6"}>
<div className={"max-w-7xl mx-auto flex flex-col gap-space-lg"}>
<div className={"flex flex-col gap-space-xs text-center items-center"}>
<span className={"font-badge-label text-badge-label uppercase text-primary font-bold"}>{"The Golden Diamond Eagle Standard"}</span>
<h2 className={"font-headline-lg text-headline-lg text-on-surface font-black"}>{"Why Contractors & Homeowners Rely On GDE Packages"}</h2>
<p className={"font-body-md text-body-md text-secondary max-w-2xl font-myanmar"}>{"\n          အာမခံအပြည့်အဝပါဝင်သော စက်ပစ္စည်းစစ်စစ်များနှင့် ရန်ကုန်အခြေစိုက် ကျွမ်းကျင်အင်ဂျင်နီယာအဖွဲ့၏ နည်းပညာပံ့ပိုးမှု\n        "}</p>
</div>
<div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md"}>
<div className={"bg-surface-card p-space-md rounded-xl flex flex-col gap-space-sm shadow-sm"}>
<div className={"w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary"}>
<span className={"material-symbols-outlined text-[24px]"} aria-hidden={"true"}>{"verified_user"}</span>
</div>
<h3 className={"font-headline-sm text-headline-sm font-bold text-on-surface"}>{"100% Genuine Direct Import"}</h3>
<p className={"font-body-sm text-body-sm text-secondary"}>{"\n            Factory-authorized partner for Next Electric, Livfast, AIKO, Solis, and GoodWe. Every unit comes with serial tracking and legitimate factory warranty.\n          "}</p>
</div>
<div className={"bg-surface-card p-space-md rounded-xl flex flex-col gap-space-sm shadow-sm"}>
<div className={"w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-solar-amber"}>
<span className={"material-symbols-outlined text-[24px]"} aria-hidden={"true"}>{"electrical_services"}</span>
</div>
<h3 className={"font-headline-sm text-headline-sm font-bold text-on-surface"}>{"Turnkey Pre-Wired Enclosures"}</h3>
<p className={"font-body-sm text-body-sm text-secondary"}>{"\n            Zero messy setups. Packages feature workshop-assembled DC combiner boxes, MCBs, SPDs, and heavy-gauge copper wiring for rapid error-free installation.\n          "}</p>
</div>
<div className={"bg-surface-card p-space-md rounded-xl flex flex-col gap-space-sm shadow-sm"}>
<div className={"w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-tier-certified"}>
<span className={"material-symbols-outlined text-[24px]"} aria-hidden={"true"}>{"local_shipping"}</span>
</div>
<h3 className={"font-headline-sm text-headline-sm font-bold text-on-surface"}>{"Myanmar-Wide Express Freight"}</h3>
<p className={"font-body-sm text-body-sm text-secondary"}>{"\n            Secure crate shipping to Mandalay, Taunggyi, Mawlamyine, Naypyitaw, Pyay, Pathein, and across all states and divisions with transit insurance.\n          "}</p>
</div>
<div className={"bg-surface-card p-space-md rounded-xl flex flex-col gap-space-sm shadow-sm"}>
<div className={"w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary"}>
<span className={"material-symbols-outlined text-[24px]"} aria-hidden={"true"}>{"support_agent"}</span>
</div>
<h3 className={"font-headline-sm text-headline-sm font-bold text-on-surface"}>{"Yangon Engineering Support"}</h3>
<p className={"font-body-sm text-body-sm text-secondary"}>{"\n            Central service facility in FMI City, Hlaing Tharyar. Dedicated field technicians, replacement spare units, and direct engineer phone hotlines.\n          "}</p>
</div>
</div>
</div>
</section>

<section className={"w-full bg-surface py-space-xl px-6"}>
<div className={"max-w-7xl mx-auto flex flex-col gap-space-lg"}>
<div className={"flex flex-col gap-space-xs"}>
<span className={"font-badge-label text-badge-label uppercase text-secondary font-bold"}>{"Quick Reference Matrix"}</span>
<h2 className={"font-headline-md text-headline-md text-on-surface font-black"}>{"Comprehensive Package Comparison Guide"}</h2>
</div>
<div className={"overflow-x-auto bg-surface-card rounded-xl shadow-sm"}>
<table className={"w-full text-left font-body-sm text-body-sm"}>
<thead className={"bg-surface-container-high text-on-surface uppercase font-label-mono-spec text-[11px] font-bold"}>
<tr>
<th className={"px-5 py-3"}>{"Package Title"}</th>
<th className={"px-5 py-3"}>{"Inverter Rating"}</th>
<th className={"px-5 py-3"}>{"Battery Capacity"}</th>
<th className={"px-5 py-3"}>{"Solar Array Wattage"}</th>
<th className={"px-5 py-3"}>{"Primary Target"}</th>
<th className={"px-5 py-3 text-right"}>{"Inquiry Channel"}</th>
</tr>
</thead>
<tbody className={"divide-y-0 text-on-surface"}>
<tr className={"hover:bg-surface-container-low transition-colors"}>
<td className={"px-5 py-4 font-bold text-primary"}>{"Basic Package"}</td>
<td className={"px-5 py-4"}>{"3kW – 5kW Off-Grid"}</td>
<td className={"px-5 py-4"}>{"2x 150Ah/200Ah Tubular/Gel"}</td>
<td className={"px-5 py-4"}>{"2,160W – 3,240W"}</td>
<td className={"px-5 py-4 text-secondary"}>{"Lights, Fans, TV, Fridge"}</td>
<td className={"px-5 py-4 text-right"}>
<a className={"text-primary font-bold hover:underline"} href={"tel:+959957933180"}>{"Get Pricing →"}</a>
</td>
</tr>
<tr className={"hover:bg-surface-container-low transition-colors bg-surface-container/50"}>
<td className={"px-5 py-4 font-bold text-primary flex items-center gap-1.5"}>{"\n                Pro Package\n                "}<span className={"bg-solar-amber text-on-primary font-badge-label text-[9px] px-1.5 py-0.5 rounded uppercase font-bold"}>{"Best Seller"}</span>
</td>
<td className={"px-5 py-4"}>{"6kW – 8kW Smart Hybrid"}</td>
<td className={"px-5 py-4"}>{"5.12kWh – 10.24kWh LiFePO4"}</td>
<td className={"px-5 py-4"}>{"4,640W – 6,960W"}</td>
<td className={"px-5 py-4 text-secondary"}>{"Modern Homes, 2x ACs, Clinics"}</td>
<td className={"px-5 py-4 text-right"}>
<a className={"text-primary font-bold hover:underline"} href={"tel:+959957933180"}>{"Get Pricing →"}</a>
</td>
</tr>
<tr className={"hover:bg-surface-container-low transition-colors"}>
<td className={"px-5 py-4 font-bold text-primary"}>{"Premium Commercial"}</td>
<td className={"px-5 py-4"}>{"10kW – 15kW 3-Phase Hybrid"}</td>
<td className={"px-5 py-4"}>{"15kWh – 20kWh HV Lithium"}</td>
<td className={"px-5 py-4"}>{"12,150W – 16,200W"}</td>
<td className={"px-5 py-4 text-secondary"}>{"Gas Stations, Marts, Villas"}</td>
<td className={"px-5 py-4 text-right"}>
<a className={"text-primary font-bold hover:underline"} href={"tel:+959957933180"}>{"Get Pricing →"}</a>
</td>
</tr>
<tr className={"hover:bg-surface-container-low transition-colors"}>
<td className={"px-5 py-4 font-bold text-primary"}>{"Gold Commercial"}</td>
<td className={"px-5 py-4"}>{"20kW – 30kW Heavy Hybrid"}</td>
<td className={"px-5 py-4"}>{"30kWh – 50kWh Rack Storage"}</td>
<td className={"px-5 py-4"}>{"24,300W – 33,750W"}</td>
<td className={"px-5 py-4 text-secondary"}>{"Department Stores, Workshops"}</td>
<td className={"px-5 py-4 text-right"}>
<a className={"text-primary font-bold hover:underline"} href={"tel:+959952706118"}>{"Get Pricing →"}</a>
</td>
</tr>
<tr className={"hover:bg-surface-container-low transition-colors"}>
<td className={"px-5 py-4 font-bold text-primary"}>{"Platinum Industrial"}</td>
<td className={"px-5 py-4"}>{"50kW – 100kW+ Commercial Inverters"}</td>
<td className={"px-5 py-4"}>{"100kWh+ Containerized (Opt.)"}</td>
<td className={"px-5 py-4"}>{"54,000W – 108,000W+"}</td>
<td className={"px-5 py-4 text-secondary"}>{"Factories, Agriculture, Microgrids"}</td>
<td className={"px-5 py-4 text-right"}>
<a className={"text-primary font-bold hover:underline"} href={"tel:+959957933180"}>{"EPC Quote →"}</a>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<section className={"w-full bg-surface-container py-space-xl px-6"}>
<div className={"max-w-7xl mx-auto bg-surface-card rounded-xl p-space-lg md:p-space-xl shadow-md flex flex-col lg:flex-row items-center justify-between gap-space-lg"}>
<div className={"flex flex-col gap-space-xs max-w-2xl"}>
<div className={"flex items-center gap-space-xs"}>
<span className={"inline-flex items-center gap-1 bg-surface-container text-primary font-badge-label text-badge-label px-2.5 py-1 rounded uppercase font-bold"}>
<span className={"material-symbols-outlined text-[14px]"} aria-hidden={"true"}>{"support"}</span>{" Engineering Consultation\n          "}</span>
<span className={"text-secondary font-label-mono-spec text-label-mono-spec"}>{"Yangon Central Logistics"}</span>
</div>
<h2 className={"font-headline-lg text-headline-lg text-on-surface font-black"}>{"\n          Need a Custom Sized Solution for Your Building or Factory?\n        "}</h2>
<p className={"font-body-md text-body-md text-secondary font-myanmar"}>{"\n          သင့်လုပ်ငန်း၏ မီတာခနှင့် မီးပျက်ချိန် လိုအပ်ချက်များအတွက် အင်ဂျင်နီယာနှင့် တိုက်ရိုက်ဆွေးနွေးပြီး အခမဲ့ တွက်ချက်မှု ရယူလိုက်ပါ\n        "}</p>
<div className={"flex flex-wrap items-center gap-space-md pt-space-xs font-label-mono-spec text-label-mono-spec text-on-surface"}>
<div className={"flex items-center gap-1"}>
<span className={"material-symbols-outlined text-[18px] text-primary"} aria-hidden={"true"}>{"location_on"}</span>
<span>{"E-32, Sagawah St (3), FMI City, Hlaing Tharyar, Yangon"}</span>
</div>
<div className={"flex items-center gap-1"}>
<span className={"material-symbols-outlined text-[18px] text-tier-certified"} aria-hidden={"true"}>{"schedule"}</span>
<span>{"Mon – Sat: 8:30 AM – 5:30 PM"}</span>
</div>
</div>
</div>
<div className={"flex flex-col sm:flex-row lg:flex-col gap-space-xs shrink-0 w-full lg:w-auto"}>
<a className={"inline-flex items-center justify-center gap-2 bg-primary text-on-primary px-6 py-3.5 rounded-lg font-headline-sm text-headline-sm font-bold shadow-md hover:bg-primary-container transition-colors"} href={"tel:+959957933180"}>
<span className={"material-symbols-outlined text-[20px]"} aria-hidden={"true"}>{"call"}</span>
<span>{"(+959) 957933180"}</span>
</a>
<a className={"inline-flex items-center justify-center gap-2 bg-[#7360F2] text-white px-6 py-3 rounded-lg font-label-mono-spec text-label-mono-spec font-bold shadow-sm hover:opacity-90 transition-opacity"} href={"https://invite.viber.com/?g2=AQBL3Uw94Ep4qE7tS7yPEErHa5w1BRUcuxQHFfsZQLah3bkPINFLs3iUY9KGOXNJ"} rel={"noopener noreferrer"} target={"_blank"}>
<span className={"material-symbols-outlined text-[18px]"} aria-hidden={"true"}>{"forum"}</span>
<span>{"Official Viber Channel"}</span>
</a>
<a className={"inline-flex items-center justify-center gap-2 bg-[#0084FF] text-white px-6 py-3 rounded-lg font-label-mono-spec text-label-mono-spec font-bold shadow-sm hover:opacity-90 transition-opacity"} href={"https://www.facebook.com/messages/t/1123518094416164"} rel={"noopener noreferrer"} target={"_blank"}>
<span className={"material-symbols-outlined text-[18px]"} aria-hidden={"true"}>{"chat"}</span>
<span>{"Messenger Instant Response"}</span>
</a>
</div>
</div>
</section>


</div></main>
);
}
