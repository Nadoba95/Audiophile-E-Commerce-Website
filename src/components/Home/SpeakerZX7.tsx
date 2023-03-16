import SecondaryButton from "../UI/Buttons/SecondaryButton";

const SpeakerZX7: React.FC = () => {
  return (
    <section className="speaker-zx7">
      <div className="speaker-zx7__container">
        <div className="speaker-zx7__card">
          <h2 className="speaker-zx7__title">ZX7 SPEAKER</h2>
          <SecondaryButton to="/" />
        </div>
      </div>
    </section>
  );
};

export default SpeakerZX7;
