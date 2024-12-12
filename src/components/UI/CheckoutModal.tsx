import { useState } from "react";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import CartItem from "../../models/cartItem";
import { cartActions } from "../../store/cart-slice";
import { formActions } from "../../store/formSlice";
import { uiActions } from "../../store/ui-slice";
import formatName from "../Helpers/formatItemName";
import formatPrice from "../Helpers/formatPrice";
import CheckedIcon from "../icons/CheckedIcon";
import Backdrop from "./Backdrop";

const CheckoutLayout: React.FC = () => {
    const [allItemsAreShowed, setAllItemsAreShowed] = useState(false);

    const cartItems = useSelector((state: { cart: { items: CartItem[] } }) => state.cart.items);
    const grandTotalPrice = useSelector((state: { cart: { grandTotal: number } }) => state.cart.grandTotal);
    const dispatch = useDispatch();

    function closeCheckoutModalHandler() {
        dispatch(uiActions.closeCheckoutModal());
        dispatch(formActions.setFormIsChecked(false));
        dispatch(formActions.setFormIsValid(false));
        dispatch(cartActions.clear());
    }

    let items;

    if (allItemsAreShowed) {
        items = cartItems?.map((item) => {
            return (
                <div key={item.id} className="cart__item">
                    <div className="cart__item-body">
                        <img
                            className="cart__item-img cart__item-img--size "
                            src={item.img}
                            alt={formatName(item.name)}
                        />
                        <div className="cart__item-desc">
                            <p className="cart__item-name">{formatName(item.name)}</p>
                            <p className="cart__item-price">{`$ ${formatPrice(item.price)}`}</p>
                        </div>
                    </div>
                    <div className="cart__amount cart__amount--gray">x{item.amount}</div>
                </div>
            );
        });

        items = (
            <>
                {items}
                {cartItems.length > 1 && (
                    <p className="checkout__show-less" onClick={() => setAllItemsAreShowed(false)}>
                        View less
                    </p>
                )}
            </>
        );
    } else {
        items = cartItems.slice(0, 1)?.map((item) => {
            return (
                <div key={item.id} className="cart__item">
                    <div className="cart__item-body">
                        <img
                            className="cart__item-img cart__item-img--size "
                            src={item.img}
                            alt={formatName(item.name)}
                        />
                        <div className="cart__item-desc">
                            <p className="cart__item-name">{formatName(item.name)}</p>
                            <p className="cart__item-price">{`$ ${formatPrice(item.price)}`}</p>
                        </div>
                    </div>
                    <div className="cart__amount cart__amount--gray">x{item.amount}</div>
                </div>
            );
        });

        items = (
            <>
                {items}
                {cartItems.length > 1 && (
                    <p className="checkout__more-items" onClick={() => setAllItemsAreShowed(true)}>{`and ${
                        cartItems.length - 1
                    } other item(s)`}</p>
                )}
            </>
        );
    }

    return (
        <div className="checkout-layout">
            <div className="checked-icon-wrapper">
                <CheckedIcon />
            </div>
            <h2 className="checkout-modal__title">THANK YOU FOR YOUR ORDER</h2>
            <p className="checkout-modal__desc">You will receive an email confirmation shortly.</p>
            <div className="checkout-modal__box">
                <div className="checkout-modal__item-list">{items}</div>
                <div className="checkout-modal__price-box">
                    <p className="checkout-modal__price-title">GRAND TOTAL</p>
                    <p className="checkout-modal__price">{`$ ${grandTotalPrice}`}</p>
                </div>
            </div>

            <Link className="btn cart__btn-checkout" to="/" onClick={closeCheckoutModalHandler}>
                BACK TO HOME
            </Link>
        </div>
    );
};

const portalElement = document.getElementById("overlays")! as HTMLDivElement;

const CheckoutModal: React.FC = () => {
    return (
        <>
            {createPortal(<Backdrop />, portalElement)}
            {createPortal(<CheckoutLayout />, portalElement)}
        </>
    );
};

export default CheckoutModal;
