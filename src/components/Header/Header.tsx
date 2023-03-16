import { Link } from "react-router-dom";
import { useDispatch } from "react-redux/es/exports";
import { uiActions } from "../../store/ui-slice";
import CartIcon from "../Icons/CartIcon";
import HamburgerIcon from "../Icons/HamburgerIcon";
import LogoIcon from "../Icons/LogoIcon";

const Header: React.FC = () => {
  const dispatch = useDispatch();

  function toggleNavHandler() {
    dispatch(uiActions.toggle());
  }

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__box">
          <button className="btn header__menu-btn" onClick={toggleNavHandler}>
            <HamburgerIcon />
          </button>
          <LogoIcon />
        </div>
        <nav className="header__nav">
          <ul className="header__list">
            <li>
              <Link className="btn header__link" to="/">
                HOME
              </Link>
            </li>
            <li>
              <Link className="btn header__link" to="/headphones">
                HEADPHONES
              </Link>
            </li>
            <li>
              <Link className="btn header__link" to="/speakers">
                SPEAKERS
              </Link>
            </li>
            <li>
              <Link className="btn header__link" to="/earphones">
                EARPHONES
              </Link>
            </li>
          </ul>
        </nav>
        <button className="btn" type="button">
          <CartIcon />
        </button>
      </div>
    </header>
  );
};

export default Header;
