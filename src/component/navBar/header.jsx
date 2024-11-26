import { useState, useEffect, useRef } from "react";
import logo from "../../assets/uppLog 1.svg";
import {useNavigate} from "react-router-dom";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <nav className="flex items-center justify-between px-4 bg-background">
            <div>
                <img className="w-[13rem] h-[5rem]" src={logo} alt={"Bondex"}/>
            </div>

            <div className="hidden lg:flex w-[35%] items-center justify-between">
                <div onClick={() => navigate("/home")} className="navBar">Home</div>
                <div onClick={() => navigate("/about")} className="navBar">About</div>
                <div onClick={() => navigate("/stake")} className="navBar">Stake</div>
                <div onClick={() => navigate("/community")} className="navBar">Community</div>
            </div>
            <div>
                <button className="hidden lg:flex text-white rounded-2xl p-3 px-10 bg-btn-color">
                    Connect
                </button>
            </div>
            <div className="lg:hidden">
                <button
                    className="text-white p-2"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span className="block w-6 h-1 bg-white mb-1"></span>
                    <span className="block w-6 h-1 bg-white mb-1"></span>
                    <span className="block w-6 h-1 bg-white"></span>
                </button>
            </div>

            <div
                ref={menuRef}
                className={`lg:hidden fixed top-0 right-0 w-[50%] h-[60%] bg-background bg-opacity-80 z-50 flex flex-col items-center justify-center space-y-6 transform transition-all ${
                    isMenuOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div onClick={() => navigate("/home")} className="navBar">Home</div>
                <div onClick={() => navigate("/about")} className="navBar">About</div>
                <div onClick={() => navigate("/stake")} className="navBar">Stake</div>
                <div onClick={() => navigate("/community")} className="navBar">Community</div>
                <div>
                    <button className="text-white rounded-2xl p-3 px-10 bg-btn-color">
                        Connect
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Header;
