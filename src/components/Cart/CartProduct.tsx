import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import CartItem from "../../models/cartItem";
import formatPrice from "../Helpers/formatPrice";
import formatName from "../Helpers/formatItemName";

const CartProduct: React.FC<{ item: CartItem }> = ({ item }) => {
  const dispatch = useDispatch();

  function increaseItemAmount(item: CartItem): void {
    const newItem: CartItem = { ...item, amount: 1 };
    dispatch(cartActions.addItem(newItem));
  }

  function decreaseItemAmount(item: CartItem): void {
    const newItem: CartItem = { ...item, amount: 1 };
    dispatch(cartActions.removeItem(newItem));
  }

  return (
    <div className="cart__item">
      <div className="cart__item-body">
        <img className="cart__item-img" src={item.img} alt={formatName(item.name)} />
        <div className="cart__item-desc">
          <p className="cart__item-name">{formatName(item.name)}</p>
          <p className="cart__item-price">{`$ ${formatPrice(item.price)}`}</p>
        </div>
      </div>
      <div className="cart__item-actions">
        <button className="btn cart__item-btn" onClick={decreaseItemAmount.bind(null, item)}>
          -
        </button>
        <span className="cart__item-counter">{item.amount}</span>
        <button className="btn cart__item-btn" onClick={increaseItemAmount.bind(null, item)}>
          +
        </button>
      </div>
    </div>
  );
};

export default CartProduct;
