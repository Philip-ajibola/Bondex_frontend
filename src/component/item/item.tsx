import style from "./index.module.css";
import eye from "../../assets/Fill Eye.png";
import heart from "../../assets/Fill Heart.png";
import rating from "../../assets/Frame 566.png";

 const Item = ({item})=>{
    return (
     <div className={style.container}>
            <div className={style.product}>
                <div className={style.discount}>{item.discount}</div>
                <div className={style.productImg}>
                    <div className={style.realImage}>
                        <img  className={style.realImage1} src={item.productImage} alt={"product"}/>
                    </div>
                    <div className={style.logo}>
                        <img src={eye} alt={"logo"} className={style.eye}/>
                        <img src={heart} alt={"logo"} className={style.heart}/>
                    </div>
                </div>
            </div>
        <div className={style.text}>
            <p className={style.productName}>{item.productName}</p>
            <div className={style.pricing}>
                <p className={style.price}>{item.newPrice}</p>
                <p className={style.oldPrice}>{item.oldPrice}</p>
            </div>
            <div>
                <img src={rating}/>
            </div>
        </div>
    </div>

 )
 }

export default Item;