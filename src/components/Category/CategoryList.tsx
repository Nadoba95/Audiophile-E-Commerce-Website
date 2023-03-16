import Product from "../../models/product";
import CategoryItem from "./CategoryItem";

const CategoryList: React.FC<{ products: Product[] }> = ({ products }) => {
  return (
    <section className="category-items">
      <div className="category-items__container">
        {products.map((product, i) => (
          <CategoryItem key={i} product={product} />
        ))}
      </div>
    </section>
  );
};

export default CategoryList;
