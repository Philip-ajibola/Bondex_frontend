
import {Outlet} from "react-router-dom";
import Header from "../component/navBar/header.jsx";
import Footer from "../component/footer/footer.jsx";

export  const Layout = ()=>{
    return(
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}