import {data} from "../home/flash_sale/data.ts";
import WishListProduct from "./wishListProduct/wishListProduct.tsx";
import  style from './index.module.css'
import CustomButton from "../../component/customeButton/customButton.tsx";
import ForYou from "./forYou/forYou.tsx";
const WishList =() =>(
    <div className={style.container}>
        <div className={style.firstContainer}>
            <p className={style.wishListCount}>WishList(4)</p>
            <CustomButton text={"Move All To Bag"} style={style.button1}/>
        </div>
        <div className={style.secondContainer}>
            {data.slice(0, 4).map((product) => (
                <div>
                    <WishListProduct item={product}/>
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
                <div>
                    <ForYou item={product}/>
                </div>
            ))}
        </div>

    </div>
)

export default WishList