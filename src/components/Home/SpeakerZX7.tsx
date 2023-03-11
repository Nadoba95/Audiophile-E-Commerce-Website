import { Link } from "react-router-dom";

const SpeakerZX7: React.FC = () => {
  return (
    <section className="speaker-zx7">
      <div className="speaker-zx7__container">
        <div className="speaker-zx7__card">
          <h2 className="speaker-zx7__title">ZX7 SPEAKER</h2>
          <Link className="secondary-button" to="/">
            SEE PRODUCT
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SpeakerZX7;
