interface Product {
  category: string;
  name: string;
  image: {
    desktop: string;
    mobile: string;
    tablet: string;
  };
  description: string;
  isNew: boolean;
}

export default Product;
