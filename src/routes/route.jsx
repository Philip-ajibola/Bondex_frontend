import {Layout} from "../layout/layout.jsx";
import Home from "../pages/home/home.jsx";
import About from "../pages/about/about.jsx";
import Staking from "../pages/staking/staking.jsx";
import Community from "../pages/community/community.jsx";

export const ROUTE = [
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/home",
                element: <Home/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/stake",
                element: <Staking/>
            },
            {
                path: "/community",
                element: <Community/>
            },

        ]
    }

]