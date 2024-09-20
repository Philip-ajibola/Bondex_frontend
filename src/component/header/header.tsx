import { useState, useContext, useRef, useEffect } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";
import { CartContext } from "../../context.tsx";
import image from '../../assets/Vector.png';
import profile from '../../assets/user.png';
import image1 from '../../assets/Vector (1).png';
import image2 from '../../assets/Cart1.png';
import style from './index.module.css';
import data from "../../pages/home/flash_sale/data.ts";
import MenuIcon from '@mui/icons-material/Menu';
import { toast } from "react-toastify";

export const Header = () => {
    const { cartItems, wishList } = useContext(CartContext);
    const location = useLocation();
    const { signOut } = useAuth();
    const navigate = useNavigate();

    const [menuOpen, setMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredProducts, setFilteredProducts] = useState<CartItem[]>([]);
    const products = data;
    const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn") || "false");
    const searchAreaRef = useRef<any>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    const handleClickWishList = () => {
        if (isLoggedIn) {
            if (wishList.length === 0) {
                toast.warning("No Item Found In Wish List");
            } else {
                navigate('/wish-list', { state: { data: wishList } });
            }
        } else toast.warning("You Are Not Signed In");
    };

    const handleClickCart = () => {
        if (isLoggedIn) {
            if (cartItems.length === 0) {
                window.alert("No Item Found In Cart");
            } else {
                navigate('/cart', { state: { data: cartItems } });
            }
        } else window.alert("You Are Not Signed In");
    };

    const handleLogOut = () => {
        signOut();
        navigate("/sign-in");
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleSearch = (event: any) => {
        const query = event.target.value.toLowerCase();
        setSearchQuery(query);

        const filtered = products.filter(product =>
            product.productName.toLowerCase().includes(query)
        );
        setFilteredProducts(filtered);
    };

    const handleProductClick = (product: CartItem) => {
        if (isLoggedIn) {
            navigate(`/one-product`, { state: { data: product } });
            setSearchQuery('');
            setFilteredProducts([]);
        } else window.alert("You Are Not Signed In");
    };

    const handleClickOutside = (event: any) => {
        if (searchAreaRef.current && !searchAreaRef.current.contains(event.target)) {
            setSearchQuery('');
            setFilteredProducts([]);
        }

        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const checker = location.pathname !== '/' && (location.pathname !== '/sign-in' && location.pathname !== '/sign-up');

    const handleNavigation = (path: string) => {
        if (location.pathname !== '/') {
            navigate(path);
        } else {
            toast.warning("You Are Not Logged In");
        }
    };

    return (
        <div className={style.container}>
            <div className={style.header}>
                <h1>Bobby's Store</h1>
                <div className={style.overBar}>
                    <button className={style.button} onClick={() => handleNavigation('/home')}>Home</button>
                    <button className={style.button} onClick={() => navigate('/contact')}>Contact</button>
                    <button className={style.button} onClick={() => navigate('/about-us')}>About</button>
                    {checker && isLoggedIn ? (
                        <button className={style.button} onClick={handleLogOut}>Sign Out</button>
                    ) : (
                        <button className={style.button} onClick={() => navigate('/sign-in')}>Sign In</button>
                    )}
                </div>

                {checker && (
                    <div className={style.searchDiv} ref={searchAreaRef}>
                        <div className={style.searchBar}>
                            <input
                                type="text"
                                placeholder="Search Product"
                                className={style.search}
                                value={searchQuery}
                                onChange={handleSearch}
                            />
                            <div className={style.searchLogo}>
                                <img src={image} alt="Search" />
                            </div>
                        </div>

                        {filteredProducts.length > 0 && (
                            <div className={style.dropdown}>
                                {filteredProducts.map(product => (
                                    <div
                                        key={product.id}
                                        className={style.dropdownItem}
                                        onClick={() => handleProductClick(product)}
                                    >
                                        {product.productName}
                                    </div>
                                ))}
                            </div>
                        )}

                        <div className={style.imgContainer}>
                            <div className={style.imgDiv}>
                                <img src={image1} onClick={handleClickWishList} alt="WishList" />
                                {wishList.length !== 0 && <div className={style.number}>{wishList.length}</div>}
                            </div>
                            <div className={style.imgDiv}>
                                <img src={image2} onClick={handleClickCart} alt="Cart" />
                                {cartItems.length !== 0 && <div className={style.number}>{cartItems.length}</div>}
                            </div>
                            <div className={style.imgDiv}>
                                <img src={profile} alt="Profile" onClick={() => handleNavigation('/profile')} />
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className={style.mobileHeader}>
                <h1>Bobby's Store</h1>
                {checker && (
                    <div className={style.searchDiv}>
                        <div className={style.searchBar}>
                            <input type="text" placeholder="Search Product" className={style.search} onChange={handleSearch} />
                            <div className={style.searchLogo}>
                                <img src={image} alt="Search" />
                            </div>
                        </div>
                        {filteredProducts.length > 0 && (
                            <div className={style.dropdown}>
                                {filteredProducts.map(product => (
                                    <div
                                        key={product.id}
                                        className={style.dropdownItem}
                                        onClick={() => handleProductClick(product)}
                                    >
                                        {product.productName}
                                    </div>
                                ))}
                            </div>
                        )}
                        <div className={style.imgContainer}>
                            <div className={style.imgDiv}>
                                <img src={image1} onClick={handleClickWishList} alt="WishList" />
                                {wishList.length !== 0 && <div className={style.number}>{wishList.length}</div>}
                            </div>
                            <div className={style.imgDiv}>
                                <img src={image2} onClick={handleClickCart} alt="Cart" />
                                {cartItems.length !== 0 && <div className={style.number}>{cartItems.length}</div>}
                            </div>
                            <div className={style.imgDiv}>
                                <img src={profile} alt="Profile" onClick={() => handleNavigation('/profile')} />
                            </div>
                        </div>
                    </div>
                )}
                <button onClick={toggleMenu} className={style.menu}>
                    <MenuIcon style={{ color: 'black' }} />
                </button>
            </div>
            {menuOpen && (
                <div className={style.mobileMenu} ref={menuRef}>
                    <button className={style.button} onClick={() => handleNavigation('/home')}>Home</button>
                    <button className={style.button} onClick={() => handleNavigation('/contact')}>Contact</button>
                    <button className={style.button} onClick={() => handleNavigation('/about-us')}>About</button>
                    {checker ? (
                        <button className={style.button} onClick={() => {
                            handleLogOut();
                        }}>Sign Out</button>
                    ) : (
                        <button className={style.button} onClick={() => navigate('/sign-in')}>Sign In</button>
                    )}
                </div>
            )}
        </div>
    );
};
