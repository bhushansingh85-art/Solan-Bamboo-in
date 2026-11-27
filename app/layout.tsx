import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Analytics from '@/components/Analytics';
export const metadata: Metadata = { title: 'Solan Bamboo Furniture | Crafted Naturally', description: 'Explore thoughtfully crafted bamboo furniture from Solan, Himachal Pradesh. Natural materials, timeless forms and handcrafted character.', metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://YOUR-DOMAIN.example'), openGraph: { title: 'Solan Bamboo Furniture', description: 'Thoughtfully crafted bamboo furniture from Solan, Himachal Pradesh.', type: 'website' }, robots: { index: true, follow: true } };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Header/><main>{children}</main><Footer/><Analytics/></body></html>}
