import { Link } from "react-router-dom";
import ArrowRightIcon from "../Icons/ArrowRightIcon";

const headphonesImg: string = require("../../assets/shared/desktop/image-category-thumbnail-headphones.png");
const speakersImg: string = require("../../assets/shared/desktop/image-category-thumbnail-speakers.png");
const earphonesImg: string = require("../../assets/shared/desktop/image-category-thumbnail-earphones.png");

const Categories: React.FC = () => {
  return (
    <section className="categories">
      <Link className="btn categories__card" to="/">
        <img className="categories__img" src={headphonesImg} alt="headphones" />
        <h2 className="categories__title">HEADPHONES</h2>
        <div className="categories__link">
          Shop
          <ArrowRightIcon />
        </div>
      </Link>
      <Link className="btn categories__card" to="/">
        <img className="categories__img" src={speakersImg} alt="speakers" />
        <h2 className="categories__title">SPEAKERS</h2>
        <div className="categories__link">
          Shop
          <ArrowRightIcon />
        </div>
      </Link>
      <Link className="btn categories__card" to="/">
        <img className="categories__img" src={earphonesImg} alt="earphones" />
        <h2 className="categories__title">EARPHONES</h2>
        <div className="categories__link">
          Shop
          <ArrowRightIcon />
        </div>
      </Link>
    </section>
  );
};

export default Categories;
