import style from "./index.module.css";
import rating from "../../../assets/Frame 566.png";
import CustomButton from "../../../component/customeButton/customButton.tsx";
import Cart from "../../../assets/Cart1 (1).png";
import DeleteIcon from '@mui/icons-material/Delete';

const ForYou = ({item})=>{
    return (
        <div className={style.container}>
            <div className={style.product}>
                <div className={style.discount}>{item.discount}</div>
                <div className={style.productImg}>
                    <div className={style.realImage}>
                        <img  className={style.realImage1} src={item.productImage} alt={"product"}/>
                    </div>
                    <div className={style.logo}>
                        <DeleteIcon style={{color:'black'}}/>
                    </div>
                    <CustomButton text={"Add To Cart"} style={style.customButton} image={Cart}/>
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

export default ForYou;