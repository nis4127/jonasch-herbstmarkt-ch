import Link from "next/link";
import Image from "next/image";
import { QrCode } from "lucide-react";
import { categories } from "@/lib/fallback-data";

export function Header() {
  return <header className="site-header"><Link href="/" className="brand"><Image src="/logo.png" alt="Confiserie Jonasch" width={128} height={69} priority /><span className="brand-sub">Digitales Marktmenü</span></Link><nav>{categories.filter((category) => category.slug !== "getraenke").map((category) => <Link key={category.slug} href={`/kategorie/${category.slug}`}>{category.name}</Link>)}</nav><Link href="/kategorie/getraenke" className="location"><QrCode size={15} /> Kaffee &amp; Tee</Link></header>;
}
