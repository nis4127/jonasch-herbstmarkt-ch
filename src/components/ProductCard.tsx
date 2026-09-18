import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Product } from "@/lib/types";

export function ProductCard({ product }: { product: Product }) {
  return <Link href={`/produkt/${product.slug}`} className="product-card"><div className="product-visual">{product.image}{product.tag && <span className="product-tag">{product.tag}</span>}</div><div className="product-info"><div><h3>{product.name}</h3><p>{product.description}</p></div><div className="product-bottom"><strong>CHF {product.price}</strong><span className="round-arrow"><ArrowUpRight size={17} /></span></div></div></Link>;
}

export function ProductList({ products }: { products: Product[] }) { return <div className="product-grid">{products.map((product) => <ProductCard key={product.slug} product={product} />)}</div>; }
