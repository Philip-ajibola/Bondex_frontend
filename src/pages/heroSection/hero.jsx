import image from "../../assets/download 1.svg";
import './index.css'

const HeroSection = () => {
    return (
        <main className="relative bg-transparent flex flex-col lg:flex-row items-center justify-evenly px-4 ">
            <div className="absolute top-0 left-0 w-full h-full bg-cover animate-moveBackground lg:bg-fixed bg-scroll">
            </div>

            <div className="flex items-center justify-evenly flex-col w-full lg:w-[50%] text-white z-10">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-extrabold font-serif self-start sm:w-full">
                    Empowering <span className="text-navBar-text">Communities</span>,
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-extrabold font-serif self-start sm:w-full">
                    Securing the <span className="text-navBar-text">Future</span>
                </div>
                <div className="font-bold text-xl self-start pt-4 w-full lg:w-[50%]">
                    Redefining Community Finance, Empowering Financial Inclusion
                </div>
            </div>

            {/* Image */}
            <div className="w-[50%] z-10">
                <img src={image} alt={"Image"} />
            </div>
        </main>
    )
}

export default HeroSection;
