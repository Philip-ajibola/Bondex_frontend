// import image from "*.jpeg";
// import product1 from "*.jpeg";
import style from './index.module.css'
import img from '../../../assets/icons arrow-right.png'
import React from "react";

export interface ProductAttribute{
    image_logo: string,
    image: string,
    product_name:string,
    discount:string
}

interface ProductProps{
    product: ProductAttribute;
}
export const Product: React.FC<ProductProps> = ({product })=>{
    return (
        <>
            <div className={style.productDescription}>
                <div className={style.description} >
                    <div className={style.logo}>
                        <img src={product.image_logo} alt="product" className={style.productLogo}/>
                        <p className={style.p}>{product.product_name}</p>
                    </div>
                    <p className={`${style.p} ${style.discount}`}>{product.discount}</p>
                    <p className={`${style.p} ${style.discount} ${style.discount1}`}>{product.discount1}</p>
                    <div className={style.shopNow}>
                        <p className={style.p}>Shop Now</p>
                        <img src={img} className={style.img}/>
                    </div>
                </div>
                <div className={style.imgDiv}>
                    <img src={product.image} alt="product" />
                </div>
            </div>
        </>
    )
}