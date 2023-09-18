import { createPortal } from "react-dom";
import Backdrop from "./Backdrop";
import Cart from "../Cart/Cart";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";

const CartLayout: React.FC = () => {
  const dispatch = useDispatch();

  function closeModalsHandler() {
    dispatch(uiActions.closeCart());
  }

  return (
    <div className="cart-layout" onClick={closeModalsHandler}>
      <Cart />
    </div>
  );
};

const portalElement = document.getElementById("overlays")! as HTMLDivElement;

const cartModal: React.FC = () => {
  return (
    <>
      {createPortal(<Backdrop />, portalElement)}
      {createPortal(<CartLayout />, portalElement)}
    </>
  );
};

export default cartModal;
