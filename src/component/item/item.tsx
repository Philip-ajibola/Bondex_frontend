import  {useContext, useEffect, useState} from "react";
import style from "./index.module.css";
import rating from "../../assets/Frame 566.png";
import FavoriteIcon from '@mui/icons-material/Favorite';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CustomButton from "../customeButton/customButton.tsx";
import Cart from "../../assets/Cart1 (1).png";
import { CartContext } from "../../context.tsx";

const Item = ({ item, onclick }:{item:CartItem,onclick:()=>void}) => {
    const { addToCart, addToWishList,removeFromWishList } = useContext(CartContext);
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        const savedState = localStorage.getItem(`wishlist-item-${item.id}`);
        if (savedState === "true") {
            setIsClicked(true);
        }
    }, [item.id]);

    const handleOnclick = () => {
        setIsClicked(prevIsClicked => {
            const newIsClicked = !prevIsClicked;
            if (newIsClicked) {
                addToWishList(item);
                localStorage.setItem(`wishlist-item-${item.id}`, "true");
            }else{
             removeFromWishList(item?.id-1);
             localStorage.setItem(`wishlist-item-${item.id}`, "false");
            }
            return newIsClicked;
        });
    };

    const handleAddToCart = () => {
        addToCart(item);
    };

    return (
        <div className={style.container}>
            <div className={style.product}>
                <div className={style.discount}>{item.discount}</div>
                <div className={style.productImg}>
                    <div className={style.realImage}>
                        <img className={style.realImage1} src={item.productImage} alt={"product"} />
                    </div>
                    <div className={style.logo}>
                        <VisibilityIcon onClick={onclick} style={{ color: 'white' }} />
                        <FavoriteIcon onClick={handleOnclick} style={{ color: isClicked ? 'red' : 'white' }} />
                    </div>
                    <CustomButton text={"Add To Cart"} style={style.customButton} image={Cart} onPress={handleAddToCart} />
                </div>
            </div>
            <div className={style.text}>
                <p className={style.productName}>{item.productName}</p>
                <div className={style.pricing}>
                    <p className={style.price}>{item.newPrice}</p>
                    <p className={style.oldPrice}>{item.oldPrice}</p>
                </div>
                <div>
                    <img src={rating} />
                </div>
            </div>
        </div>
    );
};

export default Item;
