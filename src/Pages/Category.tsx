import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CategoryHead from "../components/Category/CategoryHead";
import CategoryList from "../components/Category/CategoryList";
import Categories from "../components/Shared/Categories";
import TextImage from "../components/Shared/TextImage";
import Product from "../models/product";
import productsData from "../products.json";

const IMAGE_SIZE = "desktop";

const Category: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    const filteredProducts: Product[] = productsData
      .filter((product) => product.category === category)
      .map(({ id, category, name, slug, image, description, new: isNew }) => {
        return {
          id,
          category,
          name,
          slug,
          image: image[IMAGE_SIZE],
          description,
          isNew,
        };
      });

    if (filteredProducts.length === 0) {
      navigate("/");
      return;
    }

    setProducts(filteredProducts.reverse());
  }, [category, navigate]);

  if (!products || !category) {
    return null;
  }

  return (
    <>
      <CategoryHead title={category} />
      <CategoryList products={products} />
      <Categories />
      <TextImage />
    </>
  );
};

export default Category;
