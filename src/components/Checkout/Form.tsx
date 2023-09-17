import { useState } from "react";
import CashIcon from "../Icons/CashIcon";

const Form: React.FC = () => {
  const [eMoneyIsChecked, setEMoneyIsChecked] = useState(true);

  return (
    <form className="form">
      <h2 className="form__title">CHECKOUT</h2>

      <p className="form__overline">BILLING DETAILS</p>
      <div className="form__items-box">
        <div className="form__item">
          <label className="form__label" htmlFor="name">
            Name
          </label>
          <input className="form__input" id="name" type="text" placeholder="Alexei Ward" />
        </div>
        <div className="form__item">
          <label className="form__label" htmlFor="email">
            Email Address
          </label>
          <input className="form__input" id="email" type="email" placeholder="alexei@mail.com" />
        </div>
        <div className="form__item">
          <label className="form__label" htmlFor="phone">
            Phone Number
          </label>
          <input className="form__input" id="phone" type="number" placeholder="+1 202-555-0136" />
        </div>
      </div>

      <p className="form__overline form__overline--margin">SHIPPING INFO</p>
      <div className="form__item form__item--width">
        <label className="form__label" htmlFor="address">
          Address
        </label>
        <input className="form__input" id="address" type="text" placeholder="1137 Williams Avenue" />
      </div>
      <div className="form__items-box">
        <div className="form__item">
          <label className="form__label" htmlFor="zip">
            ZIP Code
          </label>
          <input className="form__input" id="zip" type="number" placeholder="10001" />
        </div>
        <div className="form__item">
          <label className="form__label" htmlFor="city">
            City
          </label>
          <input className="form__input" id="city" type="text" placeholder="New York" />
        </div>
        <div className="form__item">
          <label className="form__label" htmlFor="country">
            Country
          </label>
          <input className="form__input" id="country" type="text" placeholder="United States" />
        </div>
      </div>

      <p className="form__overline form__overline--margin">PAYMENT DETAILS</p>
      <div className="form__items-box">
        <label className="form__label">Payment Method</label>
        <div className="form__item">
          <div className="form__radio-box" onClick={() => setEMoneyIsChecked(true)}>
            <input
              className="form__input"
              id="e-money-payment"
              name="payment"
              type="radio"
              checked={eMoneyIsChecked ? true : false}
              readOnly
            />
            <label className="form__label" htmlFor="e-money-payment">
              e-Money
            </label>
          </div>
          <div className="form__radio-box" onClick={() => setEMoneyIsChecked(false)}>
            <input
              className="form__input"
              id="cash-payment"
              name="payment"
              type="radio"
              checked={!eMoneyIsChecked ? true : false}
              readOnly
            />
            <label className="form__label" htmlFor="cash-payment">
              Cash on Delivery
            </label>
          </div>
        </div>

        {eMoneyIsChecked && (
          <>
            <div className="form__item">
              <label className="form__label" htmlFor="e-money-number">
                e-Money Number
              </label>
              <input className="form__input" id="e-money-number" type="number" placeholder="238521993" />
            </div>
            <div className="form__item">
              <label className="form__label" htmlFor="e-money-pin">
                e-Money PIN
              </label>
              <input className="form__input" id="e-money-pin" type="number" placeholder="6891" />
            </div>
          </>
        )}
      </div>

      {!eMoneyIsChecked && (
        <div className="from__cash-wrapper">
          <CashIcon />
          <p className="form__cash-text">
            The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your
            residence. Just make sure your address is correct so that your order will not be cancelled.
          </p>
        </div>
      )}
    </form>
  );
};

export default Form;
