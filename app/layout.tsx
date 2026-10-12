import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';
export const metadata: Metadata = {
 title: { default: 'Golden Diamond Eagle | Solar & Electrical Power Myanmar', template: '%s | Golden Diamond Eagle' },
 description: 'Golden Diamond Eagle Co., Ltd. — Myanmar electrical power and solar energy importer and wholesale distributor. Explore inverters, batteries, power cables and turnkey solar packages.',
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
 return <html lang="en" data-scroll-behavior="smooth"><head><link rel="stylesheet" href="/fonts/fonts.css" /></head><body className="bg-surface-canvas font-body-md text-body-md text-on-surface antialiased"><a href="#main-content" className="skip-link">Skip to content</a><Header /><div id="main-content">{children}</div><Footer /></body></html>;
}
