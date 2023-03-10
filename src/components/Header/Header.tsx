import { Link } from "react-router-dom";
import CartIcon from "../icons/CartIcon";
import LogoIcon from "../icons/LogoIcon";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__container">
        <LogoIcon />
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
