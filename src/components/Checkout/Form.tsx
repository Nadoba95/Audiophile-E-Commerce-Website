import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import useInput from "../../hooks/useInput";
import { formActions } from "../../store/formSlice";
import CashIcon from "../icons/CashIcon";

const isNotEmpty = (value: string) => value.trim() !== "";
const isEmail = (value: string) => value.trim().includes("@");
const hasFourDigit = (value: string) => /^[0-9]{4}$/g.test(value);
const hasFiveDigit = (value: string) => /^[0-9]{5}$/g.test(value);
const hasNineDigit = (value: string) => /^[0-9]{9}$/g.test(value);
const isPhoneNumber = (value: string) => /^[0-9+-]{10,13}$/g.test(value);

const Form: React.FC = () => {
    const [eMoneyIsChecked, setEMoneyIsChecked] = useState(true);

    const formIsChecked = useSelector((state: { form: { formIsChecked: Boolean } }) => state.form.formIsChecked);
    const dispatch = useDispatch();

    const { value: enteredName, isValid: nameIsValid, valueChangedHandler: nameChangeHandler } = useInput(isNotEmpty);
    const { value: enteredEmail, isValid: emailIsValid, valueChangedHandler: emailChangeHandler } = useInput(isEmail);
    const {
        value: enteredPhone,
        isValid: phoneIsValid,
        valueChangedHandler: phoneChangeHandler,
    } = useInput(isPhoneNumber);
    const {
        value: enteredAddress,
        isValid: addressIsValid,
        valueChangedHandler: addressChangeHandler,
    } = useInput(isNotEmpty);
    const { value: enteredZip, isValid: zipIsValid, valueChangedHandler: zipChangeHandler } = useInput(hasFiveDigit);
    const { value: enteredCity, isValid: cityIsValid, valueChangedHandler: cityChangeHandler } = useInput(isNotEmpty);
    const {
        value: enteredCountry,
        isValid: countryIsValid,
        valueChangedHandler: countryChangeHandler,
    } = useInput(isNotEmpty);
    const {
        value: enteredMoneyNumber,
        isValid: moneyNumberIsValid,
        valueChangedHandler: moneyNumberChangeHandler,
    } = useInput(hasNineDigit);
    const {
        value: enteredMoneyPin,
        isValid: moneyPinIsValid,
        valueChangedHandler: moneyPinChangeHandler,
    } = useInput(hasFourDigit);

    if (nameIsValid && emailIsValid && phoneIsValid && addressIsValid && cityIsValid && countryIsValid && zipIsValid) {
        if (eMoneyIsChecked && moneyNumberIsValid && moneyPinIsValid) {
            dispatch(formActions.setFormIsValid(true));
        } else if (!eMoneyIsChecked) {
            dispatch(formActions.setFormIsValid(true));
        }
    }

    const nameClasses = !nameIsValid && formIsChecked ? "form__item invalid" : "form__item";
    const emailClasses = !emailIsValid && formIsChecked ? "form__item invalid" : "form__item";
    const phoneClasses = !phoneIsValid && formIsChecked ? "form__item invalid" : "form__item";
    const addressClasses =
        !addressIsValid && formIsChecked ? "form__item form__item--width invalid" : "form__item form__item--width";
    const cityClasses = !cityIsValid && formIsChecked ? "form__item invalid" : "form__item";
    const countryClasses = !countryIsValid && formIsChecked ? "form__item invalid" : "form__item";
    const zipClasses = !zipIsValid && formIsChecked ? "form__item invalid" : "form__item";
    const moneyNumberClasses = !moneyNumberIsValid && formIsChecked ? "form__item invalid" : "form__item";
    const moneyPinClasses = !moneyPinIsValid && formIsChecked ? "form__item invalid" : "form__item";

    return (
        <form className="form">
            <h2 className="form__title">CHECKOUT</h2>

            <p className="form__overline">BILLING DETAILS</p>
            <div className="form__items-box">
                <div className={nameClasses}>
                    <label className="form__label" htmlFor="name">
                        Name
                    </label>
                    {!nameIsValid && formIsChecked && <span className="form__item-error-msg">Enter valid name</span>}
                    <input
                        className="form__input"
                        id="name"
                        type="text"
                        placeholder="Alexei Ward"
                        value={enteredName}
                        onChange={nameChangeHandler}
                    />
                </div>
                <div className={emailClasses}>
                    <label className="form__label" htmlFor="email">
                        Email Address
                    </label>
                    {!emailIsValid && formIsChecked && <span className="form__item-error-msg">Enter valid email</span>}
                    <input
                        className="form__input"
                        id="email"
                        type="email"
                        placeholder="alexei@mail.com"
                        value={enteredEmail}
                        onChange={emailChangeHandler}
                    />
                </div>
                <div className={phoneClasses}>
                    <label className="form__label" htmlFor="phone">
                        Phone Number
                    </label>
                    {!phoneIsValid && formIsChecked && (
                        <span className="form__item-error-msg">Enter valid phone number</span>
                    )}
                    <input
                        className="form__input"
                        id="phone"
                        type="text"
                        placeholder="+1 202-555-0136"
                        value={enteredPhone}
                        onChange={phoneChangeHandler}
                    />
                </div>
            </div>

            <p className="form__overline form__overline--margin">SHIPPING INFO</p>
            <div className={addressClasses}>
                <label className="form__label" htmlFor="address">
                    Address
                </label>
                {!addressIsValid && formIsChecked && <span className="form__item-error-msg">Enter valid address</span>}
                <input
                    className="form__input"
                    id="address"
                    type="text"
                    placeholder="1137 Williams Avenue"
                    value={enteredAddress}
                    onChange={addressChangeHandler}
                />
            </div>
            <div className="form__items-box">
                <div className={zipClasses}>
                    <label className="form__label" htmlFor="zip">
                        ZIP Code
                    </label>
                    {!zipIsValid && formIsChecked && <span className="form__item-error-msg">Enter valid zip code</span>}
                    <input
                        className="form__input"
                        id="zip"
                        type="text"
                        placeholder="10001"
                        value={enteredZip}
                        onChange={zipChangeHandler}
                    />
                </div>
                <div className={cityClasses}>
                    <label className="form__label" htmlFor="city">
                        City
                    </label>
                    {!cityIsValid && formIsChecked && <span className="form__item-error-msg">Enter valid city</span>}
                    <input
                        className="form__input"
                        id="city"
                        type="text"
                        placeholder="New York"
                        value={enteredCity}
                        onChange={cityChangeHandler}
                    />
                </div>
                <div className={countryClasses}>
                    <label className="form__label" htmlFor="country">
                        Country
                    </label>
                    {!countryIsValid && formIsChecked && (
                        <span className="form__item-error-msg">Enter valid country</span>
                    )}
                    <input
                        className="form__input"
                        id="country"
                        type="text"
                        placeholder="United States"
                        value={enteredCountry}
                        onChange={countryChangeHandler}
                    />
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
                        <div className={moneyNumberClasses}>
                            <label className="form__label" htmlFor="e-money-number">
                                e-Money Number
                            </label>
                            {!moneyNumberIsValid && formIsChecked && (
                                <span className="form__item-error-msg">Enter valid money number</span>
                            )}
                            <input
                                className="form__input"
                                id="e-money-number"
                                type="text"
                                placeholder="238521993"
                                value={enteredMoneyNumber}
                                onChange={moneyNumberChangeHandler}
                            />
                        </div>
                        <div className={moneyPinClasses}>
                            <label className="form__label" htmlFor="e-money-pin">
                                e-Money PIN
                            </label>
                            {!moneyPinIsValid && formIsChecked && (
                                <span className="form__item-error-msg">Enter valid money PIN</span>
                            )}
                            <input
                                className="form__input"
                                id="e-money-pin"
                                type="text"
                                placeholder="6891"
                                value={enteredMoneyPin}
                                onChange={moneyPinChangeHandler}
                            />
                        </div>
                    </>
                )}
            </div>

            {!eMoneyIsChecked && (
                <div className="from__cash-wrapper">
                    <CashIcon />
                    <p className="form__cash-text">
                        The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at
                        your residence. Just make sure your address is correct so that your order will not be cancelled.
                    </p>
                </div>
            )}
        </form>
    );
};

export default Form;
