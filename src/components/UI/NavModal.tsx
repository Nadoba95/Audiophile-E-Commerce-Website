import { createPortal } from "react-dom";
import Categories from "../Shared/Categories";
import Backdrop from "./Backdrop";

const NavLayout: React.FC = () => {
  return (
    <div className="nav-modal">
      <Categories />
    </div>
  );
};

const portalElement = document.getElementById("overlays")! as HTMLDivElement;

const NavModal: React.FC = () => {
  return (
    <>
      {createPortal(<Backdrop />, portalElement)}
      {createPortal(<NavLayout />, portalElement)}
    </>
  );
};

export default NavModal;
