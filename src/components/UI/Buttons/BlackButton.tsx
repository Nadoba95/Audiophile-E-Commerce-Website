import { Link } from "react-router-dom";

const BlackButton: React.FC<{ to: string }> = ({ to }) => {
  return (
    <Link className="black-button" to={to}>
      SEE PRODUCT
    </Link>
  );
};

export default BlackButton;
