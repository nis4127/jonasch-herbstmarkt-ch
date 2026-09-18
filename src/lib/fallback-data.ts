import { Category, Product } from "./types";

export const categories: Category[] = [
  { slug: "herzhaft", name: "Herzhaft", eyebrow: "Vom Marktstand", description: "Knuspriges, Warmes und Deftiges für kühle Herbsttage.", accent: "#C6542D", image: "🍂" },
  { slug: "suesse-sachen", name: "Süße Sachen", eyebrow: "Handgemacht", description: "Warme Lieblingsstücke und kleine Freuden zum Teilen.", accent: "#B8793E", image: "🍎" },
  { slug: "getraenke", name: "Getränke", eyebrow: "Aus dem Kessel", description: "Wärmende Tassen und Erfrischungen aus der Region.", accent: "#6E7D55", image: "☕" },
];

export const products: Product[] = [
  { slug: "flammkuchen", category: "herzhaft", name: "Flammkuchen Elsässer Art", description: "Dünner, knuspriger Teig mit Crème fraîche, Speck und roten Zwiebeln.", price: "12.50", tag: "Bestseller", image: "🥨", ingredients: ["Weizen", "Milch", "Speck"] },
  { slug: "kuerbis-suppe", category: "herzhaft", name: "Kürbissuppe", description: "Cremiger Hokkaido mit gerösteten Kürbiskernen und Kräuteröl.", price: "8.50", tag: "Vegetarisch", image: "🍲", ingredients: ["Kürbis", "Sellerie", "Kürbiskerne"] },
  { slug: "raclette-brot", category: "herzhaft", name: "Raclette-Brot", description: "Kräftiger Bergkäse, Bauernbrot und eingelegte Gürkchen.", price: "9.50", image: "🧀", ingredients: ["Milch", "Gluten"] },
  { slug: "apfelstrudel", category: "suesse-sachen", name: "Warmer Apfelstrudel", description: "Hausgemacht mit Zimt, Rosinen und einem Klecks Vanillesauce.", price: "7.50", tag: "Hausgemacht", image: "🥧", ingredients: ["Gluten", "Milch", "Ei"] },
  { slug: "kuerbis-waffel", category: "suesse-sachen", name: "Kürbis-Waffel", description: "Goldbraun gebacken, mit Ahornsirup und gerösteten Haselnüssen.", price: "6.50", image: "🧇", ingredients: ["Gluten", "Nüsse", "Ei"] },
  { slug: "apfelpunsch", category: "getraenke", name: "Warmer Apfelpunsch", description: "Naturtrüber Apfelsaft mit Zimt, Nelke und Orangenschale.", price: "5.00", tag: "Alkoholfrei", image: "🍵", ingredients: ["Apfel", "Orange"] },
  { slug: "most", category: "getraenke", name: "Streuobst-Most", description: "Spritzig, naturtrüb und direkt von der lokalen Mosterei.", price: "4.50", image: "🍏", ingredients: ["Apfel"] },
];
