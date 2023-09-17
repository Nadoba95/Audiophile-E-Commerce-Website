import Form from "../components/Checkout/Form";
import Summary from "../components/Checkout/Summary";
import BackButton from "../components/UI/Buttons/BackButton";

const Checkout: React.FC = () => {
  return (
    <>
      <section className="checkout">
        <div className="checkout__container">
          <BackButton />
          <div className="checkout__box">
            <Form />
            <Summary />
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;
