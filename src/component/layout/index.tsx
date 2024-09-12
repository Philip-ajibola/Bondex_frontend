import {Header} from "../header/header.tsx";
import {Footer} from "../footer";
import {Outlet} from "react-router-dom";

export  const Layout = ()=>{
    return(
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}