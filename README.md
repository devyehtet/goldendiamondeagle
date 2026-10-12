# Golden Diamond Eagle — Next.js website

Next.js 16 + React 19 + Tailwind 4 website, based on the supplied Stitch design and the original public catalog at https://goldendiamondeagle.com/.

## Run

```sh
npm ci
npm run dev
```

Open http://127.0.0.1:3001. Production: `npm run build`, then `npm start`.

## Migrated content

- All **71 products**, preserving every original product ID and slug, including separate records with similar names.
- All **83 original product gallery photos**.
- **7 product categories** and **18 categories/subcategories** in total.
- **5 original power/solar packages**, full published configurations, historical reference prices and installation galleries.
- The complete company introduction, history, mission, vision, values and six completed government-project records.
- **5 certificate/achievement documents**, original partner logos, company team photos and import/distribution photographs.
- **120 full-size original image assets**, plus one matching **1080×1080 Livfast FCS1125** supplier photo found through image search. The original photo remains in the product gallery.

## Pages

| Route | Content |
| --- | --- |
| `/` | Company introduction, seven category cards, all eleven subcategory links, featured products, packages, partners and team |
| `/products` | All 71 products visible by default, search, all 18 category filters, sorting and optional 12/24-item pagination |
| `/products/[slug]` | All 71 product details, galleries, image enlargement, quote links and related products |
| `/solar-packages` | Five selectable package comparison cards, structured equipment details, original installation galleries and an appliance load calculator |
| `/about` | Complete original company profile and government-project table |
| `/certificates` | Five original credentials with full-size document viewing |
| `/contact` | Verified contact details and prefilled product quotation form |

Old `/product/...`, `/product-category/...`, `/packages` and `/certificate-achievement` URLs redirect to their new counterparts. Existing category aliases from the earlier Stitch implementation continue to work.

## Source and image quality

`content/source/` preserves the public Store API export, sitemaps and source HTML used for the migration. `content/products.json`, `categories.json` and `company.json` drive the live pages. `content/asset-sources.json` maps every original image URL to its local file; `content/image-metadata.json` records native dimensions. Supplemental photo provenance is recorded in `content/image-overrides.json`. A fresh comparison against the live old site is recorded in `content/live-catalog-audit.json`; all 71 products and all 18 categories match.

The import uses originals instead of WordPress thumbnails. Next.js Image generates responsive, optimized images with quality 90 for product/detail images, while the originals remain available locally. 52 of the downloaded original assets have a longest side of at least 1000px. Some legacy originals are only 220–600px; they are preserved without inventing details or substituting a different product model.

The Stitch exports and reference screenshots are retained under `stitch/`. Original generated screen components are reference material; live pages now use the migrated catalog in `lib/catalog.ts` and `components/catalog/`.

## Updating content

The archived export can be regenerated using:

```sh
python3 scripts/import-legacy.py
python3 scripts/download-legacy-assets.py
node scripts/check-migration.mjs
```

The import requires already-downloaded HTML/API snapshots in `content/source/`. It preserves product IDs, categories, photo URLs and source provenance. Avoid running `scripts/import-stitch.py` against the live components: it regenerates the original Stitch reference components and footer.

## Quotations and package calculator

The quotation form creates an email draft. It does not send email or upload documents to a server; customers attach any BOQ documents manually in their email app. Product quote links prefill the model or package name.

Package prices are historical references from the old website, not a claim of current pricing. The calculator estimates running wattage and suggests a starting package using those published ranges. Final sizing, motor startup requirements, battery runtime, availability and quotes require GDE engineering review.

## Verification

- `npm run build`: production compilation, TypeScript checks and generation of all 71 product pages.
- `node scripts/check-migration.mjs`: exhaustive migration audit against the original Store API, product sitemap, category counts and original image files.
- `node scripts/check-migration.mjs --http`: additionally checks all 71 product URLs and the six main pages via the local server, and verifies unknown products return 404.
- Browser visual/interaction QA for this update could not run because the browser security policy rejected access to the local preview. HTTP checks do not replace visual browser testing.

The report is saved in `content/migration-report.json`.
