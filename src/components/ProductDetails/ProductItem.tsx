import { useState } from "react";
import Product from "../../models/product";
import BackButton from "../UI/Buttons/BackButton";
import PrimaryButton from "../UI/Buttons/PrimaryButton";
import OtherProductsList from "./OtherProductsList";
import ProductItemFeatures from "./ProductItemFeatures";
import ProductItemImages from "./ProductItemImages";
import CartItem from "../../models/cartItem";
import formatPrice from "../Helpers/formatPrice";

const ProductItem: React.FC<{ item: Product }> = ({ item }) => {
  const [itemAmount, setItemAmount] = useState(1);

  let img = `.${item.image}`;

  function increaseItemAmount() {
    setItemAmount((prevAmount) => prevAmount + 1);
  }

  function decreaseItemAmount() {
    setItemAmount((prevAmount) => {
      if (prevAmount === 1) return 1;

      return prevAmount - 1;
    });
  }

  const cartItem: CartItem = {
    id: item.id,
    name: item.name,
    price: item.price!,
    amount: itemAmount,
    img: img,
  };

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
            <p className="product-item__price">$ {formatPrice(item.price!)}</p>
            <div className="product-item__actions__wrapper">
              <div className="product-item__actions">
                <button className="btn product-item__btn" onClick={decreaseItemAmount}>
                  -
                </button>
                <span className="product-item__counter">{itemAmount}</span>
                <button className="btn product-item__btn" onClick={increaseItemAmount}>
                  +
                </button>
              </div>
              <PrimaryButton cartItem={cartItem} />
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
