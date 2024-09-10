import style from './index.module.css'
import left from '../../../assets/Vector (2).png'
import right from '../../../assets/Vector (3).png'
import product1 from '../../../assets/g92-2-500x500 1.png'
import eye from '../../../assets/Fill Eye.png'
import heart from '../../../assets/Fill Heart.png'
import rating from '../../../assets/Frame 566.png'

export const FlashSale = ()=>{
    return(
        <>
            <div className={style.mainDiv}>
                <div className={style.innerDiv}>
                    <div className={style.flashContainer}>
                        <div className={style.firstDiv}>
                            <div className={style.red}></div>
                            <div className={style.today}>Today's</div>
                        </div>
                        <div className={style.secondDiv}>
                            <div className={style.flashSales}>Flash Scores</div>
                            <div className={style.days}>
                                <div>
                                    <p className={style.firstP}>Days</p>
                                    <h2 className={style.firstH}>03</h2>
                                </div>
                                <div>:</div>
                                <div>
                                    <p className={style.firstP}>Hours</p>
                                    <h2 className={style.firstH}>23</h2>
                                </div>
                                <div>:</div>
                                <div>
                                    <p className={style.firstP}>Minutes</p>
                                    <h2 className={style.firstH}>15</h2>
                                </div>
                                <div>:</div>
                                <div>
                                    <p className={style.firstP}>Seconds</p>
                                    <h2 className={style.firstH}>56</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.arrows}>
                        <div className={style.arrowImg}>
                            <img src={left} alt={"left logo"} className={style.img}/>
                        </div>
                        <div className={style.arrowImg}>
                            <img src={right} alt={"right logo"} className={style.img}/>
                        </div>
                    </div>
                </div>
                <div className={style.productContainer}>
                    <div >
                        <div className={style.product}>
                            <div className={style.discount}> -40%</div>
                            <div className={style.productImg}>
                                <div className={style.realImage}>
                                    <img src={product1} alt={"product"}/>
                                </div>
                                <div className={style.logo}>
                                    <img src={eye} alt={"logo"} className={style.eye}/>
                                    <img src={heart} alt={"logo"} className={style.heart}/>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className={style.productName}>HAVIT HV-G92 Gamepad </p>
                            <div className={style.pricing}>
                                <p className={style.price}>$120</p>
                                <p className={style.oldPrice}>$160</p>
                            </div>
                            <div>
                                <img src={rating}/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={style.product}>
                            <div className={style.discount}> -40%</div>
                            <div className={style.productImg}>
                                <div className={style.realImage}>
                                    <img src={product1} alt={"product"}/>
                                </div>
                                <div className={style.logo}>
                                    <img src={eye} alt={"logo"} className={style.eye}/>
                                    <img src={heart} alt={"logo"} className={style.heart}/>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className={style.productName}>HAVIT HV-G92 Gamepad </p>
                            <div className={style.pricing}>
                                <p className={style.price}>$120</p>
                                <p className={style.oldPrice}>$160</p>
                            </div>
                            <div>
                                <img src={rating}/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={style.product}>
                            <div className={style.discount}> -40%</div>
                            <div className={style.productImg}>
                                <div className={style.realImage}>
                                    <img src={product1} alt={"product"}/>
                                </div>
                                <div className={style.logo}>
                                    <img src={eye} alt={"logo"} className={style.eye}/>
                                    <img src={heart} alt={"logo"} className={style.heart}/>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className={style.productName}>HAVIT HV-G92 Gamepad </p>
                            <div className={style.pricing}>
                                <p className={style.price}>$120</p>
                                <p className={style.oldPrice}>$160</p>
                            </div>
                            <div>
                                <img src={rating}/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={style.product}>
                            <div className={style.discount}> -40%</div>
                            <div className={style.productImg}>
                                <div className={style.realImage}>
                                    <img src={product1} alt={"product"}/>
                                </div>
                                <div className={style.logo}>
                                    <img src={eye} alt={"logo"} className={style.eye}/>
                                    <img src={heart} alt={"logo"} className={style.heart}/>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className={style.productName}>HAVIT HV-G92 Gamepad </p>
                            <div className={style.pricing}>
                                <p className={style.price}>$120</p>
                                <p className={style.oldPrice}>$160</p>
                            </div>
                            <div>
                                <img src={rating}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}