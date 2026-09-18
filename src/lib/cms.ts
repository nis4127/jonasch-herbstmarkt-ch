import { createClient } from "@sanity/client";
import { categories as fallbackCategories, products as fallbackProducts } from "./fallback-data";
import { Category, Product } from "./types";

const allowedCategorySlugs = new Set(fallbackCategories.map((category) => category.slug));
const allowedProductSlugs = new Set(fallbackProducts.map((product) => product.slug));
const hasSanity = Boolean(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID && process.env.NEXT_PUBLIC_SANITY_DATASET);
const client = hasSanity ? createClient({ projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, dataset: process.env.NEXT_PUBLIC_SANITY_DATASET, apiVersion: "2025-01-01", useCdn: true }) : null;

function onlyAllowedCategories(items: Category[]) { return items.filter((item) => allowedCategorySlugs.has(item.slug)); }
function onlyAllowedProducts(items: Product[]) { return items.filter((item) => allowedProductSlugs.has(item.slug) && allowedCategorySlugs.has(item.category)); }

export async function getCategories(): Promise<Category[]> {
  if (!client) return fallbackCategories;
  try { const items = onlyAllowedCategories(await client.fetch<Category[]>(`*[_type == "category"] | order(order asc){"slug": slug.current, name, eyebrow, description, accent, "image": image.asset->url}`)); return items.length ? items : fallbackCategories; } catch { return fallbackCategories; }
}

export async function getProducts(category?: string): Promise<Product[]> {
  if (category && !allowedCategorySlugs.has(category)) return [];
  if (!client) return category ? fallbackProducts.filter((item) => item.category === category) : fallbackProducts;
  try { const items = onlyAllowedProducts(await client.fetch<Product[]>(`*[_type == "product" && (!defined($category) || category->slug.current == $category)] | order(order asc){"slug": slug.current, "category": category->slug.current, name, description, price, tag, "image": image.asset->url, ingredients}`, { category })); return items.length ? items : (category ? fallbackProducts.filter((item) => item.category === category) : fallbackProducts); } catch { return category ? fallbackProducts.filter((item) => item.category === category) : fallbackProducts; }
}

export async function getProduct(slug: string): Promise<Product | undefined> {
  if (!allowedProductSlugs.has(slug)) return undefined;
  if (!client) return fallbackProducts.find((item) => item.slug === slug);
  try { const item = await client.fetch<Product | undefined>(`*[_type == "product" && slug.current == $slug][0]{"slug": slug.current, "category": category->slug.current, name, description, price, tag, "image": image.asset->url, ingredients}`, { slug }); return item && allowedCategorySlugs.has(item.category) ? item : fallbackProducts.find((fallback) => fallback.slug === slug); } catch { return fallbackProducts.find((item) => item.slug === slug); }
}
