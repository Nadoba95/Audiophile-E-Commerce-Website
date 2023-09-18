import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";

const Backdrop: React.FC = () => {
  const dispatch = useDispatch();

  function closeModalsHandler() {
    dispatch(uiActions.closeCart());
  }

  return <div className="backdrop" onClick={closeModalsHandler}></div>;
};

export default Backdrop;
