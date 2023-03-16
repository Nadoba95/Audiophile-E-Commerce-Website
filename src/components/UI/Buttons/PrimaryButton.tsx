import { Link } from "react-router-dom";

const PrimaryButton: React.FC<{ to: string }> = ({ to }) => {
  return (
    <Link className="primary-button" to={to}>
      SEE PRODUCT
    </Link>
  );
};

export default PrimaryButton;
