import { Link } from "react-router-dom";

const PrimaryButton: React.FC<{ to?: string }> = ({ to }) => {
  let button;

  if (to) {
    button = (
      <Link className="primary-button" to={to}>
        SEE PRODUCT
      </Link>
    );
  } else {
    button = <button className="primary-button">ADD TO CART</button>;
  }

  return button;
};

export default PrimaryButton;
