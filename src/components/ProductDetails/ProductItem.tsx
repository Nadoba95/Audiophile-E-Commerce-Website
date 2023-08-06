import { useState } from "react";
import Product from "../../models/product";
import BackButton from "../UI/Buttons/BackButton";
import PrimaryButton from "../UI/Buttons/PrimaryButton";
import OtherProductsList from "./OtherProductsList";
import ProductItemFeatures from "./ProductItemFeatures";
import ProductItemImages from "./ProductItemImages";
import { useSelector } from "react-redux";
import CartItem from "../../models/cartItem";

const ProductItem: React.FC<{ item: Product }> = ({ item }) => {
  const [itemAmount, setItemAmount] = useState(1);

  let price: string | number | undefined;
  let img = `.${item.image}`;

  if (item.price) {
    if (item.price.toString().length > 3) {
      price = item.price.toString().slice(0, 1) + "," + item.price.toString().slice(1);
    } else {
      price = item.price;
    }
  }

  function increaseItemAmount() {
    setItemAmount((prevAmount) => prevAmount + 1);
  }

  function decreaseItemAmount() {
    setItemAmount((prevAmount) => {
      if (prevAmount === 1) return 1;

      return prevAmount - 1;
    });
  }

  const cartItems = useSelector((state: { cart: { items: CartItem[] } }) => state.cart.items);
  const total = useSelector((state: { cart: { totalPrice: number } }) => state.cart.totalPrice);

  function showItems() {
    console.log(cartItems);
    console.log(total);
  }

  return (
    <section className="product-item">
      <div className="product-item__container">
        <BackButton />
        <div className="product-item__box">
          <div className="product-item__img-wrapper" onClick={showItems}>
            <img className="product-item__img" src={img} alt={item.slug} />
          </div>
          <div className="product-item__card">
            {item.isNew && <p className="product-item__overline">NEW PRODUCT</p>}
            <h3 className="product-item__title">{item.name}</h3>
            <p className="product-item__description">{item.description}</p>
            <p className="product-item__price">$ {price}</p>
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
