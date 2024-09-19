import {useState, useContext, useRef, useEffect} from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";
import { CartContext } from "../../context.tsx";
import image from '../../assets/Vector.png';
import profile from '../../assets/user.png';
import image1 from '../../assets/Vector (1).png';
import image2 from '../../assets/Cart1.png';
import menuLogo from '../../assets/menu_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png';
import style from './index.module.css';
import data from "../../pages/home/flash_sale/data.ts";

export const Header = () => {
    const { cartItems, wishList } = useContext(CartContext);
    const location = useLocation();
    const { signOut } = useAuth();
    const navigate = useNavigate();

    const [menuOpen, setMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredProducts, setFilteredProducts] = useState<CartItem[]>([]);
    const products = data;

    const searchAreaRef = useRef<HTMLDivElement>(null);

    const handleClickWishList = () => {
        if (wishList.length === 0) {
            window.alert("No Item Found In Wish List");
        } else {
            navigate('/wish-list', { state: { data: wishList } });
        }
    };

    const handleClickCart = () => {
        if (cartItems.length === 0) {
            window.alert("No Item Found In Cart");
        } else {
            navigate('/cart', { state: { data: cartItems } });
        }
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
        navigate(`/one-product`, { state: { data: product } });
        setSearchQuery('');
        setFilteredProducts([]);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (
            searchAreaRef.current &&
            !searchAreaRef.current.contains(event.target as Node)
        ) {
            setSearchQuery('');
            setFilteredProducts([]);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const checker = location.pathname !== '/sign-in' && location.pathname !== '/sign-up' && location.pathname !== '/';

    return (
        <div className={style.container}>
            <div className={style.header}>
                <h1>Bobby's Store</h1>
                <div className={style.overBar}>
                    <Link to={'/home'}>Home</Link>
                    <Link to={'/contact'}>Contact</Link>
                    <Link to={'/about-us'}>About</Link>
                    {checker ? (
                        <Link to={'/sign-up'} onClick={handleLogOut}> Sign Out</Link>
                    ) : (
                        <Link to={'/sign-up'}>Sign Up</Link>
                    )}
                </div>

                {checker && (
                    <div className={style.searchDiv} ref={searchAreaRef}>
                        <div className={style.searchBar}>
                            <input
                                type="text"
                                placeholder="What are you looking for?"
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
                                <img src={image1} onClick={() => handleClickWishList()} alt="WishList" />
                                {wishList.length !== 0 && <div className={style.number}>{wishList.length}</div>}
                            </div>
                            <div className={style.imgDiv}>
                                <img src={image2} onClick={() => handleClickCart()} alt="Cart" />
                                {cartItems.length !== 0 && <div className={style.number}>{cartItems.length}</div>}
                            </div>
                            <div className={style.imgDiv}>
                                <img src={profile} alt="Profile" onClick={() => navigate('/profile')} />
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className={style.mobileHeader}>
                <h1>Bobby's Store</h1>
                <div className={style.searchDiv}>
                    <div className={style.searchBar}>
                        <input type="text" placeholder="What are you looking for?" className={style.search} onChange={handleSearch}/>
                        <div className={style.searchLogo}>
                            <img src={image} alt="Search"/>
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
                            <img src={image1} onClick={()=>handleClickWishList()} alt="WishList"/>
                            {wishList.length !== 0 && <div className={style.number}>{wishList.length}</div>}
                        </div>
                        <div className={style.imgDiv}>
                            <img src={image2} onClick={()=>handleClickCart()} alt="Cart"/>
                            {cartItems.length !== 0 && <div className={style.number}>{cartItems.length}</div>}
                        </div>
                        <div className={style.imgDiv}>
                            <img src={profile} alt="Profile" onClick={() => navigate('/profile')}/>
                        </div>
                    </div>
                </div>
                <button onClick={()=>toggleMenu()} className={style.menu}>
                    <img className={style.menuImg} src={menuLogo} alt="Menu"/>
                </button>
            </div>
            {menuOpen && (
                <div className={style.mobileMenu}>
                    <Link className={style.link} to={'/home'} onClick={toggleMenu}>Home</Link>
                    <Link className={style.link} to={'/contact'} onClick={toggleMenu}>Contact</Link>
                    <Link className={style.link} to={'/about-us'} onClick={toggleMenu}>About</Link>
                    {checker ? (
                        <Link className={style.link} to={'/sign-up'} onClick={() => {
                            handleLogOut();
                            toggleMenu();
                        }}>Sign Out</Link>
                    ) : (
                        <Link className={style.link} to={'/sign-up'} onClick={()=>toggleMenu()}>Sign Up</Link>
                    )}
                </div>
            )}
        </div>
    );
};
