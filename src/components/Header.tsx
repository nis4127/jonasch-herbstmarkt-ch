import Link from "next/link";
import Image from "next/image";
import { MapPin, QrCode } from "lucide-react";
import { categories } from "@/lib/fallback-data";

export function Header() {
  return <header className="site-header"><div className="site-header-top"><Link href="/" className="brand"><Image src="/logo.png" alt="Confiserie Jonasch" width={128} height={69} priority /><span className="brand-sub">Digitales Marktmenü</span></Link><Link href="/kategorie/getraenke" className="location location-primary"><QrCode size={15} /> Kaffee &amp; Tee</Link></div><nav aria-label="Hauptnavigation"><Link href="/wo-sie-uns-finden"><MapPin size={13} /> Wo Sie uns finden</Link>{categories.map((category) => <Link key={category.slug} href={`/kategorie/${category.slug}`}>{category.name}</Link>)}</nav></header>;
}
