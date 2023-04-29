import { Link } from "react-router-dom";
import ArrowRightIcon from "../Icons/ArrowRightIcon";
import headphonesImg from "../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakersImg from "../../assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphonesImg from "../../assets/shared/desktop/image-category-thumbnail-earphones.png";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";

const Categories: React.FC = () => {
  const dispatch = useDispatch();

  function closeNavModalHandler() {
    dispatch(uiActions.close());
  }

  return (
    <section className="categories">
      <Link className="btn categories__card" to="/headphones" onClick={closeNavModalHandler}>
        <img className="categories__img" src={headphonesImg} alt="headphones" />
        <h2 className="categories__title">HEADPHONES</h2>
        <div className="categories__link">
          SHOP
          <ArrowRightIcon />
        </div>
      </Link>
      <Link className="btn categories__card" to="/speakers" onClick={closeNavModalHandler}>
        <img className="categories__img" src={speakersImg} alt="speakers" />
        <h2 className="categories__title">SPEAKERS</h2>
        <div className="categories__link">
          SHOP
          <ArrowRightIcon />
        </div>
      </Link>
      <Link className="btn categories__card" to="/earphones" onClick={closeNavModalHandler}>
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
