import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { cartActions } from "../../../store/cart-slice";
import CartItem from "../../../models/cartItem";

const PrimaryButton: React.FC<{ to?: string; cartItem?: CartItem }> = ({ to, cartItem }) => {
  let button;

  const dispatch = useDispatch();

  function addItemToCart() {
    dispatch(cartActions.addItem(cartItem!));
  }

  if (to) {
    button = (
      <Link className="primary-button" to={to}>
        SEE PRODUCT
      </Link>
    );
  } else {
    button = (
      <button className="primary-button" onClick={addItemToCart}>
        ADD TO CART
      </button>
    );
  }

  return button;
};

export default PrimaryButton;
