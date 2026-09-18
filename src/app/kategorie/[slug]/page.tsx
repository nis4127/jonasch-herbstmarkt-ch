import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getCategories, getProducts } from "@/lib/cms";
import { ProductList } from "@/components/ProductCard";

export async function generateStaticParams() { return (await getCategories()).map((category) => ({ slug: category.slug })); }
export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const categories = await getCategories(); const category = categories.find((item) => item.slug === slug); const products = await getProducts(slug); if (!category) return <main className="not-found"><h1>Nichts gefunden.</h1><Link href="/">Zurück zum Menü</Link></main>; return <main><section className="category-hero" style={{ "--accent": category.accent } as React.CSSProperties}><Link href="/" className="back-link"><ArrowLeft size={16} /> Alle Kategorien</Link><div className="category-hero-inner"><div><p className="eyebrow">{category.eyebrow}</p><h1>{category.name}</h1><p>{category.description}</p></div><span className="category-hero-icon">{category.image}</span></div></section><section className="section listing"><div className="listing-head"><div><p className="eyebrow">{products.length} Auswahlmöglichkeiten</p><h2>Auf einen Blick</h2></div><span className="pill">Alle Preise in CHF</span></div><ProductList products={products} /></section></main>; }
