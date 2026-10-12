import productData from '@/content/products.json';
import categoryData from '@/content/categories.json';
import companyData from '@/content/company.json';
import imageOverrides from '@/content/image-overrides.json';
export const products = productData.map(product => { const image = (imageOverrides as Record<string, {src:string;alt:string;sourceUrl:string}>)[product.slug]; return image ? {...product, images: [image, ...product.images]} : product; });
export const categories = categoryData;
export const company = companyData;
export type Product = typeof products[number];
export type CatalogCategory = typeof categories[number];
export const topCategories = categories.filter(category => category.parent === 0);
export const categoryAliases: Record<string,string> = {inverters:'inverter', batteries:'solar-battery', panels:'solar', electrical:'electrical-products', bos:'solar-fitting'};
export function categoryFor(product: Product) {return product.categories.find(category => topCategories.some(parent => parent.slug === category.slug)) || product.categories[0];}
export const brandNames = ['Jinko Solar','Livfast','Next Electric','PLP','THI','Trina Solar'];
export const contact = {phone:'+959957933180',secondPhone:'+959952706118',email:'goldendiamondeagle@gmail.com',address:'E-32, Sagawah St (3), FMI City, Hlaing Tharyar Township, Yangon, Myanmar',viber:'https://invite.viber.com/?g2=AQBL3Uw94Ep4qE7tS7yPEErHa5w1BRUcuxQHFfsZQLah3bkPINFLs3iUY9KGOXNJ',messenger:'https://www.facebook.com/messages/t/1123518094416164'};
