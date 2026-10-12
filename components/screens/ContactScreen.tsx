export default function ContactScreen() {
return (
<main className={"w-full pt-20 bg-surface-canvas"}><div className={"flex flex-col w-full"}>
<div className={"w-full bg-surface-container-low py-space-sm"}>
<div className={"max-w-7xl mx-auto px-6 flex items-center justify-between text-body-sm"}>
<nav className={"flex items-center gap-space-xs text-on-surface-variant font-label-mono-spec text-label-mono-spec"}>
<a className={"hover:text-primary transition-colors flex items-center gap-1"} href={"/"}>
<span className={"material-symbols-outlined text-[15px]"} aria-hidden={"true"}>{"home"}</span>
<span>{"Home"}</span>
</a>
<span className={"text-outline-variant"}>{"/"}</span>
<span className={"text-primary font-bold"}>{"Contact Us & Logistics Hub"}</span>
</nav>
<div className={"hidden md:flex items-center gap-space-sm text-tier-certified font-label-mono-spec text-label-mono-spec"}>
<span className={"inline-block w-2 h-2 rounded-full bg-tier-certified animate-pulse"}></span>
<span>{"Central Warehouse Open · Yangon Dispatch Active"}</span>
</div>
</div>
</div>
<section className={"w-full py-space-xl bg-gradient-to-b from-surface-container-low via-surface-canvas to-surface-canvas"}>
<div className={"max-w-7xl mx-auto px-6"}>
<div className={"flex flex-col lg:flex-row lg:items-end justify-between gap-space-lg mb-space-xl"}>
<div className={"max-w-3xl flex flex-col gap-space-xs"}>
<div className={"inline-flex items-center gap-space-xs px-2.5 py-1 rounded bg-secondary-container text-on-secondary-fixed font-badge-label text-badge-label uppercase tracking-wider self-start font-bold"}>
<span className={"material-symbols-outlined text-[14px] text-primary"} aria-hidden={"true"}>{"hub"}</span>{"\n            Official Wholesale & Logistics Center\n          "}</div>
<h1 className={"font-display-hero text-display-hero text-on-surface tracking-tight"}>{"\n            Get in Touch with Golden Diamond Eagle\n          "}</h1>
<p className={"font-headline-sm text-headline-sm text-primary font-medium"}>{"\n            ကျွန်ုပ်တို့ထံသို့ တိုက်ရိုက်ဆက်သွယ်စုံစမ်းမေးမြန်းနိုင်ပါသည်\n          "}</p>
<p className={"font-body-lg text-body-lg text-on-surface-variant mt-1"}>{"\n            Engineered distribution channels for EPC contractors, certified solar installers, wholesale regional hardware dealers, manufacturing plants, and electrical tender engineers across Myanmar.\n          "}</p>
</div>
<div className={"flex flex-col sm:flex-row gap-space-sm shrink-0"}>
<a className={"inline-flex items-center justify-center gap-space-xs px-5 py-3 rounded-xl bg-primary text-on-primary font-body-md text-body-md font-semibold shadow-md hover:bg-primary-container transition-all"} href={"tel:+959957933180"}>
<span className={"material-symbols-outlined text-[18px]"} aria-hidden={"true"}>{"phone_in_talk"}</span>
<span>{"Call (+959) 957933180"}</span>
</a>
<a className={"inline-flex items-center justify-center gap-space-xs px-5 py-3 rounded-xl bg-[#7360F2] text-white font-body-md text-body-md font-semibold shadow-md hover:opacity-95 transition-opacity"} href={"https://invite.viber.com/?g2=AQBL3Uw94Ep4qE7tS7yPEErHa5w1BRUcuxQHFfsZQLah3bkPINFLs3iUY9KGOXNJ"} rel={"noopener noreferrer"} target={"_blank"}>
<span className={"material-symbols-outlined text-[18px]"} aria-hidden={"true"}>{"forum"}</span>
<span>{"Viber Procurement Desk"}</span>
</a>
</div>
</div>
<div className={"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-space-md"}>
<div className={"bg-surface-card p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"}>
<div className={"flex flex-col gap-space-xs"}>
<div className={"w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-primary mb-2"}>
<span className={"material-symbols-outlined text-[26px]"} aria-hidden={"true"}>{"warehouse"}</span>
</div>
<div className={"font-label-mono-spec text-label-mono-spec uppercase text-secondary font-bold tracking-wider"}>{"Yangon Headquarters"}</div>
<h3 className={"font-headline-sm text-headline-sm text-on-surface font-bold"}>{"FMI Central Warehouse"}</h3>
<p className={"font-body-md text-body-md text-on-surface-variant"}>{"\n              E-32, Sagawah St (3), FMI City, Hlaing Tharyar Township, Yangon, Myanmar.\n            "}</p>
</div>
<div className={"mt-4 pt-3 bg-surface-container-low rounded-lg px-3 py-2 flex items-center justify-between text-body-sm text-on-surface-variant font-medium"}>
<span>{"Mon – Sat: 8:30 AM – 5:30 PM"}</span>
<span className={"text-tier-certified font-bold"}>{"Open"}</span>
</div>
</div>
<div className={"bg-surface-card p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"}>
<div className={"flex flex-col gap-space-xs"}>
<div className={"w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-primary mb-2"}>
<span className={"material-symbols-outlined text-[26px]"} aria-hidden={"true"}>{"phone_enabled"}</span>
</div>
<div className={"font-label-mono-spec text-label-mono-spec uppercase text-secondary font-bold tracking-wider"}>{"Fast Line Dispatch"}</div>
<h3 className={"font-headline-sm text-headline-sm text-on-surface font-bold"}>{"Direct Phone Hotlines"}</h3>
<div className={"flex flex-col gap-1 text-on-surface font-headline-sm text-[16px] font-bold"}>
<a className={"hover:text-primary transition-colors flex items-center gap-1.5"} href={"tel:+959957933180"}>
<span className={"material-symbols-outlined text-[16px] text-primary"} aria-hidden={"true"}>{"call"}</span>{"\n                (+959) 957933180\n              "}</a>
<a className={"hover:text-primary transition-colors flex items-center gap-1.5"} href={"tel:+959952706118"}>
<span className={"material-symbols-outlined text-[16px] text-primary"} aria-hidden={"true"}>{"call"}</span>{"\n                (+959) 952706118\n              "}</a>
</div>
<p className={"font-body-sm text-body-sm text-on-surface-variant"}>{"Immediate inventory balance, sizing queries & container loading schedules."}</p>
</div>
<div className={"mt-4 pt-3 bg-surface-container-low rounded-lg px-3 py-2 flex items-center text-body-sm text-primary font-semibold"}>
<span className={"material-symbols-outlined text-[16px] mr-1"} aria-hidden={"true"}>{"flash_on"}</span>{"\n            Instant Tele-consultation\n          "}</div>
</div>
<div className={"bg-surface-card p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"}>
<div className={"flex flex-col gap-space-xs"}>
<div className={"w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-tertiary mb-2"}>
<span className={"material-symbols-outlined text-[26px]"} aria-hidden={"true"}>{"drafts"}</span>
</div>
<div className={"font-label-mono-spec text-label-mono-spec uppercase text-secondary font-bold tracking-wider"}>{"Official Tenders & RFQs"}</div>
<h3 className={"font-headline-sm text-headline-sm text-on-surface font-bold"}>{"Official Email"}</h3>
<a className={"font-body-md text-body-md text-primary font-bold hover:underline break-all"} href={"mailto:goldendiamondeagle@gmail.com"}>{"\n              goldendiamondeagle@gmail.com\n            "}</a>
<p className={"font-body-sm text-body-sm text-on-surface-variant"}>{"Formal stamped proforma invoices, BOQ verification, and technical engineering data sheets."}</p>
</div>
<div className={"mt-4 pt-3 bg-secondary-container rounded-lg px-3 py-2 flex items-center justify-between text-body-sm text-on-secondary-fixed font-semibold"}>
<span>{"SLA Response Window"}</span>
<span className={"text-primary font-bold"}>{"≤ 2 Hours"}</span>
</div>
</div>
<div className={"bg-surface-card p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"}>
<div className={"flex flex-col gap-space-xs"}>
<div className={"w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-solar-amber mb-2"}>
<span className={"material-symbols-outlined text-[26px]"} aria-hidden={"true"}>{"connect_without_contact"}</span>
</div>
<div className={"font-label-mono-spec text-label-mono-spec uppercase text-secondary font-bold tracking-wider"}>{"Direct Communities"}</div>
<h3 className={"font-headline-sm text-headline-sm text-on-surface font-bold"}>{"Instant B2B Channels"}</h3>
<div className={"grid grid-cols-3 gap-2"}>
<a className={"flex flex-col items-center justify-center p-2 rounded bg-surface-container hover:bg-surface-container-high transition-colors text-center"} href={"https://invite.viber.com/?g2=AQBL3Uw94Ep4qE7tS7yPEErHa5w1BRUcuxQHFfsZQLah3bkPINFLs3iUY9KGOXNJ"} rel={"noopener noreferrer"} target={"_blank"}>
<span className={"material-symbols-outlined text-[20px] text-[#7360F2]"} aria-hidden={"true"}>{"chat"}</span>
<span className={"font-badge-label text-[10px] font-bold mt-1"}>{"Viber"}</span>
</a>
<a className={"flex flex-col items-center justify-center p-2 rounded bg-surface-container hover:bg-surface-container-high transition-colors text-center"} href={"https://www.facebook.com/messages/t/1123518094416164"} rel={"noopener noreferrer"} target={"_blank"}>
<span className={"material-symbols-outlined text-[20px] text-[#0084FF]"} aria-hidden={"true"}>{"forum"}</span>
<span className={"font-badge-label text-[10px] font-bold mt-1"}>{"Messenger"}</span>
</a>
<a className={"flex flex-col items-center justify-center p-2 rounded bg-surface-container hover:bg-surface-container-high transition-colors text-center"} href={"https://www.tiktok.com/@goldendiamondeagle"} rel={"noopener noreferrer"} target={"_blank"}>
<span className={"material-symbols-outlined text-[20px] text-on-surface"} aria-hidden={"true"}>{"videocam"}</span>
<span className={"font-badge-label text-[10px] font-bold mt-1"}>{"TikTok"}</span>
</a>
</div>
<p className={"font-body-sm text-body-sm text-on-surface-variant"}>{"Daily wholesale arrivals & technical live showcases."}</p>
</div>
<div className={"mt-4 pt-3 bg-surface-container-low rounded-lg px-3 py-2 flex items-center text-body-sm text-secondary font-medium"}>
<span className={"material-symbols-outlined text-[15px] mr-1 text-solar-amber"} aria-hidden={"true"}>{"stars"}</span>{"\n            Over 10,000+ Trade Followers\n          "}</div>
</div>
</div>
</div>
</section>
<section className={"w-full py-space-xl bg-surface-canvas"}>
<div className={"max-w-7xl mx-auto px-6"}>
<div className={"grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start"}>
<div className={"lg:col-span-7 bg-surface-card p-6 md:p-8 rounded-xl shadow-md"}>
<div className={"flex items-center justify-between pb-space-sm mb-space-md bg-surface-container-low -mx-6 md:-mx-8 -mt-6 md:-mt-8 p-6 md:p-8 rounded-t-xl"}>
<div>
<span className={"font-badge-label text-badge-label uppercase text-primary font-bold tracking-wider"}>{"Fast Engineering RFQ"}</span>
<h2 className={"font-headline-lg text-headline-lg text-on-surface font-extrabold"}>{"Send Official Inquiry or BOQ"}</h2>
</div>
<div className={"hidden sm:flex flex-col items-end text-right"}>
<span className={"font-label-mono-spec text-label-mono-spec font-bold text-tier-certified flex items-center gap-1"}>
<span className={"material-symbols-outlined text-[15px]"} aria-hidden={"true"}>{"verified_user"}</span>{" 2-Hour Response\n              "}</span>
<span className={"font-body-sm text-body-sm text-on-surface-variant"}>{"Technical Support Active"}</span>
</div>
</div>
<form className={"space-y-space-md"} id={"gde-rfq-form"}>
<div className={"grid grid-cols-1 sm:grid-cols-2 gap-space-md"}>
<div className={"flex flex-col gap-1.5"}>
<label className={"font-body-md text-body-md font-semibold text-on-surface"} htmlFor={"contact-name"}>{"Full Name "}<span className={"text-error"}>{"*"}</span></label>
<input className={"w-full h-11 px-3.5 rounded-lg bg-surface-container-low text-on-surface placeholder:text-outline font-body-md text-body-md focus:bg-surface-card focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"} id={"contact-name"} placeholder={"U Thant Zin Oo"} required type={"text"} name={"contact-name"} />
</div>
<div className={"flex flex-col gap-1.5"}>
<label className={"font-body-md text-body-md font-semibold text-on-surface"} htmlFor={"company-name"}>{"Company / Business Name"}</label>
<input className={"w-full h-11 px-3.5 rounded-lg bg-surface-container-low text-on-surface placeholder:text-outline font-body-md text-body-md focus:bg-surface-card focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"} id={"company-name"} placeholder={"e.g. Apex Electrical Contracting Co."} type={"text"} name={"company-name"} />
</div>
</div>
<div className={"grid grid-cols-1 sm:grid-cols-2 gap-space-md"}>
<div className={"flex flex-col gap-1.5"}>
<label className={"font-body-md text-body-md font-semibold text-on-surface"} htmlFor={"phone-number"}>{"Phone Number "}<span className={"text-error"}>{"*"}</span></label>
<div className={"relative flex items-center"}>
<span className={"absolute left-3 font-label-mono-spec text-label-mono-spec font-bold text-on-surface-variant"}>{"+95"}</span>
<input className={"w-full h-11 pl-12 pr-3.5 rounded-lg bg-surface-container-low text-on-surface placeholder:text-outline font-body-md text-body-md focus:bg-surface-card focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"} id={"phone-number"} placeholder={"9 957933180"} required type={"tel"} name={"phone-number"} />
</div>
</div>
<div className={"flex flex-col gap-1.5"}>
<label className={"font-body-md text-body-md font-semibold text-on-surface"} htmlFor={"email-address"}>{"Email Address"}</label>
<input className={"w-full h-11 px-3.5 rounded-lg bg-surface-container-low text-on-surface placeholder:text-outline font-body-md text-body-md focus:bg-surface-card focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"} id={"email-address"} placeholder={"procurement@company.com"} type={"email"} name={"email-address"} />
</div>
</div>
<div className={"grid grid-cols-1 sm:grid-cols-2 gap-space-md"}>
<div className={"flex flex-col gap-1.5"}>
<label className={"font-body-md text-body-md font-semibold text-on-surface"} htmlFor={"target-city"}>{"Delivery City / Division "}<span className={"text-error"}>{"*"}</span></label>
<select className={"w-full h-11 px-3.5 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md focus:bg-surface-card focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"} id={"target-city"} required name={"target-city"} defaultValue={""}>
<option disabled value={""}>{"Select Target Destination"}</option>
<option value={"yangon"}>{"Yangon Division (Central Hub Delivery / Pickup)"}</option>
<option value={"mandalay"}>{"Mandalay Division (Express Highway Gate)"}</option>
<option value={"shan_south"}>{"Shan State South (Taunggyi / Kalaw / Aungban)"}</option>
<option value={"shan_north"}>{"Shan State North (Lashio / Muse)"}</option>
<option value={"naypyitaw"}>{"Naypyitaw Union Territory"}</option>
<option value={"bago"}>{"Bago Division (Pyay / Taungoo)"}</option>
<option value={"ayeyarwady"}>{"Ayeyarwady Division (Pathein / Hinthada)"}</option>
<option value={"mon_kayin"}>{"Mon & Kayin (Mawlamyine / Hpa-An)"}</option>
<option value={"magway"}>{"Magway Division (Pakokku / Chauk)"}</option>
<option value={"sagaing"}>{"Sagaing Division (Monywa / Shwebo)"}</option>
</select>
</div>
<div className={"flex flex-col gap-1.5"}>
<label className={"font-body-md text-body-md font-semibold text-on-surface"} htmlFor={"interest-category"}>{"Equipment Category "}<span className={"text-error"}>{"*"}</span></label>
<select className={"w-full h-11 px-3.5 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md focus:bg-surface-card focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"} id={"interest-category"} required name={"interest-category"} defaultValue={""}>
<option disabled value={""}>{"Select Primary Category"}</option>
<option value={"turnkey_packages"}>{"Turnkey Solar Packages (3kW, 5kW, 8kW, 15kW+)"}</option>
<option value={"inverters"}>{"Next Electric & Livfast Inverters (Off-Grid/Hybrid)"}</option>
<option value={"batteries"}>{"Lithium LiFePO4 & Tall Tubular Batteries"}</option>
<option value={"tier1_panels"}>{"Tier-1 Solar PV Modules (AIKO / Solis / GoodWe)"}</option>
<option value={"cables"}>{"HV / MV / LV Power Cables & PV Solar Cables"}</option>
<option value={"fittings_mounting"}>{"Solar Rail Mounting, MC4 & Beny DC Protection"}</option>
<option value={"pc_wire"}>{"PC Wire & Pre-stressed Infrastructure Wire"}</option>
</select>
</div>
</div>
<div className={"flex flex-col gap-1.5"}>
<label className={"font-body-md text-body-md font-semibold text-on-surface"} htmlFor={"inquiry-message"}>{"Quotation Specs / Bill of Quantities (BOQ) Note "}<span className={"text-error"}>{"*"}</span></label>
<textarea className={"w-full p-3.5 rounded-lg bg-surface-container-low text-on-surface placeholder:text-outline font-body-md text-body-md focus:bg-surface-card focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"} id={"inquiry-message"} placeholder={"Specify system capacity, required quantity of panels/inverters, cable cross-section (sq-mm), or specific tender requirements..."} required rows={4} name={"inquiry-message"}></textarea>
</div>
<div className={"flex flex-col gap-1.5"}>
<label className={"font-body-md text-body-md font-semibold text-on-surface"}>{"Attach BOQ Document / Single-Line Diagram (SLD)"}</label>
<div className={"flex items-center justify-center w-full px-6 py-4 rounded-lg bg-surface-container-low cursor-pointer hover:bg-surface-container transition-colors"}>
<label className={"flex flex-col items-center cursor-pointer w-full"}>
<span className={"material-symbols-outlined text-[28px] text-primary"} aria-hidden={"true"}>{"upload_file"}</span>
<span className={"font-body-md text-body-md text-on-surface font-medium mt-1"}>{"Choose BOQ document for your inquiry"}</span>
<span className={"font-body-sm text-body-sm text-on-surface-variant"}>{"Add this file manually in your email app; no upload occurs here."}</span>
<input accept={".pdf,.xls,.xlsx,.dwg,.jpg,.png"} className={"sr-only"} type={"file"} aria-label={"Choose BOQ document"} data-action={"attachment"} />
</label>
</div>
</div>
<div className={"hidden p-4 rounded-lg bg-surface-container text-on-surface font-body-md text-body-md"} id={"form-feedback"} role={"status"}>{"Your inquiry is ready. Open the email draft below, attach your BOQ if needed, then send it from your email app."}</div>
<div className={"pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-space-md"}>
<button className={"inline-flex items-center justify-center gap-space-xs px-8 py-3.5 rounded-xl bg-primary text-on-primary font-body-md text-body-md font-bold shadow-md hover:bg-primary-container transition-colors cursor-pointer"} type={"submit"}>
<span className={"material-symbols-outlined text-[20px]"} aria-hidden={"true"}>{"send"}</span>
<span>{"Prepare Email Inquiry / အီးမေးလ်ပြင်ရန်"}</span>
</button>
<div className={"flex items-center gap-1.5 text-body-sm text-on-surface-variant font-medium"}>
<span className={"material-symbols-outlined text-[16px] text-solar-amber"} aria-hidden={"true"}>{"schedule"}</span>
<span>{"Replies within 2 hours during trade hours"}</span>
</div>
</div>
</form>
</div>
<div className={"lg:col-span-5 flex flex-col gap-space-md"}>
<div className={"bg-surface-card p-6 rounded-xl shadow-md"}>
<div className={"flex items-center gap-space-xs mb-space-md"}>
<span className={"material-symbols-outlined text-[22px] text-primary"} aria-hidden={"true"}>{"contact_phone"}</span>
<h2 className={"font-headline-md text-headline-md text-on-surface font-bold"}>{"Department Directory"}</h2>
</div>
<p className={"font-body-sm text-body-sm text-on-surface-variant mb-space-md"}>{"\n              Route your technical or logistics query directly to our dedicated departmental specialists in Yangon.\n            "}</p>
<div className={"flex flex-col gap-space-sm"}>
<div className={"p-4 rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors flex items-start gap-space-sm"}>
<div className={"w-10 h-10 rounded-lg bg-surface-card flex items-center justify-center text-primary shrink-0 shadow-sm"}>
<span className={"material-symbols-outlined text-[20px]"} aria-hidden={"true"}>{"store"}</span>
</div>
<div className={"flex-1 min-w-0"}>
<span className={"font-label-mono-spec text-label-mono-spec text-secondary uppercase font-bold"}>{"Commercial Accounts"}</span>
<h4 className={"font-headline-sm text-[16px] font-bold text-on-surface"}>{"Wholesale & Bulk Distribution Desk"}</h4>
<p className={"font-body-sm text-body-sm text-on-surface-variant mt-0.5"}>{"Dealer tier pricing, container lots & project bidding."}</p>
<div className={"mt-2 flex items-center gap-space-md font-label-mono-spec text-label-mono-spec font-bold text-primary"}>
<a className={"hover:underline flex items-center gap-1"} href={"tel:+959957933180"}>
<span className={"material-symbols-outlined text-[14px]"} aria-hidden={"true"}>{"call"}</span>{" (+959) 957933180\n                    "}</a>
<span className={"text-outline-variant"}>{"·"}</span>
<a className={"text-[#7360F2] hover:underline"} href={"https://invite.viber.com/?g2=AQBL3Uw94Ep4qE7tS7yPEErHa5w1BRUcuxQHFfsZQLah3bkPINFLs3iUY9KGOXNJ"}>{"Viber Desk"}</a>
</div>
</div>
</div>
<div className={"p-4 rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors flex items-start gap-space-sm"}>
<div className={"w-10 h-10 rounded-lg bg-surface-card flex items-center justify-center text-tertiary shrink-0 shadow-sm"}>
<span className={"material-symbols-outlined text-[20px]"} aria-hidden={"true"}>{"memory"}</span>
</div>
<div className={"flex-1 min-w-0"}>
<span className={"font-label-mono-spec text-label-mono-spec text-secondary uppercase font-bold"}>{"Engineering Operations"}</span>
<h4 className={"font-headline-sm text-[16px] font-bold text-on-surface"}>{"System Sizing & SLD Verification"}</h4>
<p className={"font-body-sm text-body-sm text-on-surface-variant mt-0.5"}>{"Technical schematics, inverter string sizing, LiFePO4 battery BMS pairing."}</p>
<div className={"mt-2 flex items-center gap-space-md font-label-mono-spec text-label-mono-spec font-bold text-primary"}>
<a className={"hover:underline flex items-center gap-1"} href={"tel:+959952706118"}>
<span className={"material-symbols-outlined text-[14px]"} aria-hidden={"true"}>{"call"}</span>{" (+959) 952706118\n                    "}</a>
</div>
</div>
</div>
<div className={"p-4 rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors flex items-start gap-space-sm"}>
<div className={"w-10 h-10 rounded-lg bg-surface-card flex items-center justify-center text-solar-amber shrink-0 shadow-sm"}>
<span className={"material-symbols-outlined text-[20px]"} aria-hidden={"true"}>{"local_shipping"}</span>
</div>
<div className={"flex-1 min-w-0"}>
<span className={"font-label-mono-spec text-label-mono-spec text-secondary uppercase font-bold"}>{"Logistics & Yard"}</span>
<h4 className={"font-headline-sm text-[16px] font-bold text-on-surface"}>{"FMI City Pickup & Truck Dispatch"}</h4>
<p className={"font-body-sm text-body-sm text-on-surface-variant mt-0.5"}>{"Truck dock bay scheduling, driver gate pass, palletizing & forklift ops."}</p>
<div className={"mt-2 flex items-center gap-space-md font-label-mono-spec text-label-mono-spec font-bold text-primary"}>
<a className={"hover:underline flex items-center gap-1"} href={"tel:+959957933180"}>
<span className={"material-symbols-outlined text-[14px]"} aria-hidden={"true"}>{"call"}</span>{" (+959) 957933180 (ext. Warehouse)\n                    "}</a>
</div>
</div>
</div>
<div className={"p-4 rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors flex items-start gap-space-sm"}>
<div className={"w-10 h-10 rounded-lg bg-surface-card flex items-center justify-center text-tier-certified shrink-0 shadow-sm"}>
<span className={"material-symbols-outlined text-[20px]"} aria-hidden={"true"}>{"verified"}</span>
</div>
<div className={"flex-1 min-w-0"}>
<span className={"font-label-mono-spec text-label-mono-spec text-secondary uppercase font-bold"}>{"After-Sales & Warranty"}</span>
<h4 className={"font-headline-sm text-[16px] font-bold text-on-surface"}>{"Technical RMA & Warranty Service"}</h4>
<p className={"font-body-sm text-body-sm text-on-surface-variant mt-0.5"}>{"Authorized service claims for Next Electric, Livfast, and Tier-1 hardware."}</p>
<div className={"mt-2 flex items-center gap-space-md font-label-mono-spec text-label-mono-spec font-bold text-primary"}>
<a className={"hover:underline flex items-center gap-1"} href={"mailto:support@goldendiamondeagle.com"}>
<span className={"material-symbols-outlined text-[14px]"} aria-hidden={"true"}>{"mail"}</span>{" support@goldendiamondeagle.com\n                    "}</a>
</div>
</div>
</div>
</div>
</div>
<div className={"p-6 rounded-xl bg-secondary-container text-on-secondary-fixed shadow-md relative overflow-hidden"}>
<div className={"relative z-10 flex flex-col gap-space-xs"}>
<span className={"font-badge-label text-badge-label font-bold text-primary uppercase tracking-wider"}>{"Fast Turnaround Priority"}</span>
<h3 className={"font-headline-md text-headline-md font-extrabold text-on-surface"}>{"Govt & Industrial Tender Emergency?"}</h3>
<p className={"font-body-sm text-body-sm text-on-surface-variant"}>{"\n                Need proforma invoice confirmation within 30 minutes for urgent national infrastructure bids? Reach out to our executive duty officer directly.\n              "}</p>
<div className={"mt-2 flex flex-wrap items-center gap-space-sm"}>
<a className={"inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-primary text-on-primary font-body-sm text-body-sm font-bold shadow hover:bg-primary-container transition-colors"} href={"tel:+959957933180"}>
<span className={"material-symbols-outlined text-[16px]"} aria-hidden={"true"}>{"call"}</span>{"\n                  Direct Tender Hotline\n                "}</a>
<a className={"inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-surface-card text-on-surface font-body-sm text-body-sm font-bold shadow-sm hover:bg-surface-container transition-colors"} href={"https://invite.viber.com/?g2=AQBL3Uw94Ep4qE7tS7yPEErHa5w1BRUcuxQHFfsZQLah3bkPINFLs3iUY9KGOXNJ"}>
<span className={"material-symbols-outlined text-[16px] text-[#7360F2]"} aria-hidden={"true"}>{"forum"}</span>{"\n                  Viber 24/7 Channel\n                "}</a>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className={"w-full py-space-xl bg-surface-container-low"}>
<div className={"max-w-7xl mx-auto px-6"}>
<div className={"flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-lg"}>
<div className={"max-w-2xl"}>
<div className={"inline-flex items-center gap-1 px-2.5 py-1 rounded bg-surface-card text-primary font-badge-label text-badge-label uppercase tracking-wider font-bold mb-2"}>
<span className={"material-symbols-outlined text-[14px]"} aria-hidden={"true"}>{"local_shipping"}</span>{"\n            Freight & Cargo Distribution\n          "}</div>
<h2 className={"font-display-hero-mobile md:font-display-hero text-display-hero-mobile md:text-display-hero text-on-surface font-black"}>{"\n            FMI Warehouse Logistics Hub & Myanmar Highway Express Routes\n          "}</h2>
<p className={"font-body-lg text-body-lg text-on-surface-variant mt-2"}>{"\n            Direct container unloading facilities and established daily cargo line connections delivering wholesale equipment across Myanmar within 24–48 hours.\n          "}</p>
</div>
<div className={"flex items-center gap-2 font-label-mono-spec text-label-mono-spec text-on-surface-variant"}>
<span className={"w-2.5 h-2.5 rounded-full bg-tier-certified"}></span>
<span>{"Daily Departures to All Major Gates"}</span>
</div>
</div>
<div className={"grid grid-cols-1 md:grid-cols-3 gap-space-md mb-space-lg"}>
<div className={"bg-surface-card p-6 rounded-xl shadow-sm flex flex-col justify-between"}>
<div>
<div className={"w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary mb-3"}>
<span className={"material-symbols-outlined text-[24px]"} aria-hidden={"true"}>{"rv_hookup"}</span>
</div>
<h3 className={"font-headline-sm text-headline-sm font-bold text-on-surface"}>{"Heavy Truck & Container Access"}</h3>
<p className={"font-body-md text-body-md text-on-surface-variant mt-2"}>{"\n              Our FMI City compound features 40-foot container turning radiuses, designated loading bays, and electric forklift handling to safely load pallets of solar panels and heavy tubular battery racks.\n            "}</p>
</div>
<div className={"mt-4 pt-3 bg-surface-container-low rounded-lg px-3 py-2 font-label-mono-spec text-label-mono-spec text-secondary"}>{"\n            Wide Road Clearance · Forklift Handling Up to 3.5 Tons\n          "}</div>
</div>
<div className={"bg-surface-card p-6 rounded-xl shadow-sm flex flex-col justify-between"}>
<div>
<div className={"w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-solar-amber mb-3"}>
<span className={"material-symbols-outlined text-[24px]"} aria-hidden={"true"}>{"fact_check"}</span>
</div>
<h3 className={"font-headline-sm text-headline-sm font-bold text-on-surface"}>{"Pre-Dispatch Inspection Protocol"}</h3>
<p className={"font-body-md text-body-md text-on-surface-variant mt-2"}>{"\n              Every inverter experiences power-up bench testing. Lithium LiFePO4 batteries undergo State of Charge (SOC) validation, and power cable spools are metered before dispatch release.\n            "}</p>
</div>
<div className={"mt-4 pt-3 bg-surface-container-low rounded-lg px-3 py-2 font-label-mono-spec text-label-mono-spec text-secondary"}>{"\n            Serial Tracking Log · Stamped QC Warranty Card Included\n          "}</div>
</div>
<div className={"bg-surface-card p-6 rounded-xl shadow-sm flex flex-col justify-between"}>
<div>
<div className={"w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-tertiary mb-3"}>
<span className={"material-symbols-outlined text-[24px]"} aria-hidden={"true"}>{"departure_board"}</span>
</div>
<h3 className={"font-headline-sm text-headline-sm font-bold text-on-surface"}>{"Same-Day Highway Express Gates"}</h3>
<p className={"font-body-md text-body-md text-on-surface-variant mt-2"}>{"\n              Daily dedicated shuttle trucks transport secured cargo to Bayintnaung and Aung Mingalar Highway Gates by 3:00 PM for same-evening long-haul departure across Myanmar.\n            "}</p>
</div>
<div className={"mt-4 pt-3 bg-surface-container-low rounded-lg px-3 py-2 font-label-mono-spec text-label-mono-spec text-secondary"}>{"\n            Daily Gate Waybill Delivery Tracking Provided via Viber\n          "}</div>
</div>
</div>
<div className={"bg-surface-card rounded-xl p-6 md:p-8 shadow-sm"}>
<h3 className={"font-headline-md text-headline-md font-bold text-on-surface mb-2"}>{"\n          Daily Highway Freight Schedule & Typical Lead Times\n        "}</h3>
<p className={"font-body-md text-body-md text-on-surface-variant mb-space-md"}>{"\n          Consolidated cargo departures from FMI City Warehouse directly linked to Myanmar's primary economic and agricultural hubs:\n        "}</p>
<div className={"overflow-x-auto"}>
<table className={"w-full text-left font-body-sm text-body-sm"}>
<thead>
<tr className={"bg-surface-container-low text-on-surface font-label-mono-spec text-label-mono-spec uppercase"}>
<th className={"py-3 px-4 rounded-l-lg"}>{"Destination Region"}</th>
<th className={"py-3 px-4"}>{"Departure Gate"}</th>
<th className={"py-3 px-4"}>{"Transit Time"}</th>
<th className={"py-3 px-4"}>{"Supported Cargo Classes"}</th>
<th className={"py-3 px-4 rounded-r-lg"}>{"Status"}</th>
</tr>
</thead>
<tbody className={"divide-y divide-border-subtle/0"}>
<tr className={"hover:bg-surface-container-low transition-colors"}>
<td className={"py-3.5 px-4 font-bold text-on-surface"}>{"Mandalay Hub & Upper Myanmar"}</td>
<td className={"py-3.5 px-4 text-on-surface-variant"}>{"Aung Mingalar Highway Gate"}</td>
<td className={"py-3.5 px-4 font-label-mono-spec text-label-mono-spec font-bold text-primary"}>{"24 – 36 Hours"}</td>
<td className={"py-3.5 px-4 text-on-surface-variant"}>{"Tier-1 Panels, High-Cap Inverters, LiFePO4, MV Cable Spools"}</td>
<td className={"py-3.5 px-4"}><span className={"px-2 py-0.5 rounded bg-surface-container text-tier-certified font-bold text-[11px]"}>{"Daily Active"}</span></td>
</tr>
<tr className={"hover:bg-surface-container-low transition-colors"}>
<td className={"py-3.5 px-4 font-bold text-on-surface"}>{"Taunggyi, Kalaw & Shan South"}</td>
<td className={"py-3.5 px-4 text-on-surface-variant"}>{"Aung Mingalar Highway Gate"}</td>
<td className={"py-3.5 px-4 font-label-mono-spec text-label-mono-spec font-bold text-primary"}>{"36 – 48 Hours"}</td>
<td className={"py-3.5 px-4 text-on-surface-variant"}>{"Agri-Solar Pump Packages, Solar Gel/Tubular Batteries, Mounts"}</td>
<td className={"py-3.5 px-4"}><span className={"px-2 py-0.5 rounded bg-surface-container text-tier-certified font-bold text-[11px]"}>{"Daily Active"}</span></td>
</tr>
<tr className={"hover:bg-surface-container-low transition-colors"}>
<td className={"py-3.5 px-4 font-bold text-on-surface"}>{"Naypyitaw Federal Territory"}</td>
<td className={"py-3.5 px-4 text-on-surface-variant"}>{"Aung Mingalar Highway Gate"}</td>
<td className={"py-3.5 px-4 font-label-mono-spec text-label-mono-spec font-bold text-primary"}>{"18 – 24 Hours"}</td>
<td className={"py-3.5 px-4 text-on-surface-variant"}>{"Turnkey Commercial Projects, Hybrid Systems, XLPE Power Cables"}</td>
<td className={"py-3.5 px-4"}><span className={"px-2 py-0.5 rounded bg-surface-container text-tier-certified font-bold text-[11px]"}>{"Daily Active"}</span></td>
</tr>
<tr className={"hover:bg-surface-container-low transition-colors"}>
<td className={"py-3.5 px-4 font-bold text-on-surface"}>{"Pyay & Magway Division"}</td>
<td className={"py-3.5 px-4 text-on-surface-variant"}>{"Bayintnaung Highway Gate"}</td>
<td className={"py-3.5 px-4 font-label-mono-spec text-label-mono-spec font-bold text-primary"}>{"24 – 36 Hours"}</td>
<td className={"py-3.5 px-4 text-on-surface-variant"}>{"Off-Grid Solar Kits, PC Wire, High Voltage Switchgear Accessories"}</td>
<td className={"py-3.5 px-4"}><span className={"px-2 py-0.5 rounded bg-surface-container text-tier-certified font-bold text-[11px]"}>{"Daily Active"}</span></td>
</tr>
<tr className={"hover:bg-surface-container-low transition-colors"}>
<td className={"py-3.5 px-4 font-bold text-on-surface"}>{"Mawlamyine & Mon State"}</td>
<td className={"py-3.5 px-4 text-on-surface-variant"}>{"Bayintnaung Highway Gate"}</td>
<td className={"py-3.5 px-4 font-label-mono-spec text-label-mono-spec font-bold text-primary"}>{"24 Hours"}</td>
<td className={"py-3.5 px-4 text-on-surface-variant"}>{"Solar Farm PV Panels, Inverters, DC Combiner Boxes"}</td>
<td className={"py-3.5 px-4"}><span className={"px-2 py-0.5 rounded bg-surface-container text-tier-certified font-bold text-[11px]"}>{"Daily Active"}</span></td>
</tr>
<tr className={"hover:bg-surface-container-low transition-colors"}>
<td className={"py-3.5 px-4 font-bold text-on-surface"}>{"Pathein & Ayeyarwady Delta"}</td>
<td className={"py-3.5 px-4 text-on-surface-variant"}>{"Bayintnaung / Hlaing Tharyar Gate"}</td>
<td className={"py-3.5 px-4 font-label-mono-spec text-label-mono-spec font-bold text-primary"}>{"12 – 24 Hours"}</td>
<td className={"py-3.5 px-4 text-on-surface-variant"}>{"Rice Mill Inverter Drives, Submersible Solar Pumps, Batteries"}</td>
<td className={"py-3.5 px-4"}><span className={"px-2 py-0.5 rounded bg-surface-container text-tier-certified font-bold text-[11px]"}>{"Daily Active"}</span></td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</section>
<section className={"w-full py-space-xl bg-surface-canvas"}>
<div className={"max-w-7xl mx-auto px-6"}>
<div className={"bg-surface-card rounded-xl p-6 md:p-8 shadow-md"}>
<div className={"flex flex-col lg:flex-row gap-space-lg"}>
<div className={"lg:w-5/12 flex flex-col justify-between"}>
<div className={"flex flex-col gap-space-xs"}>
<span className={"font-badge-label text-badge-label uppercase text-primary font-bold tracking-wider"}>{"Driving Instructions & Directions"}</span>
<h2 className={"font-headline-lg text-headline-lg text-on-surface font-extrabold"}>{"Warehouse Pickup Map Guide"}</h2>
<p className={"font-body-md text-body-md text-on-surface-variant mt-1"}>{"\n                Located inside the secured FMI City complex in Hlaing Tharyar, accessible directly via Hlaing River Road and the Bayintnaung Bridge corridor.\n              "}</p>
<div className={"mt-space-md flex flex-col gap-space-sm"}>
<div className={"flex items-start gap-space-sm p-3.5 rounded-lg bg-surface-container-low"}>
<span className={"material-symbols-outlined text-[20px] text-primary shrink-0 mt-0.5"} aria-hidden={"true"}>{"location_on"}</span>
<div className={"font-body-sm text-body-sm"}>
<span className={"font-bold text-on-surface block"}>{"Address:"}</span>
<span>{"E-32, Sagawah St (3), FMI City, Hlaing Tharyar Township, Yangon."}</span>
</div>
</div>
<div className={"flex items-start gap-space-sm p-3.5 rounded-lg bg-surface-container-low"}>
<span className={"material-symbols-outlined text-[20px] text-solar-amber shrink-0 mt-0.5"} aria-hidden={"true"}>{"signpost"}</span>
<div className={"font-body-sm text-body-sm"}>
<span className={"font-bold text-on-surface block"}>{"Security Gate Protocol:"}</span>
<span>{"Inform FMI Main Security Guardhouse: “Golden Diamond Eagle (GDE) Solar Warehouse - E-32 Sagawah St (3)” for commercial vehicle pass."}</span>
</div>
</div>
<div className={"flex items-start gap-space-sm p-3.5 rounded-lg bg-surface-container-low"}>
<span className={"material-symbols-outlined text-[20px] text-tier-certified shrink-0 mt-0.5"} aria-hidden={"true"}>{"local_parking"}</span>
<div className={"font-body-sm text-body-sm"}>
<span className={"font-bold text-on-surface block"}>{"On-Site Parking:"}</span>
<span>{"Dedicated parking & forklift maneuvering bay available for 6-wheelers, 10-wheelers, and trailer flatbeds."}</span>
</div>
</div>
</div>
</div>
<div className={"mt-space-md flex flex-col sm:flex-row gap-space-sm"}>
<a className={"inline-flex items-center justify-center gap-space-xs px-5 py-3 rounded-lg bg-primary text-on-primary font-body-sm text-body-sm font-semibold hover:bg-primary-container transition-colors shadow"} href={"https://maps.google.com/?q=FMI+City+Hlaing+Tharyar+Yangon"} rel={"noopener noreferrer"} target={"_blank"}>
<span className={"material-symbols-outlined text-[16px]"} aria-hidden={"true"}>{"navigation"}</span>
<span>{"Open in Google Maps"}</span>
</a>
<a className={"inline-flex items-center justify-center gap-space-xs px-5 py-3 rounded-lg bg-surface-container text-on-surface font-body-sm text-body-sm font-semibold hover:bg-surface-container-high transition-colors"} href={"tel:+959957933180"}>
<span className={"material-symbols-outlined text-[16px]"} aria-hidden={"true"}>{"support_agent"}</span>
<span>{"Call Gate Dispatch"}</span>
</a>
</div>
</div>
<div className={"lg:w-7/12 flex flex-col gap-space-sm"}>
<div className={"w-full h-80 lg:h-96 bg-cover bg-center rounded-xl shadow-inner relative overflow-hidden"} data-location={"FMI City, Hlaing Tharyar, Yangon, Myanmar"} style={{"backgroundImage": "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBuvzba1l_aQEx9C6MyuM1uehSaO8FZqy2DZ1tHbWxicp0jb8vx8j2bH9UX9RoB_msBdMAGblAus6lQkw-7S7kHKadmkNHl5_bZ-duLQnDQjEvOXXeQhy69_StXVKKsVaINIYIBnw-pfavJY5_yXKR4rJ_D-Z5hqtgQiBz9ikMzmoJqjf3NgbL9AKRVZidDtOiyyoyEh_vdYuZiu6VYhJcQw25Ga0pv6_v2MmE7LZJQ-dpF-YlTofD_Ew')"}}>
<div className={"absolute inset-0 bg-primary/10 pointer-events-none"}></div>
<div className={"absolute bottom-4 left-4 bg-surface-card/95 backdrop-blur-md px-4 py-3 rounded-lg shadow-md max-w-xs"}>
<div className={"flex items-center gap-2"}>
<span className={"w-3 h-3 rounded-full bg-tier-certified animate-ping"}></span>
<span className={"font-label-mono-spec text-label-mono-spec font-bold text-on-surface"}>{"GDE Central Warehouse Bay"}</span>
</div>
<p className={"font-body-sm text-[11px] text-on-surface-variant mt-1 leading-snug"}>{"\n                  E-32, Sagawah St (3), FMI City, Hlaing Tharyar, Yangon\n                "}</p>
</div>
</div>
<div className={"grid grid-cols-2 sm:grid-cols-4 gap-2"}>
<div className={"p-3 bg-surface-container-low rounded-lg text-center"}>
<span className={"font-badge-label text-[11px] text-secondary uppercase font-bold block"}>{"Bayintnaung Gate"}</span>
<span className={"font-label-mono-spec text-label-mono-spec font-bold text-on-surface"}>{"15 Mins"}</span>
</div>
<div className={"p-3 bg-surface-container-low rounded-lg text-center"}>
<span className={"font-badge-label text-[11px] text-secondary uppercase font-bold block"}>{"Aung Mingalar"}</span>
<span className={"font-label-mono-spec text-label-mono-spec font-bold text-on-surface"}>{"45 Mins"}</span>
</div>
<div className={"p-3 bg-surface-container-low rounded-lg text-center"}>
<span className={"font-badge-label text-[11px] text-secondary uppercase font-bold block"}>{"Downtown Yangon"}</span>
<span className={"font-label-mono-spec text-label-mono-spec font-bold text-on-surface"}>{"35 Mins"}</span>
</div>
<div className={"p-3 bg-surface-container-low rounded-lg text-center"}>
<span className={"font-badge-label text-[11px] text-secondary uppercase font-bold block"}>{"Thilawa Port"}</span>
<span className={"font-label-mono-spec text-label-mono-spec font-bold text-on-surface"}>{"60 Mins"}</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className={"w-full py-space-lg bg-surface-container"}>
<div className={"max-w-7xl mx-auto px-6"}>
<div className={"flex flex-col sm:flex-row items-center justify-between gap-space-md p-6 bg-surface-card rounded-xl shadow-sm"}>
<div className={"flex items-center gap-space-md"}>
<div className={"w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-primary shrink-0"}>
<span className={"material-symbols-outlined text-[24px]"} aria-hidden={"true"}>{"contact_support"}</span>
</div>
<div>
<h4 className={"font-headline-sm text-headline-sm font-bold text-on-surface"}>{"Need a custom wholesale proforma right now?"}</h4>
<p className={"font-body-sm text-body-sm text-on-surface-variant"}>{"Connect with our on-duty wholesale engineers on Viber for instantaneous stock verification."}</p>
</div>
</div>
<div className={"flex items-center gap-space-sm shrink-0"}>
<a className={"inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#7360F2] text-white font-body-sm text-body-sm font-bold shadow hover:opacity-90 transition-opacity"} href={"https://invite.viber.com/?g2=AQBL3Uw94Ep4qE7tS7yPEErHa5w1BRUcuxQHFfsZQLah3bkPINFLs3iUY9KGOXNJ"} rel={"noopener noreferrer"} target={"_blank"}>
<span className={"material-symbols-outlined text-[18px]"} aria-hidden={"true"}>{"forum"}</span>
<span>{"Open Viber Chat"}</span>
</a>
<a className={"inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-on-primary font-body-sm text-body-sm font-bold shadow hover:bg-primary-container transition-colors"} href={"tel:+959957933180"}>
<span className={"material-symbols-outlined text-[18px]"} aria-hidden={"true"}>{"call"}</span>
<span>{"(+959) 957933180"}</span>
</a>
</div>
</div>
</div>
</section>
</div></main>
);
}
