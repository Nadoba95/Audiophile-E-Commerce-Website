import { useSelector } from "react-redux";
import CartItem from "../../models/cartItem";
import formatPrice from "../Helpers/formatPrice";

const SHIPPING = "$ 50";

const Summary: React.FC = () => {
  const cartItems = useSelector((state: { cart: { items: CartItem[] } }) => state.cart.items);
  const total = useSelector((state: { cart: { totalPrice: number } }) => state.cart.totalPrice);
  const vatPrice = useSelector((state: { cart: { vatPrice: number } }) => state.cart.vatPrice);
  const grandTotalPrice = useSelector((state: { cart: { grandTotal: number } }) => state.cart.grandTotal);

  return (
    <div className="summary">
      {cartItems.length > 0 && (
        <div className="cart__items">
          {cartItems?.map((item) => {
            const shorterName = item.name.replace("Headphones", "").replace("Earphones", "").replace("Speaker", "");

            return (
              <div className="cart__item">
                <div className="cart__item-body">
                  <img className="cart__item-img" src={item.img} alt={shorterName} />
                  <div className="cart__item-desc">
                    <p className="cart__item-name">{shorterName}</p>
                    <p className="cart__item-price">{`$ ${formatPrice(item.price)}`}</p>
                  </div>
                </div>
                <div className="cart__amount">x{item.amount}</div>
              </div>
            );
          })}
        </div>
      )}
      <div className="cart__footer">
        <p className="cart__total">TOTAL</p>
        <p className="cart__total-amount">{`$ ${formatPrice(total)}`}</p>
      </div>
      <div className="cart__footer">
        <p className="cart__total">SHIPPING</p>
        <p className="cart__total-amount">{SHIPPING}</p>
      </div>
      <div className="cart__footer">
        <p className="cart__total">VAT (INCLUDED)</p>
        <p className="cart__total-amount">{`$ ${formatPrice(vatPrice)}`}</p>
      </div>
      <div className="cart__footer">
        <p className="cart__total">TOTAL</p>
        <p className="cart__total-amount">{`$ ${formatPrice(grandTotalPrice)}`}</p>
      </div>

      <button className="btn cart__btn-checkout">CONTINUE & PAY</button>
    </div>
  );
};

export default Summary;
