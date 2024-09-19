import image from '../../assets/Vector.png';
import profile from '../../assets/user.png'
import image1 from '../../assets/Vector (1).png'
import image2 from '../../assets/Cart1.png'
import style from './index.module.css'
import menuLogo from '../../assets/menu_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png'
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useAuth} from "@clerk/clerk-react";
import {useContext} from "react";
import {CartContext} from "../../context.tsx";

export const Header = ()=>{
    const { cartItems,wishList } = useContext(CartContext);
    const location = useLocation();
    const{signOut} = useAuth();
    const navigate = useNavigate();

    const handleClickWishList = ()=>{
        if(wishList.length === 0) window.alert("No Item Found In Wish List")
        else navigate('/wish-list',{state:{data:wishList}});
    }
    const handleClickCart = ()=>{
        if(cartItems.length === 0) window.alert("No Item Found In Wish List")
        else navigate('/cart',{state:{data:cartItems}});
    }

    const handleLogOut = ()=>{
        signOut()
        navigate("/sign-in")
    }
    const checker = location.pathname !=='/sign-in' && location.pathname !=='/sign-up';
    console.log(checker)
    return <div className={style.container}>
        <div className={style.header}>
            <h1>Bobby's Store</h1>
            <div className={style.overBar}>
                <Link to={'/home'}>Home</Link>
                <Link to={'/contact'}>Contact</Link>
                <Link to={'/about-us'} >About</Link>
                {location.pathname !== '/sign-up' && location.pathname !== '/sign-in' && location.pathname !== '/' ?  (
                    <Link to={'/sign-up'} onClick={()=>handleLogOut()}> Sign Out</Link>
                ):(
                    <Link to={'/sign-up'}>Sign Up</Link>
                )
                }

            </div>

            { location.pathname !== '/sign-up' && location.pathname !== '/sign-in'  && (
            <div className={style.searchDiv}>
                <div className={style.searchBar}>
                    <input type={"text"} placeholder={"what are you looking for?"} className={style.search}/>
                    <div className={style.searchLogo}>
                        <img src={image} alt={"Search"}/>
                    </div>
                </div>
                <div className={style.imgContainer}>
                    <div className={style.imgDiv}>
                        <img src={image1} onClick={()=>handleClickWishList()} alt={"Number Of WishList"}/>
                        <div className={style.number}>{wishList.length}</div>
                    </div>
                    <div className={style.imgDiv}>
                        <img src={image2} onClick={()=> handleClickCart()} alt={"Cart"}/>
                        <div className={style.number}>{cartItems.length}</div>
                    </div>
                    <div className={style.imgDiv}>
                        <img src={profile} alt={"Profile"} onClick={()=>navigate('/profile')}/>
                    </div>
                </div>
            </div>
            )
            }
        </div>
        <div className={style.menu}>
            <button>
                <img className={style.menuImg} src={menuLogo} alt={'Menu'}/>
            </button>
        </div>
    </div>
}