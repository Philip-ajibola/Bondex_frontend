import product1 from '../../../assets/ps5-slim-goedkope-playstation_large 1.png';
import SmallDiv from "../../../component/smallDiv/smallDiv.tsx";
import style from './index.module.css'
const NewArrival = ()=>{
    return (
        <div className={style.container}>
            <SmallDiv item={"Featured"} text={"New Arrival"}/>
            <div className={style.productDiv}>
                <div className={style.firstDiv}>
                    <div>
                        <img src={product1} alt={"IMG"}/>
                    </div>
                    <div>
                        <p>Play Station 5</p>
                        <p>Black and White version of the PS5 coming out on sale.</p>
                    </div>
                </div>
                <div className={style.secondProductDiv}>
                    <div className={style.product2}>
                            <div className={style.firstDiv1}>
                                <img className={style.img} src={product1} alt={"IMG"}/>
                            </div>
                            <div>
                                <p>Play Station 5</p>
                                <p>Black and White version of the PS5 coming out on sale.</p>
                            </div>

                    </div>
                    <div>
                        <div className={style.thirdDiv}>
                            <div className={style.firstDiv}>
                                <div>
                                    <img src={product1} alt={"IMG"}/>
                                </div>
                                <div>
                                    <p>Play Station 5</p>
                                    <p>Black and White version of the PS5 coming out on sale.</p>
                                </div>
                            </div>
                            <div className={style.firstDiv}>
                                <div>
                                    <img src={product1} alt={"IMG"}/>
                                </div>
                                <div>
                                    <p>Play Station 5</p>
                                    <p>Black and White version of the PS5 coming out on sale.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NewArrival;