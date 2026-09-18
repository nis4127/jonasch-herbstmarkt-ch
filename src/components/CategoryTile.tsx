import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Category } from "@/lib/types";

export function CategoryTile({ category }: { category: Category }) {
  return <Link href={`/kategorie/${category.slug}`} className="category-tile" style={{ "--accent": category.accent } as React.CSSProperties}><div className="tile-icon">{category.slug === "getraenke" ? <Image className="tile-logo" src="/cafe-logo.png" alt="caffè jonasch" width={110} height={68} /> : category.image}</div><div><p className="eyebrow">{category.eyebrow}</p><h3>{category.name}</h3><p className="tile-description">{category.description}</p></div><span className="tile-arrow"><ArrowUpRight size={20} /></span></Link>;
}
