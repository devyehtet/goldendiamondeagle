import type { NextConfig } from 'next';
import categories from './content/categories.json';
const config: NextConfig = {
  turbopack: { root: __dirname },
  images: { qualities: [75, 90] },
  redirects() {
    return [
      { source: '/product/:slug', destination: '/products/:slug', permanent: true },
      { source: '/packages', destination: '/solar-packages', permanent: true },
      { source: '/certificate-achievement', destination: '/certificates', permanent: true },
      ...categories.map(category => {
        const parent = categories.find(item => item.id === category.parent);
        return { source: `/product-category/${parent ? parent.slug + '/' : ''}${category.slug}`, destination: `/products?category=${category.slug}`, permanent: true };
      }),
    ];
  },
};
export default config;
