import {Layout} from "../component/layout";
import {Home} from "../pages/home";
import SignUp from "../pages/sign-up/signUp.tsx";
import SignIn from "../pages/login/signIn.tsx";
import WishList from "../pages/wishList/wishList.tsx";
import Cart from "../pages/cart/cart.tsx";
import Checkout from "../pages/checkout/checkout.tsx";
import Profile from "../pages/profile/profile.tsx";
import AboutUs from "../pages/aboutUs/aboutUs.tsx";

export const ROUTE = [
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                path: "",
                element:<Home/>
            },
            {
                path: "home",
                element:<Home/>
            },
            {
                path: "/sign-up",
                element:<SignUp/>
            },
            {
                path: "/sign-in",
                element:<SignIn/>
            },
            {
                path: "/wish-list",
                element:<WishList/>
            },
            {
                path: "/cart",
                element:<Cart/>
            },
            {
                path: "/checkout",
                element:<Checkout/>
            },
            {
                path: "/profile",
                element:<Profile/>
            }
            ,{
                path: "/about-us",
                element:<AboutUs/>
            },
        ]

    }
]