import { Link } from "react-router-dom";
import CartIcon from "../Icons/CartIcon";
import HamburgerIcon from "../Icons/HamburgerIcon";
import LogoIcon from "../Icons/LogoIcon";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__box">
          <button className="btn header__menu-btn">
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
              <Link className="btn header__link" to="/">
                HEADPHONES
              </Link>
            </li>
            <li>
              <Link className="btn header__link" to="/">
                SPEAKERS
              </Link>
            </li>
            <li>
              <Link className="btn header__link" to="/">
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
