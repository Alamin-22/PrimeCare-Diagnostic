import PropTypes from 'prop-types';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";
import { useState } from 'react';






const stripePromise = loadStripe(import.meta.env.VITE_Payment_Getway_Test);

const Payment = ({ price, _id, couponCode, discountRate }) => {

    const [discountedPrice, setDiscountedPrice] = useState(price);

    const PromoValidation = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const promoCode = form.get("promo");

        if (promoCode === couponCode) {
            const newDiscountedPrice = price - discountRate;
            setDiscountedPrice(newDiscountedPrice);
        } else {
            setDiscountedPrice(price);
        }
    }



    return (
        <div>
            <div>
                <h1 className='text-2xl text-center font-semibold'>Please Pay first to Book</h1>
                <form onChange={PromoValidation} className='flex my-5  items-center justify-evenly'>
                    <input name='promo' type="text" placeholder="Enter Promo code for Special Discount"
                        className="input input-sm input-accent w-1/2 max-w-xs" />
                    <p className='text-lg text-emerald-500'>Price: ${discountedPrice}</p>
                </form>
                <Elements stripe={stripePromise}>
                    <CheckOutForm _id={_id} price={discountedPrice}></CheckOutForm>
                </Elements>
            </div>
        </div>
    );
};
Payment.propTypes = {
    price: PropTypes.number,
    discountRate: PropTypes.number,
    _id: PropTypes.string,
    couponCode: PropTypes.string,
};
export default Payment;


