import { Link } from "react-router-dom";

const circlesIcon: string = require("../../assets/home/desktop/pattern-circles.svg").default;
const speakerImg: string = require("../../assets/home/desktop/image-speaker-zx9.png");

const SpeakerZX9: React.FC = () => {
  return (
    <section className="speaker-zx9">
      <div className="speaker-zx9__container">
        <img className="speaker-zx9__circles-icon" src={circlesIcon} alt="circles" />
        <div className="speaker-zx9__box">
          <img className="speaker-zx9__img" src={speakerImg} alt="speaker" />
          <div className="speaker-zx9__card">
            <h2 className="speaker-zx9__title">ZX9 SPEAKER</h2>
            <p className="speaker-zx9__description">
              Upgrade to premium speakers that are phenomenally built to deliver truly remarkable
              sound.
            </p>
            <Link className="black-button" to="/">
              SEE PRODUCT
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakerZX9;
