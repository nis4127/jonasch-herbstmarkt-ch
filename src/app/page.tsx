import { ArrowDown, QrCode } from "lucide-react";
import { CategoryTile } from "@/components/CategoryTile";
import { getCategories, getProducts } from "@/lib/cms";
import { ProductList } from "@/components/ProductCard";

export default async function Home() {
  const [categories, products] = await Promise.all([getCategories(), getProducts()]);
  return <main><section className="hero"><div className="hero-copy"><p className="eyebrow">Dein digitales Marktmenü</p><h1>Herbst auf<br /><em>dem Teller.</em></h1><p className="hero-lead">QR-Code scannen, Menü öffnen und direkt entdecken: unsere saisonalen Confiserie Backwaren, Süsswaren und Getränke.</p><a href="#menue" className="primary-button">Menü öffnen <ArrowDown size={17} /></a></div><div className="hero-art"><div className="sun"></div><div className="hero-emoji">🍁</div><span className="art-note note-one">scan &amp; geniess</span><span className="art-note note-two">mobile first</span></div></section><section id="menue" className="section category-section"><div className="section-heading"><div><p className="eyebrow">Direkt auf dem Smartphone</p><h2>Deine Auswahl,<br /><em>dein Genuss.</em></h2></div><div className="open-note"><QrCode size={16} /><span>QR-Menü<br /><b>ohne App</b></span></div></div><div className="category-grid">{categories.map((category) => <CategoryTile key={category.slug} category={category} />)}</div></section><section className="section featured"><div className="section-heading compact"><div><p className="eyebrow">Unsere Auswahl</p><h2>Alles im Überblick</h2></div><span className="season-stamp">MENÜ<br /><b>2026</b></span></div><ProductList products={products} /></section></main>;
}
