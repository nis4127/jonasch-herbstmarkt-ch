import Link from "next/link";
import { Leaf, QrCode } from "lucide-react";
import { categories } from "@/lib/fallback-data";

export function Header() {
  return <header className="site-header"><Link href="/" className="brand"><span className="brand-mark"><Leaf size={17} /></span><span>Jonasch<span className="brand-sub">Herbstmarkt</span></span></Link><nav>{categories.map((category) => <Link key={category.slug} href={`/kategorie/${category.slug}`}>{category.name}</Link>)}</nav><span className="location"><QrCode size={15} /> QR-Menü</span></header>;
}
