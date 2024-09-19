import React, { createContext, useState, ReactNode, useEffect } from 'react';

interface CartItem {
    id: number;
    productImage: string;
    productName: string;
    newPrice: string;
    oldPrice: string;
    description: string;
}

interface CartContextType {
    cartItems: CartItem[];
    wishList: CartItem[];
    addToCart: (item: CartItem) => void;
    addToWishList: (item: CartItem) => void;
    removeFromWishList: (index: number) => void;
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
            return updatedCart;
        });
    };

    const addToWishList = (item: CartItem) => {
        setWishList(prev => {
            const updatedWishList = [...prev, item];
            saveToLocalStorage('wishList', updatedWishList);
            return updatedWishList;
        });
    };

    const removeFromWishList = (index: number) => {
        setWishList(prev => {
            const updatedWishList = prev.filter((_, i) => i !== index);
            saveToLocalStorage('wishList', updatedWishList);
            return updatedWishList;
        });
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, wishList, addToWishList, removeFromWishList }}>
            {children}
        </CartContext.Provider>
    );
};

export { CartContext, CartProvider };
