const Staking = ()=>{
    return(
        <body className="bg-background px-2.5 flex items-center justify-center flex-col text-white">
            <p className="font-bold text-2xl lg:text-5xl font-sans py-10 text-start w-[90%]">Staking Information.</p>
            <div  className="flex flex-col gap-2 lg:gap-10 py-10 px-6 border-4 border-btn-color w-[90%] lg:w-[60%] rounded-2xl">
                <div className="font-extrabold text-xl lg:text-5xl font-sans">
                    <p>Select Details Carefully</p>
                </div>
                <div className="flex gap-5">
                    <input type="radio" className="bg-btn-color w-[20px]"/>
                    <p className="font-extrabold text-3xl">SUI</p>
                </div>
                <input type="text" placeholder="Enter Amount of Sui"
                       className="border-2 bg-btn-color rounded-xl py-4 px-3 w-[85%] lg:w-[60%]"/>
                <p className=" font-medium lg:font-bold   lg:font-2xl font-sans"><span className="text-red-700 font-extrabold">*</span> Minimum amount to stake is 5 sui</p>

                <button className="font-bold text-white text-xl mt-3 lg:text-2xl py-2 px-2 lg:py-4 lg:px-3 rounded-xl bg-service-color hover:bg-service-color w-[40%] lg:w-[20%] self-center hover:shadow-black lg:hover:py-5 lg:hover:pr-5  transition-all duration-300 ">
                    Stake
                </button>
            </div>
            <div className="w-[90%] lg:w-[60%] py-10" >
                <p className="font-bold text-xl lg:text-2xl text-white"><span className="font-extrabold text-2xl lg:text-3xl text-service-color">Disclaimer:</span> If you dont have up to 5 Sui You cant join the community</p>
            </div>
        </body>
    )
}
export default Staking