import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__card">
          <p className="hero__overline">NEW PRODUCT</p>
          <h1 className="hero__title">XX99 Mark II Headphones</h1>
          <p className="hero__description">
            Experience natural, lifelike audio and exceptional build quality made for the passionate
            music enthusiast.
          </p>
          <Link className="primary-button" to="/">
            SEE PRODUCT
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
