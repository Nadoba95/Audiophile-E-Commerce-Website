import SecondaryButton from "../UI/Buttons/SecondaryButton";

const EarphonesYX1: React.FC = () => {
  return (
    <section className="earphones-yx1">
      <div className="earphones-yx1__container">
        <div className="earphones-yx1__img"></div>
        <div className="earphones-yx1__card">
          <h2 className="earphones-yx1__title">YX1 EARPHONES</h2>
          <SecondaryButton to="/earphones/yx1-earphones" />
        </div>
      </div>
    </section>
  );
};

export default EarphonesYX1;
