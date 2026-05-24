export type MenuTag = "spicy" | "healthy" | "favorite" | "kids friendly";

export type MenuItem = {
  id: string;
  date: string;
  title: string;
  description: string;
  image: string;
  tags: MenuTag[];
  portion: string;
  halal: boolean;
};

export type Package = {
  id: string;
  name: string;
  price: number;
  cadence: string;
  serving: string;
  benefits: string[];
  featured?: boolean;
};

export type Vendor = {
  id: string;
  name: string;
  category: string;
  image: string;
  instagram: string;
  description: string;
  rating: number;
  portfolio: string[];
};

export type GalleryItem = {
  id: string;
  category: string;
  title: string;
  image: string;
};
