import Product from "../../models/product";
import PrimaryButton from "../UI/Buttons/PrimaryButton";

const CategoryItem: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="category-items__box">
      <div className="category-items__img-wrapper">
        <img className="category-items__img" src={product.image} alt={product.name} />
      </div>
      <div className="category-items__card">
        {product.isNew && <p className="category-items__overline">NEW PRODUCT</p>}
        <h3 className="category-items__title">{product.name}</h3>
        <p className="category-items__description">{product.description}</p>
        <PrimaryButton to={product.slug} />
      </div>
    </div>
  );
};

export default CategoryItem;
