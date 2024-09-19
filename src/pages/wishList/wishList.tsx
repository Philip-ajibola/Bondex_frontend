import data from "../home/flash_sale/data.ts";
import WishListProduct from "./wishListProduct/wishListProduct.tsx";
import  style from './index.module.css'
import CustomButton from "../../component/customeButton/customButton.tsx";
import ForYou from "./forYou/forYou.tsx";
import {useLocation} from "react-router-dom";
import {useContext} from "react";
import {CartContext} from "../../context.tsx";
const WishList =() => {
    const location = useLocation();
    const { state } = location;
    const product = state?.data;
    const {wishList,addToWishList } = useContext(CartContext);
    return (
        <div className={style.container}>
            <div className={style.firstContainer}>
                <p className={style.wishListCount}>WishList({wishList.length})</p>
                <CustomButton text={"Move All To Bag"} style={style.button1}/>
            </div>
            <div className={style.secondContainer}>
                {product.map(({product}:CartItem) => (
                    <div className={style.product}>
                        <WishListProduct item={product} onclick={()=>addToWishList(product)}/>
                    </div>
                ))}
            </div>
            <div className={style.thirdContainer}>
                <div className={style.description}>
                    <div className={style.redDiv}></div>
                    <p>Just For You</p>
                </div>
                <CustomButton text={"See All"} style={style.button1}/>
            </div>
            <div className={style.forthContainer}>
                {data.slice(4, 8).map((product) => (
                    <div className={style.product}>
                        <ForYou item={product}/>
                    </div>
                ))}
            </div>

        </div>
    )


}

export default WishList