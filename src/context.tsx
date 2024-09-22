import React, { createContext, useState, ReactNode, useEffect } from 'react';
import {toast} from "react-toastify";

interface CartItem {
    id: number;
    productImage: string;
    productName: string;
    newPrice: string;
    oldPrice: string;
    description: string;
    discount:string;
}

interface CartContextType {
    cartItems: CartItem[];
    wishList: CartItem[];
    addToCart: (item: CartItem) => void;
    addToWishList: (item: CartItem) => void;
    removeFromWishList: (index: number ) => void;
    cancelOrder: () => void;
    afterSuccessFulPayment : ()=>void;
}

interface CartProviderProps {
    children: ReactNode;
}

const CartContext = createContext<CartContextType>({
    cartItems: [],
    wishList: [],
    addToCart: () => {},
    addToWishList: () => {},
    removeFromWishList: () => {},
    cancelOrder: () => {},
    afterSuccessFulPayment:()=>{}
});

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [wishList, setWishList] = useState<CartItem[]>([]);

    const loadFromLocalStorage = (key: string) => {
        const savedData = localStorage.getItem(key);
        return savedData ? JSON.parse(savedData) : [];
    };

    useEffect(() => {
        const savedCartItems = loadFromLocalStorage('cartItems');
        const savedWishList = loadFromLocalStorage('wishList');
        setCartItems(savedCartItems);
        setWishList(savedWishList);
    }, []);

    const saveToLocalStorage = (key: string, data: any) => {
        localStorage.setItem(key, JSON.stringify(data));
    };

    const addToCart = (item: CartItem) => {
        setCartItems(prev => {
            const updatedCart = [...prev, item];
            saveToLocalStorage('cartItems', updatedCart);
            toast.success(`You Added ${item.productName} to Your Cart`)

            return updatedCart;
        });
    };
    const afterSuccessFulPayment = ()=>{
        setCartItems([]);
        localStorage.removeItem('cartItems');
    }
    const cancelOrder = ()=>{
        if(cartItems.length===0) {
            toast.info("There is no Item in the Cart");
            return;
        }
        setCartItems([]);
        localStorage.removeItem('cartItems');
        toast.info("Your order has been canceled and the cart is empty.");
    }

    const addToWishList = (item: CartItem) => {
        setWishList(prev => {
            const updatedWishList = [...prev, item];
            saveToLocalStorage('wishList', updatedWishList);
            toast.success(`You Added ${item.productName} to Your Wish List`)
            return updatedWishList;
        });
    };

    const removeFromWishList = (index: number) => {
        setWishList(prev => {
            const updatedWishList = prev.filter((_, i) => i !== index);
            saveToLocalStorage('wishList', updatedWishList);
            toast.warning(`You Removed An item From Your WishList`)
            return updatedWishList;
        });
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, wishList, addToWishList, removeFromWishList,cancelOrder,afterSuccessFulPayment }}>
            {children}
        </CartContext.Provider>
    );
};

export { CartContext, CartProvider };
