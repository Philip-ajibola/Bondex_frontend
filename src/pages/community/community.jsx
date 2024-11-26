const Community = ()=>{
    return(
        <body className="bg-background py-10 flex justify-center items-center min-h-screen ">
        <div className="flex flex-col items-center justify-center gap-5 lg:w-[60%]">
            <p className="font-medium font-sans text-sm lg:text-2xl text-white px-2.5"><span className=" text-service-color">Bondex</span> offers a revolutionary approach to finance, empowering
                individuals and communities to take control of their financial
                destinies. Create your own decentralized community, collaborate
                with like-minded individuals, and unlock the power of blockchain technology.
                With Bondex, you can</p>
            <button className="font-bold text-2xl text-white rounded-3xl bg-btn-color py-4 px-3 hover:py-4 hover:px-4 transition-all duration-300">
                Create Community
            </button>
            <div className="rounded-3xl h-[50px] w-[90%] lg:w-[55%] flex items-center bg-service-color bg-opacity-40">
                <input className=" w-[100%] lg:w-[80%] h-[50px] px-2.5 rounded-l-3xl bg-transparent placeholder:font-medium placeholder:text-2xl placeholder:italic" type="text" placeholder="Create a Community"/>
                <button className=" font-medium lg:font-bold rounded-3xl text-3xl text-white  w-[30%] lg:w-[22%] h-[50px] bg-btn-color">Join</button>
            </div>
        </div>
        </body>
    )
}

export default Community;