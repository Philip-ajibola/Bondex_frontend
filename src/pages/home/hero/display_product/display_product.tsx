import {useEffect, useState} from "react";
import  {Products} from "../data.ts";
import {Product} from "../../product/product.tsx";
import {ProductAttribute} from "../../product/product.tsx";
import style from './index.module.css'

export const DisplayProduct = () => {
    const [currentProductIndex, setCurrentProductIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentProductIndex(prevIndex => (prevIndex + 1) % Products.length);
        }, 60000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={style.container}>
            <Product product={Products[currentProductIndex] as ProductAttribute} />
        </div>
    );
};