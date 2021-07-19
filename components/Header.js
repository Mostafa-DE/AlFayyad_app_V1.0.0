import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../styles/Header.module.css";
import { IoStorefrontSharp } from 'react-icons/io5';
import { BiSearchAlt2 } from "react-icons/bi";
import { TiTimes } from "react-icons/ti";
import { FiMenu } from "react-icons/fi";
import { HiOutlineShoppingCart } from 'react-icons/hi';
// import Badge from '@material-ui/core/Badge';
import { FaRegHeart } from "react-icons/fa";



function Header() {
    const [click, setClick] = useState(false);
    const [scrollState, setScrollState] = useState("top");

    const handleClick = () => {
        setClick(!click);
    };
    let listener = null;
    useEffect(() => {
        listener = document.addEventListener("scroll", () => {
          var scrolled = document.scrollingElement.scrollTop
          if (scrolled >= 100) {
            if (scrollState !== "amir") {
              setScrollState("amir")
            }
          } else {
            if (scrollState !== "top") {
              setScrollState("top")
            }
          }
        })
        return () => {
          document.removeEventListener("scroll", listener)
        }
      }, [scrollState])
      
      const navbarStyles = {
          background: `${scrollState === "top" ? "transparent" : "linear-gradient(161deg,rgb(43, 43, 43) 0%,rgba(150, 149, 149, 0.986) 100%)"} `,
          padding: `${scrollState === "top" ? "2rem" : "1rem 2rem 1rem 3rem"}`,
          transition: "all 0.5s ease-in-out"
      }

    return (
    <>
        <header>
            <nav className="navbar navbar-expand-lg fixed-top" style={navbarStyles}>
                <div className="container-fluid">
                    <a
                        className={`navbar-brand me-2 ${scrollState === "top" ? styles.logo : styles.logoScroll}`}
                        href="/"
                    >
                        AlFayyad <span className={styles.storeText}>Store</span> <IoStorefrontSharp/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        {/* <span className="navbar-toggler-icon dark" ></span> */}
                        <FiMenu />
                    </button>
                    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className={`navbar-nav me-auto mb-2 mb-lg-0 ${styles.menu}`}>
                            <li>
                            <Link href="/">
                                <a className={styles.link1}>Home</a>
                            </Link>
                            </li>
                            <li>
                            <Link href="/products/productsList">
                                <a className={`${scrollState === "top" ? styles.link : styles.linkScroll}`}> Products
                                    <span className="badge rounded-pill bg-danger m-1">HOT</span>
                                </a>
                            </Link>
                            </li>
                            <li>
                            <Link href="/products/discountsList">
                                <a className={`${scrollState === "top" ? styles.link : styles.linkScroll}`}>Temporary discounts</a>
                            </Link>
                            </li>
                            <li>
                            <Link href="/about">
                                <a className={`${scrollState === "top" ? styles.link : styles.linkScroll}`}>About</a>
                            </Link>
                            </li>
                            <li>
                            <Link href="/contact">
                                <a className={`${scrollState === "top" ? styles.link : styles.linkScroll}`}>Contact</a>
                            </Link>
                            </li>
                        </ul>
                        
                        <HiOutlineShoppingCart className={styles.cart} />
                            <FaRegHeart className={styles.FavouriteProducts} />

                        
                        <form className="d-flex" noValidate autoComplete="off">
                            {click ? (
                            <div className={`${scrollState === "top" ? styles.searchField : styles.searchFieldScroll}`}>
                            <input 
                                type="text"
                                placeholder="Search..." 
                                className={`${scrollState === "top" ? styles.inputSearch : styles.inputSearchScroll}`}
                            />
                            <TiTimes 
                                className={`${scrollState === "top" ? styles.closeIcon : styles.closeIconScroll}`} 
                                onClick={handleClick} 
                            />
                            </div>
                            ) : (
                                <div 
                                    className={`${scrollState === "top" ? styles.searchIcon : styles.searchIconScroll }`} 
                                    onClick={handleClick}
                                >
                                    <BiSearchAlt2 />
                                </div>
                            )}
                        </form>

                    </div>
                </div>
            </nav>
        </header>
    </>
    )
}




export default Header;
