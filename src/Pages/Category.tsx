import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CategoryHead from "../components/Category/CategoryHead";
import CategoryList from "../components/Category/CategoryList";
import Categories from "../components/Shared/Categories";
import TextImage from "../components/Shared/TextImage";
import Product from "../models/product";
import productsData from "../products.json";

const Category: React.FC = () => {
  const [products, setProducts] = useState<Product[] | null>(null);
  const { category } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    let productsArr: Product[] = [];

    productsData.forEach((product) => {
      if (product.category === category) {
        productsArr.push({
          category: product.category,
          name: product.name,
          image: product.image,
          description: product.description,
          isNew: product.new,
        });
      }
    });

    if (productsArr.length > 0) {
      setProducts(productsArr.reverse());
    } else {
      navigate("/");
    }
  }, [category]);

  return (
    <>
      {products && <CategoryHead title={products[0].category} />}
      {products && <CategoryList products={products} />}
      <Categories />
      <TextImage />
    </>
  );
};

export default Category;
