import style from "./index.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
import CustomButton from "../../../component/customeButton/customButton.tsx";
import Cart from '../../../assets/Cart1 (1).png';
import {useContext, useEffect, useState} from "react";
import { CartContext } from "../../../context.tsx";
import {useNavigate} from "react-router-dom";

const WishListProduct = ({ item, onclick }:{item:CartItem,onclick:()=>void}) => {
    const navigate = useNavigate()
    const { removeFromWishList } = useContext(CartContext);
    const [isHidden, setIsHidden] = useState(false);

    useEffect(() => {
        const handlePopState = () => {
            navigate('/home');
        };

        window.addEventListener('popstate', handlePopState);

        return () => {
            window.removeEventListener('popstate', handlePopState);
        };
    }, [navigate]);
    const handleClick = (item:CartItem) => {
        setIsHidden(true);
        removeFromWishList(item?.id - 1);
        localStorage.setItem(`wishlist-item-${item.id}`, "false");
    };

    return (
        !isHidden && (
            <div className={style.container}>
                <div className={style.product}>
                    <div className={style.discount}>{item.discount}</div>
                    <div className={style.productImg}>
                        <div className={style.realImage}>
                            <img className={style.realImage1} src={item.productImage} alt={"product"} />
                        </div>
                        <div className={style.logo}>
                            <DeleteIcon onClick={() => handleClick(item)} style={{ color: 'black' }} />
                        </div>
                        <CustomButton text={"Add To Cart"} style={style.customButton} image={Cart} onPress={onclick} />
                    </div>
                </div>
                <div className={style.text}>
                    <p className={style.productName}>{item.productName}</p>
                    <div className={style.pricing}>
                        <p className={style.price}>{item.newPrice}</p>
                        <p className={style.oldPrice}>{item.oldPrice}</p>
                    </div>
                </div>
            </div>
        )
    );
};

export default WishListProduct;
