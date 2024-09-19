import React, { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import axios from 'axios';
import './styles.css';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import {useNavigate} from "react-router-dom";
const PaymentForm = ({ amount }:{amount:number}) => {
    const stripe = useStripe();
    const navigate = useNavigate();
    const elements = useElements();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<any | null>(null);
    const [success, setSuccess] = useState(false);
    console.log(amount)
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setIsLoading(true);

        if (!stripe || !elements) {
            return;
        }

        const cardElement = elements.getElement(CardElement);

        try {
            const response = await axios.post('https://stripe-payment-svpx.onrender.com/create-payment-intent', {
                amount: amount

            });

            const { clientSecret } = response.data;
            console.log(response)
            const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: cardElement!,
                },
            });

            if (error) {
                setError(error.message);
            } else if (paymentIntent?.status === 'succeeded') {
                setSuccess(true);
                const cartItems:CartItem[] = [];
                localStorage.setItem('cartItems', JSON.stringify(cartItems));
                window.alert("Payment successful");
                navigate('/home')
            }


        } catch (err:any) {
            setError(err.response?.data?.error || 'An error occurred while processing your payment.');
        } finally {
            setIsLoading(false);
        }
    };

    const cardElementOptions = {
        style: {
            base: {
                fontSize: '16px',
                color: '#424770',
                letterSpacing: '0.025em',
                fontFamily: 'Source Code Pro, monospace',
                '::placeholder': {
                    color: '#aab7c4',
                },
            },
            invalid: {
                color: '#9e2146',
            },
        },
    };

    return (
        <form onSubmit={handleSubmit} className="payment-form">
            <CardElement options={cardElementOptions} className="card-element" />
            <button type="submit" className="submit-button" disabled={!stripe || isLoading}>
                {isLoading ? 'Processing...' : `Pay  ${'$' + amount}`}
            </button>
            {error && <div className="error-message">{error}</div>}
            {success && <div className="success-message">Payment successful!
            <DoneOutlineIcon style={{color:"#2a9d8f"}}/>
            </div>}
        </form>
    );
};

export default PaymentForm;
