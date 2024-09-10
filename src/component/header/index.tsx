import React  from "react";
import image from '../../assets/Vector.png'
import image1 from '../../assets/Vector (1).png'
import image2 from '../../assets/Cart1.png'
import style from './index.module.css'
import {Link} from "react-router-dom";

export const Header = ()=>{
    return <>
        <div className={style.header}>
            <h1>Exclusive</h1>
            <div className={style.overBar}>
                <Link to={'#'}>Home</Link>
                <Link to={'#'}>Contact</Link>
                <Link to={'#'} >About</Link>
                <Link to={'#'}>Sign Up</Link>
            </div>

            <div className={style.searchDiv}>
                <div className={style.searchBar}>
                    <input type={"text"} placeholder={"what are you looking for?"} className={style.search}/>
                    <div className={style.searchLogo}>
                        <img src={image}/>
                    </div>
                </div>
                <img src={image1}/>
                <img src={image2}/>
            </div>
        </div>
    </>
}