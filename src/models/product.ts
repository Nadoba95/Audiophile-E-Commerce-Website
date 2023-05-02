import OtherProducts from "./OtherProducts";

interface Product {
  id: number;
  category: string;
  name: string;
  slug: string;
  image: string;
  description: string;
  isNew: boolean;
  price?: number;
  features?: string;
  includes?: {
    quantity: number;
    item: string;
  }[];
  gallery?: {
    img1: string;
    img2: string;
    img3: string;
  };
  others?: OtherProducts[];
}

export default Product;
