import { createPortal } from "react-dom";
import Backdrop from "./Backdrop";
import Cart from "../Cart/Cart";

const CartLayout: React.FC = () => {
  return (
    <div className="cart-layout">
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
