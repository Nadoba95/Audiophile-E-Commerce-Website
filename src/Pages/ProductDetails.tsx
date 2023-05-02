import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Categories from "../components/Shared/Categories";
import TextImage from "../components/Shared/TextImage";
import Product from "../models/product";
import productsData from "../products.json";
import ProductItem from "../components/ProductDetails/ProductItem";

const IMAGE_SIZE = "desktop";

const ProductDetails: React.FC = () => {
  const { category, product } = useParams<{ category: string; product: string }>();
  const navigate = useNavigate();

  const filteredProduct: Product[] = useMemo(() => {
    return productsData
      .filter((productData) => {
        if (productData.category === category && productData.slug === product) {
          return productData;
        }

        return null;
      })
      .map((item) => {
        return {
          id: item.id,
          category: item.category,
          name: item.name,
          slug: item.slug,
          image: item.image[IMAGE_SIZE],
          description: item.description,
          isNew: item.new,
          features: item.features,
          includes: item.includes,
          price: item.price,
          gallery: {
            img1: item.gallery.first[IMAGE_SIZE],
            img2: item.gallery.second[IMAGE_SIZE],
            img3: item.gallery.third[IMAGE_SIZE],
          },
          others: item.others,
        };
      });
  }, [category, product]);

  const { data: item, isLoading } = useQuery([product], () => {
    if (filteredProduct.length === 0) {
      navigate("/");
      return null;
    }

    return filteredProduct[0];
  });

  if (isLoading) {
    return <p className="loading-message">Loading data...</p>;
  }

  if (!item || !category || !product) {
    return null;
  }

  return (
    <>
      <ProductItem item={item} />
      <Categories />
      <TextImage />
    </>
  );
};

export default ProductDetails;
