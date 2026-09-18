import { ArrowDown, Clock3 } from "lucide-react";
import { CategoryTile } from "@/components/CategoryTile";
import { getCategories, getProducts } from "@/lib/cms";
import { ProductList } from "@/components/ProductCard";

export default async function Home() {
  const [categories, products] = await Promise.all([getCategories(), getProducts()]);
  return <main><section className="hero"><div className="hero-copy"><p className="eyebrow">Willkommen am Stand</p><h1>Herbst auf<br /><em>dem Teller.</em></h1><p className="hero-lead">Unser Menü bringt die besten Aromen der Saison zusammen. Entdecke Hausgemachtes, Regionales und alles, was einen Herbstmarkt besonders macht.</p><a href="#menue" className="primary-button">Menü entdecken <ArrowDown size={17} /></a></div><div className="hero-art"><div className="sun"></div><div className="hero-emoji">🍁</div><span className="art-note note-one">regional</span><span className="art-note note-two">seit 1987</span></div></section><section id="menue" className="section category-section"><div className="section-heading"><div><p className="eyebrow">Was darf es sein?</p><h2>Dein Herbst,<br /><em>deine Auswahl.</em></h2></div><div className="open-note"><Clock3 size={16} /><span>Heute geöffnet<br /><b>11:00 – 20:00 Uhr</b></span></div></div><div className="category-grid">{categories.map((category) => <CategoryTile key={category.slug} category={category} />)}</div></section><section className="section featured"><div className="section-heading compact"><div><p className="eyebrow">Direkt vom Grill & aus dem Ofen</p><h2>Unsere Lieblinge</h2></div><span className="season-stamp">SAISON<br /><b>2026</b></span></div><ProductList products={products.slice(0, 3)} /></section></main>;
}
