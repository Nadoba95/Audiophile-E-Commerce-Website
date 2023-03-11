import { Link } from "react-router-dom";

const EarphonesYX1: React.FC = () => {
  return (
    <section className="earphones-yx1">
      <div className="earphones-yx1__container">
        <div className="earphones-yx1__img"></div>
        <div className="earphones-yx1__card">
          <h2 className="earphones-yx1__title">YX1 EARPHONES</h2>
          <Link className="secondary-button" to="/">
            SEE PRODUCT
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EarphonesYX1;
