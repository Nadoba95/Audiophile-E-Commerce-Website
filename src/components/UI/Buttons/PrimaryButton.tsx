import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { cartActions } from "../../../store/cart-slice";

const PrimaryButton: React.FC<{ to?: string }> = ({ to }) => {
  let button;

  const dispatch = useDispatch();

  function addItemToCart() {
    const item = {
      id: 1,
      name: "test",
      amount: 2,
      price: 1400,
    };

    dispatch(cartActions.addItem(item));
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
