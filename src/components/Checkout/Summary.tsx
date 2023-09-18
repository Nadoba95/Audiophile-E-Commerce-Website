import { useDispatch, useSelector } from "react-redux";
import CartItem from "../../models/cartItem";
import formatPrice from "../Helpers/formatPrice";
import CheckoutModal from "../UI/CheckoutModal";
import { uiActions } from "../../store/ui-slice";
import formatName from "../Helpers/formatItemName";
import { formActions } from "../../store/formSlice";

const SHIPPING = "$ 50";

const Summary: React.FC = () => {
  const cartItems = useSelector((state: { cart: { items: CartItem[] } }) => state.cart.items);
  const total = useSelector((state: { cart: { totalPrice: number } }) => state.cart.totalPrice);
  const vatPrice = useSelector((state: { cart: { vatPrice: number } }) => state.cart.vatPrice);
  const grandTotalPrice = useSelector((state: { cart: { grandTotal: number } }) => state.cart.grandTotal);
  const checkoutModalIsVisible = useSelector((state: { ui: { checkoutModalIsVisible: boolean } }) => state.ui.checkoutModalIsVisible);
  const formIsValid = useSelector((state: { form: { formIsValid: Boolean } }) => state.form.formIsValid);
  const dispatch = useDispatch();

  function paymentHandler() {
    dispatch(formActions.setFormIsChecked(true));

    if (formIsValid) {
      dispatch(uiActions.openCheckoutModal());
    }
  }

  return (
    <div className="summary">
      {cartItems.length > 0 && (
        <div className="cart__items">
          {cartItems?.map((item) => {
            return (
              <div key={item.id} className="cart__item">
                <div className="cart__item-body">
                  <img className="cart__item-img" src={item.img} alt={formatName(item.name)} />
                  <div className="cart__item-desc">
                    <p className="cart__item-name">{formatName(item.name)}</p>
                    <p className="cart__item-price">{`$ ${formatPrice(item.price)}`}</p>
                  </div>
                </div>
                <div className="cart__amount cart__amount--gray">x{item.amount}</div>
              </div>
            );
          })}
        </div>
      )}
      <div className="cart__footer-box">
        <p className="cart__total">TOTAL</p>
        <p className="cart__total-amount">{`$ ${formatPrice(total)}`}</p>
      </div>
      <div className="cart__footer-box">
        <p className="cart__total">SHIPPING</p>
        <p className="cart__total-amount">{SHIPPING}</p>
      </div>
      <div className="cart__footer-box">
        <p className="cart__total">VAT (INCLUDED)</p>
        <p className="cart__total-amount">{`$ ${formatPrice(vatPrice)}`}</p>
      </div>
      <div className="cart__footer-box">
        <p className="cart__total">TOTAL</p>
        <p className="cart__total-amount cart__total-amount--orange">{`$ ${formatPrice(grandTotalPrice)}`}</p>
      </div>

      <button className="btn cart__btn-checkout" disabled={cartItems.length > 0 ? false : true} onClick={paymentHandler}>
        CONTINUE & PAY
      </button>
      {checkoutModalIsVisible && <CheckoutModal />}
    </div>
  );
};

export default Summary;
