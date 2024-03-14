import { type ImgAsset } from "@/utils/sanity-client";

export type TItem = {
  name: string;
  description: string;
  price: number;
  image: string | ImgAsset;
  id: string;
  inStock: boolean;
  category: "software" | "hardware" | "other";
  lowStock: boolean;
};
