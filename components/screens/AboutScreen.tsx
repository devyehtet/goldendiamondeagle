export default function AboutScreen() {
return (
<main className={"w-full pt-20 bg-surface-canvas"}><div className={"flex flex-col w-full"}>

<div className={"w-full bg-surface-container-low py-space-sm px-6"}>
<div className={"max-w-7xl mx-auto flex items-center gap-space-xs font-body-sm text-body-sm text-on-surface-variant"}>
<a className={"hover:text-primary transition-colors flex items-center gap-1"} href={"/"}>
<span className={"material-symbols-outlined text-[16px] text-outline"} aria-hidden={"true"}>{"home"}</span>
<span>{"Home"}</span>
</a>
<span className={"text-outline-variant"}>{"/"}</span>
<span className={"text-secondary font-medium"}>{"Company"}</span>
<span className={"text-outline-variant"}>{"/"}</span>
<span className={"text-primary font-bold"}>{"About Us & Corporate Profile"}</span>
</div>
</div>

<section className={"relative w-full bg-surface-canvas overflow-hidden py-space-xl"}>
<div className={"absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none"}></div>
<div className={"absolute -bottom-24 -left-20 w-80 h-80 rounded-full bg-tertiary/5 blur-2xl pointer-events-none"}></div>
<div className={"max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center relative z-10"}>
<div className={"lg:col-span-7 flex flex-col gap-space-md"}>
<div className={"flex flex-wrap items-center gap-space-xs"}>
<span className={"inline-flex items-center gap-1.5 bg-secondary-container text-on-secondary-fixed font-badge-label text-badge-label px-2.5 py-1 rounded uppercase tracking-wider font-bold"}>
<span className={"material-symbols-outlined text-[14px] text-primary"} aria-hidden={"true"}>{"verified"}</span>{"\n            Authorized National Wholesaler\n          "}</span>
<span className={"inline-flex items-center gap-1.5 bg-surface-card text-solar-amber font-badge-label text-badge-label px-2.5 py-1 rounded uppercase tracking-wider font-bold shadow-sm"}>
<span className={"material-symbols-outlined text-[14px]"} aria-hidden={"true"}>{"bolt"}</span>{"\n            Tier-1 Energy Hub\n          "}</span>
</div>
<div className={"flex flex-col gap-space-xs"}>
<span className={"font-headline-sm text-headline-sm font-semibold text-secondary"}>{"\n            Golden Diamond Eagle Co., Ltd. (GDE) အကြောင်း တစေ့တစောင်း\n          "}</span>
<h1 className={"font-display-hero text-display-hero font-extrabold text-on-surface tracking-tight leading-tight"}>{"\n            Powering Myanmar’s Industrial & Clean Energy Future.\n          "}</h1>
</div>
<p className={"font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed"}>{"\n          Myanmar’s premier accredited importer and nationwide master distributor of High/Medium/Low Voltage power cables, PC Wire, Tier-1 N-Type solar modules, commercial hybrid inverters, and high-capacity LiFePO4 battery storage systems. Supplying end-to-end turnkey reliability from Yangon to all 14 States and Regions.\n        "}</p>
<div className={"flex flex-wrap items-center gap-space-md pt-space-xs"}>
<a className={"inline-flex items-center gap-space-xs bg-primary hover:bg-primary-container text-on-primary font-body-md text-body-md font-semibold px-6 py-3 rounded-lg shadow-sm transition-colors"} href={"#pillars"}>
<span className={"material-symbols-outlined text-[18px]"} aria-hidden={"true"}>{"corporate_fare"}</span>
<span>{"Explore Enterprise Profile"}</span>
</a>
<a className={"inline-flex items-center gap-space-xs bg-surface-container-high hover:bg-surface-variant text-on-surface font-body-md text-body-md font-semibold px-5 py-3 rounded-lg transition-colors"} href={"#timeline"}>
<span className={"material-symbols-outlined text-[18px]"} aria-hidden={"true"}>{"timeline"}</span>
<span>{"10-Year Journey"}</span>
</a>
</div>
</div>
<div className={"lg:col-span-5 relative"}>
<div className={"relative w-full h-80 sm:h-96 rounded-xl overflow-hidden shadow-xl bg-surface-container"}>
<img className={"w-full h-full object-cover"} data-alt={"High angle architectural view of a 50000 sq ft industrial logistics warehouse and testing facility in Yangon Myanmar with neatly stacked high voltage cable drums and pallets of Tier 1 solar panels in daylight with professional workers in safety vests"} src={"/images/asset-002.jpg"} loading={"lazy"} decoding={"async"} />
<div className={"absolute inset-0 bg-gradient-to-t from-on-surface/80 via-transparent to-transparent flex flex-col justify-end p-6 text-on-primary"}>
<span className={"font-badge-label text-badge-label uppercase text-solar-amber tracking-wider font-bold"}>{"FMI City Logistics Central"}</span>
<span className={"font-headline-sm text-headline-sm font-bold"}>{"50,000+ sq.ft Facility in Hlaing Tharyar, Yangon"}</span>
<span className={"font-body-sm text-body-sm text-surface-container-highest mt-1"}>{"Full SLD testing, warranty diagnostics & multi-state container loading daily."}</span>
</div>
</div>
</div>
</div>

<div className={"max-w-7xl mx-auto px-6 mt-space-xl"}>
<div className={"grid grid-cols-2 md:grid-cols-4 gap-space-md"}>
<div className={"bg-surface-card p-6 rounded-xl shadow-sm flex flex-col gap-space-xs"}>
<div className={"flex items-center justify-between"}>
<span className={"font-display-hero text-display-hero font-extrabold text-primary"}>{"10+"}</span>
<span className={"material-symbols-outlined text-primary text-[28px]"} aria-hidden={"true"}>{"history"}</span>
</div>
<span className={"font-headline-sm text-[15px] font-bold text-on-surface"}>{"Years Industry Authority"}</span>
<span className={"font-body-sm text-body-sm text-on-surface-variant"}>{"Founded in Yangon in 2014 supplying civil and utility electrical networks."}</span>
</div>
<div className={"bg-surface-card p-6 rounded-xl shadow-sm flex flex-col gap-space-xs"}>
<div className={"flex items-center justify-between"}>
<span className={"font-display-hero text-display-hero font-extrabold text-tertiary"}>{"500+"}</span>
<span className={"material-symbols-outlined text-tertiary text-[28px]"} aria-hidden={"true"}>{"hub"}</span>
</div>
<span className={"font-headline-sm text-[15px] font-bold text-on-surface"}>{"Wholesale Dealer Partners"}</span>
<span className={"font-body-sm text-body-sm text-on-surface-variant"}>{"Distributing across all 14 Myanmar States & Divisions with zero transit delay."}</span>
</div>
<div className={"bg-surface-card p-6 rounded-xl shadow-sm flex flex-col gap-space-xs"}>
<div className={"flex items-center justify-between"}>
<span className={"font-display-hero text-display-hero font-extrabold text-solar-amber"}>{"10k+"}</span>
<span className={"material-symbols-outlined text-solar-amber text-[28px]"} aria-hidden={"true"}>{"speed"}</span>
</div>
<span className={"font-headline-sm text-[15px] font-bold text-on-surface"}>{"kVA Deployed Capacity"}</span>
<span className={"font-body-sm text-body-sm text-on-surface-variant"}>{"Reliably powering factories, agricultural cold storage, and microgrids."}</span>
</div>
<div className={"bg-surface-card p-6 rounded-xl shadow-sm flex flex-col gap-space-xs"}>
<div className={"flex items-center justify-between"}>
<span className={"font-display-hero text-display-hero font-extrabold text-tier-certified"}>{"100%"}</span>
<span className={"material-symbols-outlined text-tier-certified text-[28px]"} aria-hidden={"true"}>{"verified_user"}</span>
</div>
<span className={"font-headline-sm text-[15px] font-bold text-on-surface"}>{"Factory Direct Warranties"}</span>
<span className={"font-body-sm text-body-sm text-on-surface-variant"}>{"Authentic Tier-1 serial records backed by local RMA technical replacements."}</span>
</div>
</div>
</div>
</section>

<section className={"w-full bg-surface-container-low py-space-xl"}>
<div className={"max-w-7xl mx-auto px-6"}>
<div className={"grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-stretch"}>

<div className={"lg:col-span-6 bg-surface-card p-8 sm:p-10 rounded-xl shadow-sm flex flex-col justify-between"}>
<div className={"flex flex-col gap-space-md"}>
<div className={"flex items-center gap-space-sm"}>
<span className={"w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary"}>
<span className={"material-symbols-outlined text-[26px]"} aria-hidden={"true"}>{"visibility"}</span>
</span>
<div>
<span className={"font-badge-label text-badge-label uppercase text-primary font-bold tracking-wider"}>{"Corporate Philosophy"}</span>
<h2 className={"font-headline-lg text-headline-lg font-bold text-on-surface"}>{"Our Vision"}</h2>
</div>
</div>
<p className={"font-body-lg text-body-lg text-on-surface-variant leading-relaxed"}>{"\n              To stand as Myanmar’s most dependable, uncompromising power transmission and renewable solar energy supply partner—safeguarding commercial productivity and completely eliminating blackouts for manufacturing plants, agro-industries, and residential developments across the nation.\n            "}</p>
</div>
<div className={"mt-space-lg pt-space-md bg-surface-container-lowest p-4 rounded-lg flex items-center gap-space-sm"}>
<span className={"material-symbols-outlined text-solar-amber text-[24px]"} aria-hidden={"true"}>{"lightbulb"}</span>
<span className={"font-body-sm text-body-sm text-on-surface font-medium"}>{"Empowering Myanmar’s sustainable industrial independence with reliable clean energy grids."}</span>
</div>
</div>

<div className={"lg:col-span-6 bg-primary text-on-primary p-8 sm:p-10 rounded-xl shadow-md flex flex-col justify-between"}>
<div className={"flex flex-col gap-space-md"}>
<div className={"flex items-center gap-space-sm"}>
<span className={"w-12 h-12 rounded-lg bg-surface-card/15 flex items-center justify-center text-on-primary"}>
<span className={"material-symbols-outlined text-[26px]"} aria-hidden={"true"}>{"track_changes"}</span>
</span>
<div>
<span className={"font-badge-label text-badge-label uppercase text-primary-fixed tracking-wider font-bold"}>{"Strategic Mandate"}</span>
<h2 className={"font-headline-lg text-headline-lg font-bold text-on-primary"}>{"Our Mission"}</h2>
</div>
</div>
<p className={"font-body-lg text-body-lg text-inverse-on-surface leading-relaxed"}>{"\n              Supplying strictly certified international-grade (IEC, UL, CE) electrical goods, PC Wire, and Tier-1 solar equipment directly sourced from accredited manufacturers. We deliver rock-solid wholesale pricing, rapid regional delivery, and localized Yangon engineering support to EPCs and contractors nationwide.\n            "}</p>
</div>
<div className={"mt-space-lg pt-space-md bg-surface-container-lowest/10 p-4 rounded-lg flex items-center gap-space-sm"}>
<span className={"material-symbols-outlined text-secondary-fixed text-[24px]"} aria-hidden={"true"}>{"verified"}</span>
<span className={"font-body-sm text-body-sm text-on-primary font-medium"}>{"Unwavering compliance with Myanmar Ministry of Electricity & Energy quality regulations."}</span>
</div>
</div>
</div>
</div>
</section>

<section className={"w-full bg-surface-canvas py-space-xl"} id={"pillars"}>
<div className={"max-w-7xl mx-auto px-6 flex flex-col gap-space-xl"}>
<div className={"flex flex-col gap-space-xs text-center max-w-3xl mx-auto"}>
<span className={"font-badge-label text-badge-label uppercase text-primary font-bold tracking-wider"}>{"Enterprise Distribution Engine"}</span>
<h2 className={"font-display-hero text-headline-lg sm:text-display-hero font-extrabold text-on-surface"}>{"\n          Four Pillars of Golden Diamond Eagle\n        "}</h2>
<p className={"font-body-md text-body-md text-on-surface-variant"}>{"\n          Built on deep technical knowledge, large-scale direct procurement, and dedicated local engineering assets that protect your investment against grid instability.\n        "}</p>
</div>
<div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md"}>

<div className={"bg-surface-card p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"}>
<div className={"flex flex-col gap-space-md"}>
<div className={"w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-primary"}>
<span className={"material-symbols-outlined text-[28px]"} aria-hidden={"true"}>{"solar_power"}</span>
</div>
<div className={"flex flex-col gap-space-xs"}>
<span className={"font-label-mono-spec text-label-mono-spec uppercase text-solar-amber font-bold"}>{"Direct Tier-1 Solar Import"}</span>
<h3 className={"font-headline-sm text-headline-sm font-bold text-on-surface"}>{"Factory Direct Portfolios"}</h3>
<p className={"font-body-sm text-body-sm text-on-surface-variant leading-relaxed"}>{"\n                Direct authorized agreements with AIKO (N-Type ABC), Solis, GoodWe, Livfast, Next Electric, Antai Solar, and Beny. We ensure genuine factory flash-test reports and full manufacturer warranties for every container.\n              "}</p>
</div>
</div>
<div className={"mt-space-lg pt-space-sm flex items-center gap-1.5 text-primary font-label-mono-spec text-label-mono-spec font-bold"}>
<span>{"AIKO · Solis · GoodWe · Livfast"}</span>
</div>
</div>

<div className={"bg-surface-card p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"}>
<div className={"flex flex-col gap-space-md"}>
<div className={"w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-tertiary"}>
<span className={"material-symbols-outlined text-[28px]"} aria-hidden={"true"}>{"cable"}</span>
</div>
<div className={"flex flex-col gap-space-xs"}>
<span className={"font-label-mono-spec text-label-mono-spec uppercase text-tertiary font-bold"}>{"Heavy Power Transmission"}</span>
<h3 className={"font-headline-sm text-headline-sm font-bold text-on-surface"}>{"HV / MV / LV Cable & PC Wire"}</h3>
<p className={"font-body-sm text-body-sm text-on-surface-variant leading-relaxed"}>{"\n                Mass distribution of High Voltage (33kV), Medium Voltage (11kV), and Low Voltage (0.6/1kV) armoured copper cables, high-tensile prestressed PC Wire, ACSR conductors, and certified transformer accessories.\n              "}</p>
</div>
</div>
<div className={"mt-space-lg pt-space-sm flex items-center gap-1.5 text-tertiary font-label-mono-spec text-label-mono-spec font-bold"}>
<span>{"33kV · 11kV · 0.6/1kV XLPE Armoured"}</span>
</div>
</div>

<div className={"bg-surface-card p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"}>
<div className={"flex flex-col gap-space-md"}>
<div className={"w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-primary"}>
<span className={"material-symbols-outlined text-[28px]"} aria-hidden={"true"}>{"warehouse"}</span>
</div>
<div className={"flex flex-col gap-space-xs"}>
<span className={"font-label-mono-spec text-label-mono-spec uppercase text-primary font-bold"}>{"Logistics & Fulfillment"}</span>
<h3 className={"font-headline-sm text-headline-sm font-bold text-on-surface"}>{"50,000+ sq.ft Yangon Central Hub"}</h3>
<p className={"font-body-sm text-body-sm text-on-surface-variant leading-relaxed"}>{"\n                Located at E-32 Sagawah St (3), FMI City, Hlaing Tharyar. Over 50,000 square feet of bonded-standard storage supporting instant dispatch to Mandalay, Taunggyi, Mawlamyine, Pyay, and Naypyitaw daily.\n              "}</p>
</div>
</div>
<div className={"mt-space-lg pt-space-sm flex items-center gap-1.5 text-primary font-label-mono-spec text-label-mono-spec font-bold"}>
<span>{"24/48-Hour Regional Transport"}</span>
</div>
</div>

<div className={"bg-surface-card p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"}>
<div className={"flex flex-col gap-space-md"}>
<div className={"w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-tier-certified"}>
<span className={"material-symbols-outlined text-[28px]"} aria-hidden={"true"}>{"engineering"}</span>
</div>
<div className={"flex flex-col gap-space-xs"}>
<span className={"font-label-mono-spec text-label-mono-spec uppercase text-tier-certified font-bold"}>{"In-House Engineering RMA"}</span>
<h3 className={"font-headline-sm text-headline-sm font-bold text-on-surface"}>{"Calculations & Fast RMA Support"}</h3>
<p className={"font-body-sm text-body-sm text-on-surface-variant leading-relaxed"}>{"\n                Myanmar-registered engineers conducting Single Line Diagram (SLD) verification, BOQ cost optimization, grid protection assessments, and dedicated fast-turnaround RMA diagnostic testing in Yangon.\n              "}</p>
</div>
</div>
<div className={"mt-space-lg pt-space-sm flex items-center gap-1.5 text-tier-certified font-label-mono-spec text-label-mono-spec font-bold"}>
<span>{"SLD Review · RMA Service Center"}</span>
</div>
</div>
</div>
</div>
</section>

<section className={"w-full bg-surface-container py-space-xl"}>
<div className={"max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center"}>
<div className={"lg:col-span-5 flex flex-col gap-space-md"}>
<span className={"font-badge-label text-badge-label uppercase text-primary font-bold tracking-wider"}>{"Myanmar Central Hub"}</span>
<h2 className={"font-headline-lg text-headline-lg font-bold text-on-surface"}>{"\n          Engineered for Heavy Inventory, Immediate Deployment\n        "}</h2>
<p className={"font-body-md text-body-md text-on-surface-variant leading-relaxed"}>{"\n          At Golden Diamond Eagle Co., Ltd., we maintain strategic reserve buffer stocks within our FMI City distribution hub. Myanmar commercial developers and government infrastructure contractors depend on our ready stock to circumvent long international maritime lead times and currency volatility.\n        "}</p>
<div className={"flex flex-col gap-space-sm pt-space-xs"}>
<div className={"flex items-start gap-space-sm bg-surface-card p-4 rounded-lg shadow-sm"}>
<span className={"material-symbols-outlined text-solar-amber text-[22px] shrink-0"} aria-hidden={"true"}>{"inventory_2"}</span>
<div>
<span className={"font-headline-sm text-[15px] font-bold text-on-surface"}>{"Buffer Stock Guarantee"}</span>
<p className={"font-body-sm text-body-sm text-on-surface-variant"}>{"Continuous containerized reserves of 550W–675W Bifacial panels, hybrid inverters, and tubular batteries."}</p>
</div>
</div>
<div className={"flex items-start gap-space-sm bg-surface-card p-4 rounded-lg shadow-sm"}>
<span className={"material-symbols-outlined text-primary text-[22px] shrink-0"} aria-hidden={"true"}>{"electric_meter"}</span>
<div>
<span className={"font-headline-sm text-[15px] font-bold text-on-surface"}>{"Pre-dispatch Dielectric & Voltage Testing"}</span>
<p className={"font-body-sm text-body-sm text-on-surface-variant"}>{"Calibrated testing bench in Hlaing Tharyar ensures every inverter unit and cable drum operates within nominal tolerances."}</p>
</div>
</div>
</div>
</div>
<div className={"lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-space-md"}>
<div className={"h-64 rounded-xl overflow-hidden shadow-sm bg-surface-card"}>
<img className={"w-full h-full object-cover"} data-alt={"Electrical engineer inspecting solar inverter circuitry with digital multimeter testing equipment inside an engineering laboratory in Yangon Myanmar"} src={"/images/asset-007.jpg"} loading={"lazy"} decoding={"async"} />
</div>
<div className={"h-64 rounded-xl overflow-hidden shadow-sm bg-surface-card"}>
<img className={"w-full h-full object-cover"} data-alt={"Logistics forklifts moving high voltage electrical cable wooden drums inside a modern Yangon Myanmar distribution warehouse"} src={"/images/asset-009.jpg"} loading={"lazy"} decoding={"async"} />
</div>
<div className={"sm:col-span-2 h-56 rounded-xl overflow-hidden shadow-sm bg-surface-card relative"}>
<img className={"w-full h-full object-cover"} data-alt={"Panoramic perspective of an industrial rooftop solar installation in Yangon Myanmar with hundreds of photovoltaic modules under clear tropical sky"} src={"/images/asset-003.jpg"} loading={"lazy"} decoding={"async"} />
<div className={"absolute bottom-4 left-4 right-4 bg-surface/90 backdrop-blur-md px-4 py-2.5 rounded-lg flex items-center justify-between"}>
<span className={"font-body-sm text-body-sm font-semibold text-on-surface"}>{"Over 10,000+ kVA commissioned throughout Myanmar"}</span>
<span className={"font-label-mono-spec text-label-mono-spec text-primary font-bold uppercase"}>{"Commercial & Utility"}</span>
</div>
</div>
</div>
</div>
</section>

<section className={"w-full bg-surface-canvas py-space-xl"} id={"timeline"}>
<div className={"max-w-7xl mx-auto px-6 flex flex-col gap-space-xl"}>
<div className={"flex flex-col gap-space-xs text-center max-w-2xl mx-auto"}>
<span className={"font-badge-label text-badge-label uppercase text-primary font-bold tracking-wider"}>{"A Decade of Leadership"}</span>
<h2 className={"font-headline-lg text-headline-lg font-bold text-on-surface"}>{"\n          Our Journey & Infrastructure Milestones\n        "}</h2>
<p className={"font-body-md text-body-md text-on-surface-variant"}>{"\n          From supplying high-spec PC wire to power transmission lines in 2014 to championing Tier-1 solar independence in 2026.\n        "}</p>
</div>
<div className={"grid grid-cols-1 md:grid-cols-4 gap-space-md relative"}>

<div className={"bg-surface-card p-6 rounded-xl shadow-sm flex flex-col justify-between"}>
<div className={"flex flex-col gap-space-sm"}>
<span className={"font-headline-lg text-headline-lg font-black text-primary"}>{"2014"}</span>
<span className={"font-headline-sm text-headline-sm font-bold text-on-surface"}>{"Foundation in Yangon"}</span>
<p className={"font-body-sm text-body-sm text-on-surface-variant leading-relaxed"}>{"\n              Established as Golden Diamond Eagle Co., Ltd., importing and wholesaling heavy-duty High/Medium/Low Voltage power cables and PC Wire for national grid expansion and industrial complexes.\n            "}</p>
</div>
<div className={"mt-space-md pt-space-xs"}>
<span className={"inline-flex items-center gap-1 text-[11px] font-badge-label uppercase font-bold text-secondary"}>
<span className={"material-symbols-outlined text-[14px]"} aria-hidden={"true"}>{"domain"}</span>{" Industrial Foundation\n            "}</span>
</div>
</div>

<div className={"bg-surface-card p-6 rounded-xl shadow-sm flex flex-col justify-between"}>
<div className={"flex flex-col gap-space-sm"}>
<span className={"font-headline-lg text-headline-lg font-black text-tertiary"}>{"2018"}</span>
<span className={"font-headline-sm text-headline-sm font-bold text-on-surface"}>{"Renewable Solar Division"}</span>
<p className={"font-body-sm text-body-sm text-on-surface-variant leading-relaxed"}>{"\n              Formally established the GDE Renewable Energy Division. Secured sole authorized distributor status for Next Electric and Livfast hybrid solar inverters, addressing acute national power instability.\n            "}</p>
</div>
<div className={"mt-space-md pt-space-xs"}>
<span className={"inline-flex items-center gap-1 text-[11px] font-badge-label uppercase font-bold text-tertiary"}>
<span className={"material-symbols-outlined text-[14px]"} aria-hidden={"true"}>{"wb_sunny"}</span>{" Solar Division Launch\n            "}</span>
</div>
</div>

<div className={"bg-surface-card p-6 rounded-xl shadow-sm flex flex-col justify-between"}>
<div className={"flex flex-col gap-space-sm"}>
<span className={"font-headline-lg text-headline-lg font-black text-solar-amber"}>{"2021"}</span>
<span className={"font-headline-sm text-headline-sm font-bold text-on-surface"}>{"FMI City Logistics Hub"}</span>
<p className={"font-body-sm text-body-sm text-on-surface-variant leading-relaxed"}>{"\n              Commissioned the centralized 50,000+ sq.ft warehouse in Hlaing Tharyar. Introduced Tier-1 Lithium LiFePO4 battery modules and high-durability Tall Tubular batteries into Myanmar wholesale channels.\n            "}</p>
</div>
<div className={"mt-space-md pt-space-xs"}>
<span className={"inline-flex items-center gap-1 text-[11px] font-badge-label uppercase font-bold text-solar-amber"}>
<span className={"material-symbols-outlined text-[14px]"} aria-hidden={"true"}>{"battery_charging_full"}</span>{" LiFePO4 & Central Hub\n            "}</span>
</div>
</div>

<div className={"bg-surface-card p-6 rounded-xl shadow-sm flex flex-col justify-between"}>
<div className={"flex flex-col gap-space-sm"}>
<span className={"font-headline-lg text-headline-lg font-black text-tier-certified"}>{"2024–Now"}</span>
<span className={"font-headline-sm text-headline-sm font-bold text-on-surface"}>{"Turnkey Scale & AIKO"}</span>
<p className={"font-body-sm text-body-sm text-on-surface-variant leading-relaxed"}>{"\n              Formed direct partnership with AIKO Solar for N-Type ABC 675W Bifacial panels alongside Solis and GoodWe C&I inverters. Serving over 500 wholesale installers with guaranteed supply stability.\n            "}</p>
</div>
<div className={"mt-space-md pt-space-xs"}>
<span className={"inline-flex items-center gap-1 text-[11px] font-badge-label uppercase font-bold text-tier-certified"}>
<span className={"material-symbols-outlined text-[14px]"} aria-hidden={"true"}>{"workspace_premium"}</span>{" Turnkey National Supply\n            "}</span>
</div>
</div>
</div>
</div>
</section>

<section className={"w-full bg-surface-container-low py-space-xl"}>
<div className={"max-w-7xl mx-auto px-6 flex flex-col gap-space-xl"}>

<div className={"bg-surface-card rounded-xl p-8 sm:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center"}>
<div className={"lg:col-span-4 flex flex-col items-center sm:items-start gap-space-sm text-center sm:text-left"}>
<div className={"w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden shadow-md bg-surface-container"}>
<img className={"w-full h-full object-cover"} data-alt={"Portrait of an authoritative and visionary Myanmar corporate director in modern dark business suit smiling confidently against neutral enterprise background"} src={"/images/asset-008.jpg"} loading={"lazy"} decoding={"async"} />
</div>
<div className={"flex flex-col"}>
<span className={"font-headline-sm text-headline-sm font-bold text-on-surface"}>{"Managing Director"}</span>
<span className={"font-body-sm text-body-sm text-primary font-semibold"}>{"Executive Board of Directors"}</span>
<span className={"font-badge-label text-badge-label text-secondary uppercase pt-1"}>{"Golden Diamond Eagle Co., Ltd."}</span>
</div>
</div>
<div className={"lg:col-span-8 flex flex-col gap-space-md"}>
<div className={"flex items-center gap-2 text-solar-amber"}>
<span className={"material-symbols-outlined text-[32px]"} aria-hidden={"true"}>{"format_quote"}</span>
<span className={"font-badge-label text-badge-label uppercase text-on-surface-variant font-bold tracking-wider"}>{"Executive Message"}</span>
</div>
<h3 className={"font-headline-md text-headline-md font-bold text-on-surface leading-snug"}>{"\n            \"We do not merely sell electrical hardware. We construct the reliable lifeline that keeps Myanmar’s economy, industries, and families thriving.\"\n          "}</h3>
<p className={"font-body-md text-body-md text-on-surface-variant leading-relaxed"}>{"\n            In an era of volatile power grids, business success depends entirely on power certainty. Golden Diamond Eagle was established on the simple premise that Myanmar contractors, factories, and residences deserve uncompromising quality: cables that will not fail under load, inverters certified by international bodies, and solar modules that produce rated output year after year. Our commitment is unyielding authenticity, complete transparency, and steadfast Myanmar engineering partnership.\n          "}</p>
<div className={"pt-space-xs font-myanmar text-on-surface-variant text-body-sm"}>{"\n            မြန်မာနိုင်ငံ၏ လျှပ်စစ်စွမ်းအင်နှင့် ကုန်ထုတ်လုပ်မှုကဏ္ဍ အစဉ်မပြတ် တိုးတက်စေရေးအတွက် အရည်အသွေးအမြင့်ဆုံး စက်ပစ္စည်းများကိုသာ တင်သွင်းဖြန့်ချိလျက်ရှိပါသည်။\n          "}</div>
</div>
</div>

<div className={"grid grid-cols-1 md:grid-cols-3 gap-space-md"}>
<div className={"bg-surface-card p-6 rounded-xl shadow-sm flex flex-col gap-space-sm"}>
<div className={"w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary"}>
<span className={"material-symbols-outlined text-[24px]"} aria-hidden={"true"}>{"architecture"}</span>
</div>
<span className={"font-headline-sm text-[16px] font-bold text-on-surface"}>{"Technical Engineering Unit"}</span>
<p className={"font-body-sm text-body-sm text-on-surface-variant leading-relaxed"}>{"\n            Staffed by certified electrical engineers proficient in PVsyst simulations, single-line diagrams, voltage drop calculations, and inverter firmware diagnostics for commercial projects.\n          "}</p>
<span className={"font-label-mono-spec text-label-mono-spec text-primary font-semibold mt-auto pt-space-xs"}>{"Yangon SLD & RMA Division"}</span>
</div>
<div className={"bg-surface-card p-6 rounded-xl shadow-sm flex flex-col gap-space-sm"}>
<div className={"w-10 h-10 rounded-lg bg-tertiary/10 flex items-center justify-center text-tertiary"}>
<span className={"material-symbols-outlined text-[24px]"} aria-hidden={"true"}>{"local_shipping"}</span>
</div>
<span className={"font-headline-sm text-[16px] font-bold text-on-surface"}>{"Logistics & Dispatch Fleet"}</span>
<p className={"font-body-sm text-body-sm text-on-surface-variant leading-relaxed"}>{"\n            Managing express nationwide dispatches directly from Hlaing Tharyar, coordinating specialized heavy flatbed trailers for cable drums and protective crating for solar glass panels.\n          "}</p>
<span className={"font-label-mono-spec text-label-mono-spec text-tertiary font-semibold mt-auto pt-space-xs"}>{"14 States & Regions Coverage"}</span>
</div>
<div className={"bg-surface-card p-6 rounded-xl shadow-sm flex flex-col gap-space-sm"}>
<div className={"w-10 h-10 rounded-lg bg-solar-amber/10 flex items-center justify-center text-solar-amber"}>
<span className={"material-symbols-outlined text-[24px]"} aria-hidden={"true"}>{"handshake"}</span>
</div>
<span className={"font-headline-sm text-[16px] font-bold text-on-surface"}>{"B2B Account Management"}</span>
<p className={"font-body-sm text-body-sm text-on-surface-variant leading-relaxed"}>{"\n            Dedicated commercial procurement officers handling contractor tier discounts, wholesale volume booking, letters of credit, and direct Viber/Telegram engineering updates.\n          "}</p>
<span className={"font-label-mono-spec text-label-mono-spec text-solar-amber font-semibold mt-auto pt-space-xs"}>{"Dedicated Wholesale Desk"}</span>
</div>
</div>
</div>
</section>

<section className={"w-full bg-surface-canvas py-space-xl"} id={"certifications"}>
<div className={"max-w-7xl mx-auto px-6 flex flex-col gap-space-xl"}>
<div className={"flex flex-col gap-space-xs text-center max-w-3xl mx-auto"}>
<span className={"font-badge-label text-badge-label uppercase text-tier-certified font-bold tracking-wider"}>{"Zero Compromise on Compliance"}</span>
<h2 className={"font-headline-lg text-headline-lg font-bold text-on-surface"}>{"\n          Certified Quality & Regulatory Approvals\n        "}</h2>
<p className={"font-body-md text-body-md text-on-surface-variant"}>{"\n          Every cable meter and photovoltaic cell imported by Golden Diamond Eagle complies with international IEC, UL, and CE safety standards, verified for Myanmar climate durability.\n        "}</p>
</div>
<div className={"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-space-sm"}>
<div className={"bg-surface-card p-5 rounded-lg shadow-sm flex flex-col items-center text-center gap-space-xs"}>
<span className={"w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-primary font-black text-lg"}>{"ISO"}</span>
<span className={"font-headline-sm text-[13px] font-bold text-on-surface"}>{"ISO 9001:2015"}</span>
<span className={"font-body-sm text-[11px] text-on-surface-variant"}>{"Quality Management System Certified"}</span>
</div>
<div className={"bg-surface-card p-5 rounded-lg shadow-sm flex flex-col items-center text-center gap-space-xs"}>
<span className={"w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-tier-certified font-black text-lg"}>{"IEC"}</span>
<span className={"font-headline-sm text-[13px] font-bold text-on-surface"}>{"IEC 61215 / 61730"}</span>
<span className={"font-body-sm text-[11px] text-on-surface-variant"}>{"PV Design Qualification & Safety Class A"}</span>
</div>
<div className={"bg-surface-card p-5 rounded-lg shadow-sm flex flex-col items-center text-center gap-space-xs"}>
<span className={"w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-tertiary font-black text-lg"}>{"LFP"}</span>
<span className={"font-headline-sm text-[13px] font-bold text-on-surface"}>{"IEC 62619"}</span>
<span className={"font-body-sm text-[11px] text-on-surface-variant"}>{"Industrial Lithium Battery Safety Benchmark"}</span>
</div>
<div className={"bg-surface-card p-5 rounded-lg shadow-sm flex flex-col items-center text-center gap-space-xs"}>
<span className={"w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-solar-amber font-black text-lg"}>{"CE"}</span>
<span className={"font-headline-sm text-[13px] font-bold text-on-surface"}>{"CE Marking"}</span>
<span className={"font-body-sm text-[11px] text-on-surface-variant"}>{"European Conformity for Inverters & Switches"}</span>
</div>
<div className={"bg-surface-card p-5 rounded-lg shadow-sm flex flex-col items-center text-center gap-space-xs"}>
<span className={"w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-primary font-black text-lg"}>{"UL"}</span>
<span className={"font-headline-sm text-[13px] font-bold text-on-surface"}>{"UL 1741 Standard"}</span>
<span className={"font-body-sm text-[11px] text-on-surface-variant"}>{"Inverters, Converters & Interconnection"}</span>
</div>
<div className={"bg-surface-card p-5 rounded-lg shadow-sm flex flex-col items-center text-center gap-space-xs"}>
<span className={"w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-secondary font-black text-lg"}>{"MOEE"}</span>
<span className={"font-headline-sm text-[13px] font-bold text-on-surface"}>{"Ministry MOEE Compliant"}</span>
<span className={"font-body-sm text-[11px] text-on-surface-variant"}>{"Myanmar Grid Interconnection Code Ready"}</span>
</div>
</div>
</div>
</section>

<section className={"w-full bg-surface-container py-space-xl"}>
<div className={"max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center"}>
<div className={"lg:col-span-6 flex flex-col gap-space-md"}>
<span className={"font-badge-label text-badge-label uppercase text-primary font-bold tracking-wider"}>{"Hlaing Tharyar Headquarters"}</span>
<h2 className={"font-headline-lg text-headline-lg font-bold text-on-surface"}>{"\n          Visit Our Yangon Office & Warehouse\n        "}</h2>
<p className={"font-body-md text-body-md text-on-surface-variant leading-relaxed"}>{"\n          Our engineering hub and showroom are situated right in FMI City, Hlaing Tharyar Township. Clients and contractors are welcome to inspect inverters, examine cable cross-sections, and observe live battery testing before purchase.\n        "}</p>
<div className={"flex flex-col gap-space-sm pt-space-xs"}>
<div className={"flex items-start gap-space-sm"}>
<span className={"material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5"} aria-hidden={"true"}>{"location_on"}</span>
<div className={"flex flex-col"}>
<span className={"font-headline-sm text-[15px] font-bold text-on-surface"}>{"Corporate Head Office & Depot:"}</span>
<span className={"font-body-sm text-body-sm text-on-surface-variant"}>{"E-32, Sagawah St (3), FMI City, Hlaing Tharyar Township, Yangon, Myanmar"}</span>
</div>
</div>
<div className={"flex items-center gap-space-sm"}>
<span className={"material-symbols-outlined text-primary text-[20px] shrink-0"} aria-hidden={"true"}>{"schedule"}</span>
<span className={"font-body-sm text-body-sm text-on-surface-variant"}>{"Monday – Saturday: 8:30 AM – 5:30 PM (Daily Dispatch Active)"}</span>
</div>
<div className={"flex items-center gap-space-sm"}>
<span className={"material-symbols-outlined text-primary text-[20px] shrink-0"} aria-hidden={"true"}>{"call"}</span>
<span className={"font-body-sm text-body-sm text-on-surface font-semibold"}>{"(+959) 957933180 / (+959) 952706118"}</span>
</div>
</div>
</div>
<div className={"lg:col-span-6"}>
<div className={"w-full h-80 rounded-xl overflow-hidden shadow-md bg-surface-card flex flex-col justify-end p-6 relative"} data-location={"FMI City, Hlaing Tharyar, Yangon, Myanmar"} style={{}}>
<div className={"absolute inset-0 bg-surface-container-high/40 flex items-center justify-center"}>
<div className={"bg-surface/90 backdrop-blur-md px-6 py-4 rounded-xl shadow-lg flex items-center gap-space-sm"}>
<span className={"material-symbols-outlined text-primary text-[32px]"} aria-hidden={"true"}>{"apartment"}</span>
<div>
<span className={"font-headline-sm text-[16px] font-bold text-on-surface"}>{"Golden Diamond Eagle Co., Ltd."}</span>
<span className={"font-body-sm text-body-sm text-secondary block"}>{"FMI City Logistics & Wholesale Center"}</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className={"w-full bg-primary text-on-primary py-space-xl"}>
<div className={"max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center"}>
<div className={"lg:col-span-8 flex flex-col gap-space-xs"}>
<span className={"font-badge-label text-badge-label uppercase text-solar-amber font-bold tracking-wider"}>{"Enterprise Wholesale Partnership"}</span>
<h2 className={"font-display-hero text-headline-lg sm:text-display-hero font-extrabold text-on-primary"}>{"\n          Partner with Golden Diamond Eagle Today\n        "}</h2>
<p className={"font-body-lg text-body-lg text-surface-container-high max-w-2xl leading-relaxed"}>{"\n          Request volume wholesale price sheets, project BOQ pricing, or schedule an SLD consultation with our senior engineers. Get instantaneous quotes for Tier-1 solar, inverters, and heavy power cables.\n        "}</p>
<span className={"font-myanmar text-body-sm text-surface-container-highest mt-1"}>{"\n          ယုံကြည်စိတ်ချရဆုံး လျှပ်စစ်နှင့် ဆိုလာလက်တွဲဖော် - လက်လီ/လက်ကား အထူးဈေးနှုန်းများအတွက် အမြန်ဆုံး ဆက်သွယ်လိုက်ပါ။\n        "}</span>
</div>
<div className={"lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-space-sm w-full"}>
<a className={"inline-flex items-center justify-center gap-space-xs bg-[#7360F2] hover:bg-[#624ee8] text-white px-6 py-3.5 rounded-lg font-body-md text-body-md font-bold shadow-md transition-colors w-full"} href={"https://invite.viber.com/?g2=AQBL3Uw94Ep4qE7tS7yPEErHa5w1BRUcuxQHFfsZQLah3bkPINFLs3iUY9KGOXNJ"} rel={"noopener noreferrer"} target={"_blank"}>
<span className={"material-symbols-outlined text-[20px]"} aria-hidden={"true"}>{"forum"}</span>
<span>{"Official Viber Channel"}</span>
</a>
<a className={"inline-flex items-center justify-center gap-space-xs bg-[#0084FF] hover:bg-[#0074e0] text-white px-6 py-3.5 rounded-lg font-body-md text-body-md font-bold shadow-md transition-colors w-full"} href={"https://www.facebook.com/messages/t/1123518094416164"} rel={"noopener noreferrer"} target={"_blank"}>
<span className={"material-symbols-outlined text-[20px]"} aria-hidden={"true"}>{"chat"}</span>
<span>{"Messenger Instant Inquiry"}</span>
</a>
<a className={"inline-flex items-center justify-center gap-space-xs bg-surface-card text-primary hover:bg-surface-container-lowest px-6 py-3.5 rounded-lg font-body-md text-body-md font-bold shadow-md transition-colors w-full"} href={"tel:+959957933180"}>
<span className={"material-symbols-outlined text-[20px]"} aria-hidden={"true"}>{"call"}</span>
<span>{"Call Sales Desk: (+959) 957933180"}</span>
</a>
</div>
</div>
</section>
</div></main>
);
}
