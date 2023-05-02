import { useNavigate } from "react-router-dom";

const BackButton: React.FC = () => {
  const navigate = useNavigate();

  function goBackHandler() {
    navigate(-1);
  }

  return (
    <button className="btn back-button" onClick={goBackHandler}>
      Go Back
    </button>
  );
};

export default BackButton;
