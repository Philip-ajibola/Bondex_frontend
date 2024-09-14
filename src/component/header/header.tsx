import image from '../../assets/Vector.png'
import image1 from '../../assets/Vector (1).png'
import image2 from '../../assets/Cart1.png'
import style from './index.module.css'
import menuLogo from '../../assets/menu_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png'
import {Link, useLocation} from "react-router-dom";

export const Header = ()=>{
    const location = useLocation()
    const checker = location.pathname ==='/on-boarding' && location.pathname ==='/home' && location.pathname ==='/about'
    return <div className={style.container}>
        <div className={style.header}>
            <h1>Exclusive</h1>
            <div className={style.overBar}>
                <Link to={'#'}>Home</Link>
                <Link to={'#'}>Contact</Link>
                <Link to={'#'} >About</Link>
                {
                    checker && (
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
                    <img src={image1} alt={""}/>
                    <img src={image2} alt={""}/>
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