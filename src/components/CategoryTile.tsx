import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Category } from "@/lib/types";

export function CategoryTile({ category }: { category: Category }) {
  return <Link href={`/kategorie/${category.slug}`} className="category-tile" style={{ "--accent": category.accent } as React.CSSProperties}><div className="tile-icon">{category.image}</div><div><p className="eyebrow">{category.eyebrow}</p><h3>{category.name}</h3><p className="tile-description">{category.description}</p></div><span className="tile-arrow"><ArrowUpRight size={20} /></span></Link>;
}
