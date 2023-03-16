import { Link } from "react-router-dom";

const SecondaryButton: React.FC<{ to: string }> = ({ to }) => {
  return (
    <Link className="secondary-button" to={to}>
      SEE PRODUCT
    </Link>
  );
};

export default SecondaryButton;
