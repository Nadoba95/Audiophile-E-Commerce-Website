import Product from "../../models/product";
import CategoryItem from "./CategoryItem";

const CategoryList: React.FC<{ products: Product[] }> = ({ products }) => {
  return (
    <section className="category-items">
      <div className="category-items__container">
        {products.map((product) => (
          <CategoryItem key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default CategoryList;
