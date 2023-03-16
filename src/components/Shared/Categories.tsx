import { Link } from "react-router-dom";
import ArrowRightIcon from "../Icons/ArrowRightIcon";
import headphonesImg from "../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakersImg from "../../assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphonesImg from "../../assets/shared/desktop/image-category-thumbnail-earphones.png";

const Categories: React.FC = () => {
  return (
    <section className="categories">
      <Link className="btn categories__card" to="/headphones">
        <img className="categories__img" src={headphonesImg} alt="headphones" />
        <h2 className="categories__title">HEADPHONES</h2>
        <div className="categories__link">
          SHOP
          <ArrowRightIcon />
        </div>
      </Link>
      <Link className="btn categories__card" to="/speakers">
        <img className="categories__img" src={speakersImg} alt="speakers" />
        <h2 className="categories__title">SPEAKERS</h2>
        <div className="categories__link">
          SHOP
          <ArrowRightIcon />
        </div>
      </Link>
      <Link className="btn categories__card" to="/earphones">
        <img className="categories__img" src={earphonesImg} alt="earphones" />
        <h2 className="categories__title">EARPHONES</h2>
        <div className="categories__link">
          SHOP
          <ArrowRightIcon />
        </div>
      </Link>
    </section>
  );
};

export default Categories;
