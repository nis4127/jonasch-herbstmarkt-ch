import { Category, Product } from "./types";

export const categories: Category[] = [
  { slug: "confiserie-backwaren", name: "Confiserie Backwaren", eyebrow: "Süss & ofenfrisch", description: "Klassische Marktfreuden zum Mitnehmen oder direkt Geniessen.", accent: "#D50072", image: "🥨" },
  { slug: "suesswaren", name: "Süsswaren", eyebrow: "Kleine Freuden", description: "Traditionelle Schweizer Süssigkeiten für den süssen Moment.", accent: "#8C174F", image: "🍬" },
  { slug: "getraenke", name: "Getränke", eyebrow: "Warm & prickelnd", description: "Kaffeeklassiker, wärmende Tassen und feine Tropfen.", accent: "#8CCFC9", image: "☕" },
];

export const products: Product[] = [
  { slug: "magenbrot", category: "confiserie-backwaren", name: "Magenbrot", description: "Würzige, glasierte Häppchen mit feinen Herbstgewürzen.", price: "6.00", tag: "Klassiker", image: "🍞", ingredients: ["Gluten", "Nüsse"] },
  { slug: "gebrannte-mandeln", category: "confiserie-backwaren", name: "Gebrannte Mandeln", description: "Knackige Mandeln, frisch karamellisiert mit Zimt und Zucker.", price: "8.00", tag: "Frisch gemacht", image: "🌰", ingredients: ["Mandeln"] },
  { slug: "rahmdaafeli", category: "confiserie-backwaren", name: "Rahmdääfeli", description: "Zarte Rahmkaramellen nach traditionellem Rezept.", price: "7.00", image: "🍬", ingredients: ["Milch"] },
  { slug: "lebkuchen", category: "confiserie-backwaren", name: "Lebkuchen", description: "Duftender Lebkuchen mit Honig und winterlichen Gewürzen.", price: "5.50", image: "🍪", ingredients: ["Gluten", "Ei", "Milch"] },
  { slug: "maessmoegge", category: "suesswaren", name: "Mässmögge", description: "Die typische Basler Süssigkeit mit knuspriger Hülle und Nussfüllung.", price: "6.50", tag: "Basler Tradition", image: "🥜", ingredients: ["Nüsse", "Gluten"] },
  { slug: "nougat", category: "suesswaren", name: "Nougat", description: "Cremiger, zarter Nougat mit gerösteten Nüssen.", price: "6.50", image: "🍫", ingredients: ["Nüsse", "Ei"] },
  { slug: "kaffeeklassiker", category: "getraenke", name: "Kaffeeklassiker", description: "Espresso, Kaffee Crème und Cappuccino – frisch zubereitet.", price: "4.00", image: "☕", ingredients: ["Milch auf Wunsch"] },
  { slug: "teesorten", category: "getraenke", name: "Teesorten", description: "Ausgewählte Schwarz-, Kräuter- und Früchtetees.", price: "4.00", image: "🫖", ingredients: ["Je nach Sorte"] },
  { slug: "kaffeelutz", category: "getraenke", name: "Kaffeelutz", description: "Schweizer Kaffeetradition mit einem Schuss Kirsch.", price: "7.50", tag: "Schweizer Klassiker", image: "🥃", ingredients: ["Kaffee", "Kirsch"] },
  { slug: "prosecco", category: "getraenke", name: "Prosecco", description: "Prickelnder Genuss zum Anstossen auf einen schönen Markttag.", price: "7.00", image: "🥂", ingredients: ["Enthält Alkohol"] },
  { slug: "wein", category: "getraenke", name: "Wein", description: "Eine feine Auswahl an Rot- und Weisswein aus der Region.", price: "7.00", image: "🍷", ingredients: ["Enthält Alkohol"] },
  { slug: "gluehwein", category: "getraenke", name: "Glühwein", description: "Würziger Glühwein mit Zimt, Nelken und Orangenschale.", price: "6.00", tag: "Herbstwärme", image: "🍵", ingredients: ["Enthält Alkohol"] },
];
