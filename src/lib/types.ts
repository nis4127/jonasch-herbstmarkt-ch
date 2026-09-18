export type Category = {
  slug: string;
  name: string;
  eyebrow: string;
  description: string;
  accent: string;
  image: string;
};

export type Product = {
  slug: string;
  category: string;
  name: string;
  description: string;
  price: string;
  tag?: string;
  image: string;
  ingredients?: string[];
};
