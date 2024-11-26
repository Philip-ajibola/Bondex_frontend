import image from "../../assets/download 1.svg";
import image1 from "../../assets/uppLog 1.svg";

const About = ()=>{
    return(
        <div className="bg-background flex flex-col items-center ">
            <main className="relative  flex flex-col lg:flex-row items-center justify-evenly px-4 w-full">
                <div
                    className="absolute top-0 left-0 w-full h-full bg-cover animate-moveBackground lg:bg-fixed bg-scroll">
                </div>

                <div className="flex items-center justify-evenly flex-col w-full lg:w-[50%] text-white z-10 px-2.5">
                    <div
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-extrabold font-serif self-start sm:w-full px-2.5 pt-10">
                        About
                    </div>
                    <img className="w-[55%] self-start" src={image1}/>
                </div>

                <div className="w-[55%] z-10">
                    <img src={image} alt={"Image"}/>
                </div>
            </main>
            <p className="font-extrabold text-3xl lg:text-5xl pt-10 text-center w-full text-white"><span className=" text-navBar-text">Bondex</span> Mission And Vision</p>
            <div className="flex gap-5 flex-col items-center mb-10 pt-10">
                <div
                    className="w-[90%] py-10 px-2 rounded-2 border-2 border-btn-color bg-service-color items-center flex flex-col rounded-2xl">
                    <p className="text-white font-extrabold text-4xl">Our <span
                        className="text-background">Mission</span></p>
                    <p className=" font-light lg:font-bold text-white  md:text-xl  pt-10 lg:text-2xl  w-[90%] lg:w-[75%] font-serif text-center  ">
                        At <span className="text-background">Bondex</span>, our mission is to build a secure,
                        transparent, and
                        user-friendly platform that enables individuals to participate in community-based financial
                        activities
                        while leveraging on blockchain technology to revolutionize traditional financial systems and
                        democratize
                        access to financial services. The aim is to foster a strong and supportive community of
                        like-minded
                        individuals who share a common goal of financial prosperity.
                    </p>
                </div>
                <div
                    className="w-[90%] py-10 px-2 rounded-2 border-2 border-btn-color bg-service-color items-center flex flex-col rounded-2xl">
                    <p className="text-white font-extrabold text-4xl">Our <span
                        className="text-background">Vision</span></p>
                    <p className=" font-light lg:font-bold text-white  md:text-xl  pt-10 lg:text-2xl  w-[90%] lg:w-[75%] font-serif text-center  ">
                        At <span className="text-background">Bondex</span>, our vision is to revolutionize community
                        finance by empowering individuals and communities worldwide through secure, transparent, and
                        accessible decentralized
                        financial solutions. We aim to create a future where everyone has the opportunity to participate
                        in the global economy, regardless of their geographic location or socioeconomic status.
                        By leveraging the power of blockchain technology,
                        we will foster financial inclusion, economic growth, and social impact.
                    </p>
                </div>
                <p className="font-extrabold text-3xl lg:text-5xl pt-10 text-center w-full text-white"><span
                    className=" text-navBar-text">Bondex</span> Team Members</p>
            </div>
            <div className="flex gap-5 w-[90%] items-center justify-center py-10">
                <p className=" font-light lg:font-bold text-white text-xl lg:text-2xl  w-[90%] lg:w-[75%] font-serif text-center ">
                    At <span className="text-navBar-text">Bondex</span>  we are driven by a passionate and talented team who are dedicated to
                    revolutionizing community finance. Our team members bring a wealth of experience in blockchain technology, decentralized finance,
                    and financial innovation.
                    Together, we are working tirelessly to build a future where finance is accessible, transparent, and empowering for everyone.
                </p>
            </div>
        </div>

    )
}

export default About