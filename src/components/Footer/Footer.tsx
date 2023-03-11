import { Link } from "react-router-dom";
import FacebookIcon from "../Icons/FacebookIcon";
import InstagramIcon from "../Icons/InstagramIcon";
import Logo from "../Icons/LogoIcon";
import TwitterIcon from "../Icons/TwitterIcon";

const Footer: React.FC = () => {
  return (
    <section className="footer">
      <div className="footer__container">
        <div className="footer__block"></div>
        <div className="footer__box footer__box--padding">
          <Logo />
          <ul className="footer__links">
            <li>
              <Link className="btn footer__link" to="/">
                HOME
              </Link>
            </li>
            <li>
              <Link className="btn footer__link" to="/">
                HEADPHONES
              </Link>
            </li>
            <li>
              <Link className="btn footer__link" to="/">
                SPEAKER
              </Link>
            </li>
            <li>
              <Link className="btn footer__link" to="/">
                EARPHONES
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer__box">
          <p className="footer__description">
            Audiophile is an all in one stop to fulfill your audio needs. We're a small team of
            music lovers and sound specialists who are devoted to helping you get the most out of
            personal audio. Come and visit our demo facility - we’re open 7 days a week.
          </p>
          <ul className="footer__social-links">
            <li>
              <a
                className="footer__social-link"
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FacebookIcon />
              </a>
            </li>
            <li>
              <a
                className="footer__social-link"
                href="https://www.twitter.com/"
                target="_blank"
                rel="noreferrer"
              >
                <TwitterIcon />
              </a>
            </li>
            <li>
              <a
                className="footer__social-link"
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <InstagramIcon />
              </a>
            </li>
          </ul>
        </div>
        <p className="footer__copyright">Copyright 2023. All Rights Reserved</p>
      </div>
    </section>
  );
};

export default Footer;
