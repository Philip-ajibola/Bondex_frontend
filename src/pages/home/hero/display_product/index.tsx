import {useEffect, useState} from "react";
import  {Products} from "../data.ts";
import {Product} from "../../product";
import {ProductAttribute} from "../../product";

export const DisplayProduct = () => {
    const [currentProductIndex, setCurrentProductIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentProductIndex(prevIndex => (prevIndex + 1) % Products.length);
        }, 60000); // 1 minute interval

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="product-display">
            <Product product={Products[currentProductIndex] as ProductAttribute} />
        </div>
    );
};