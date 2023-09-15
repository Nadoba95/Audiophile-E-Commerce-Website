import { useDispatch, useSelector } from "react-redux";
import CartProduct from "./CartProduct";
import { cartActions } from "../../store/cart-slice";
import CartItem from "../../models/cartItem";
import formatPrice from "../Helpers/formatPrice";
import { Link } from "react-router-dom";
import { uiActions } from "../../store/ui-slice";

const Cart: React.FC = () => {
  const cartItems = useSelector((state: { cart: { items: CartItem[] } }) => state.cart.items);
  const total = useSelector((state: { cart: { totalPrice: number } }) => state.cart.totalPrice);
  const dispatch = useDispatch();

  function removeAllItemsHandler(): void {
    dispatch(cartActions.removeAll());
  }

  function closeCartHandler(): void {
    dispatch(uiActions.closeCart());
  }

  return (
    <div className="cart">
      <div className="cart__header">
        <span className="cart__amount">{`CART (${cartItems.length})`}</span>
        <button className="btn cart__remove" onClick={removeAllItemsHandler}>
          Remove all
        </button>
      </div>
      {cartItems.length > 0 && (
        <div className="cart__items">
          {cartItems.map((item) => (
            <CartProduct key={item.id} item={item} />
          ))}
        </div>
      )}
      <div className="cart__footer">
        <p className="cart__total">TOTAL</p>
        <p className="cart__total-amount">{`$ ${formatPrice(total)}`}</p>
      </div>
      {cartItems.length > 0 && (
        <Link className="btn cart__btn-checkout" to="/checkout" onClick={closeCartHandler}>
          CHECKOUT
        </Link>
      )}
    </div>
  );
};

export default Cart;
