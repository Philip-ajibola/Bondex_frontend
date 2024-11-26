import Service from "../../component/service/service.jsx";
import icon1 from '../../assets/equity 1.png';
import icon2 from '../../assets/viral-marketing 1.png';
import logo from '../../assets/uppLog 1.svg';
import image from '../../assets/1f7fc350-b1c7-4e76-ae87-aa46d327393e-removebg-preview 1.png';
import Data from './data.js';

const OurService = ()=>{
    return(
        <main className="flex flex-col gap-20 px-2.5">
            <div className="flex flex-col gap-4 ">
                <div className="font-bold text-2xl text-navBar-text pt-4">What we Offer</div>
                <div className="font-extrabold text-4xl text-white ">Our Services</div>
            </div>
            <Service buttonText={"Stake"} firstText={"Staking"}
                     lastText={"Stake to Earn:- Lock up your crypto assets to support the network and earn rewards in return."}
                     img={icon1}/>
            <Service buttonText={"Get Started"} firstText={"Decentralized ROSCAs"}
                     lastText={"Experience the future of Rotating Savings and Credit Association. Create or Join a ROSCA Community powered by blockchain"}
                     img={icon2}/>
            <div className="relative flex w-[90%] items-center  self-center">
                <div className=" w-[100px] lg:w-[200px] h-[100px] lg:h-[200px] rounded-full bg-btn-color z-10 bg-opacity-30"></div>
                <p className="absolute left-[60px] lg:left-[120px] font-extrabold text-xl md:text-3xl lg:text-6xl text-white font-sans ">Bondex is safe and secure</p>
            </div>
            <div className="flex flex-col md:flex-row w-[90%] gap-5 lg:gap-0 px-2.5">
                {
                    Data.map((item, index) => (
                        <div key={index} className="flex flex-col items-center justify-center gap-5">
                            <img src={item.image}/>
                            <p className="text-white text-center font-bold text-xl lg:text-2xl">{item.description}</p>
                        </div>
                    ))
                }
            </div>
            <img className="w-[35%] self-center" src={logo}/>
            <div className='flex w-[90%]  gap-5 items-center '>
                <p className='font-bold text-xl lg:text-4xl text-center text-white'>Bondex is a decentralized platform designed to revolutionize community-based finance. By leveraging blockchain technology, we empower individuals to participate in transparent, secure, and efficient financial transactions.</p>
                <img src={image} className='hidden md:block w-[40%] '/>
            </div>
        </main>
    )
}
export default OurService;