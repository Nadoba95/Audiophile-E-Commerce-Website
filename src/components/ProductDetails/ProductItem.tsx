import Product from "../../models/product";
import BackButton from "../UI/Buttons/BackButton";
import PrimaryButton from "../UI/Buttons/PrimaryButton";
import OtherProductsList from "./OtherProductsList";
import ProductItemFeatures from "./ProductItemFeatures";
import ProductItemImages from "./ProductItemImages";

const ProductItem: React.FC<{ item: Product }> = ({ item }) => {
  let price: string | number | undefined;
  let img = `.${item.image}`;

  if (item.price) {
    if (item.price.toString().length > 3) {
      price = item.price.toString().slice(0, 1) + "," + item.price.toString().slice(1);
    } else {
      price = item.price;
    }
  }

  return (
    <section className="product-item">
      <div className="product-item__container">
        <BackButton />
        <div className="product-item__box">
          <div className="product-item__img-wrapper">
            <img className="product-item__img" src={img} alt={item.slug} />
          </div>
          <div className="product-item__card">
            {item.isNew && <p className="product-item__overline">NEW PRODUCT</p>}
            <h3 className="product-item__title">{item.name}</h3>
            <p className="product-item__description">{item.description}</p>
            <p className="product-item__price">$ {price}</p>
            <div className="product-item__actions__wrapper">
              <div className="product-item__actions">
                <button className="btn product-item__btn">-</button>
                <span className="product-item__counter">1</span>
                <button className="btn product-item__btn">+</button>
              </div>
              <PrimaryButton />
            </div>
          </div>
        </div>
        <ProductItemFeatures item={item} />
        <ProductItemImages item={item} />
        <OtherProductsList item={item} />
      </div>
    </section>
  );
};

export default ProductItem;
