import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Categories from "../components/Shared/Categories";
import TextImage from "../components/Shared/TextImage";
import productsData from "../products.json";

type Product = {
  name: string;
  image: {
    desktop: string;
    mobile: string;
    tablet: string;
  };
  description: string;
  new: boolean;
};

const Category: React.FC = () => {
  console.log(productsData);
  const [products, setProducts] = useState<Product[] | null>(null);

  const { category } = useParams();

  useEffect(() => {
    let productsArr: Product[] = [];

    productsData.forEach((product) => {
      if (product.category === category) {
        productsArr.push({
          name: product.name,
          image: product.image,
          description: product.description,
          new: product.new,
        });
      }
    });

    setProducts(productsArr);
  }, [category]);

  return (
    <>
      <Categories />
      {products?.map((product, i) => (
        <div style={{ color: "red" }} key={i}>
          test
        </div>
      ))}
      <TextImage />
    </>
  );
};

export default Category;
