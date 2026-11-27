import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { products } from '@/lib/products';
export function generateStaticParams(){return products.map(p=>({slug:p.id}));}
export default async function ProductPage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const product=products.find(p=>p.id===slug);if(!product)notFound();return <section className="detail-page section-pad"><div className="container"><Link href="/#collection" className="back-link"><ArrowLeft size={16}/> Back to collection</Link><div className="detail-grid"><div className="detail-image"><Image src={product.image} alt={product.name} fill sizes="(max-width: 800px) 100vw, 55vw"/></div><div className="detail-info"><p className="eyebrow"><span/> {product.category}</p><h1>{product.name}</h1><p>{product.description}</p><div className="detail-price">{product.price}</div><p className="detail-note">Interested in this piece? Contact us for availability, dimensions and customisation details.</p><Link href={`/contact?product=${encodeURIComponent(product.name)}`} className="button button-dark">Enquire about this piece <ArrowUpRight size={17}/></Link></div></div></div></section>}
