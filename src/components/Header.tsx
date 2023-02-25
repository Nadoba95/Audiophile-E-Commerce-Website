import { Link } from "react-router-dom";

const logo: string = require("../assets/shared/desktop/logo.svg").default;
const cart: string = require("../assets/shared/desktop/icon-cart.svg").default;

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__container">
        <img className="header__logo" src={logo} alt="logo" />
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
          <img className="header__cart" src={cart} alt="cart" />
        </button>
      </div>
    </header>
  );
};

export default Header;
