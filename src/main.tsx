import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ClerkProvider } from '@clerk/clerk-react';
import { CartProvider } from './context.tsx';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51PwDgM01eRG02uydJKT6Lp3sV6zXlj7Juo49vk60DnHL245UBfltkm2NO4LzutqfxtyZz77xZF4KpRpMXaNugQ3C00q43ZCVmW');

ReactDOM.createRoot(document.getElementById('root')!).render(
    <ClerkProvider publishableKey={'pk_test_c3R1bm5pbmctbmV3dC00NC5jbGVyay5hY2NvdW50cy5kZXYk'}>
        <BrowserRouter>
            <CartProvider>
                <Elements stripe={stripePromise}>
                    <App />
                </Elements>
            </CartProvider>
        </BrowserRouter>
    </ClerkProvider>
);
