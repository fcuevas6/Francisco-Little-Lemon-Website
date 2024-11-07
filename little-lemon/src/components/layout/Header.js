import React, { useState } from "react"
import { Link } from "react-router-dom"
import "./Header.css"
import mainLogo from "./assets/logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping"
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars"
import { faX } from "@fortawesome/free-solid-svg-icons/faX"

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [activeLink, setActiveLink] = useState("/")
    // const menuRef = useRef(null);

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen)
    }

    function closeMenu() {
        setIsMenuOpen(false)
    }

    // useEffect(() => {
    //     function handleClickOutside(event) {
    //         if (menuRef.current && !menuRef.current.contains(event.target)) {
    //             closeMenu();
    //         }
    //     }
    //     document.addEventListener("mousedown", handleClickOutside);
    //     return () => {
    //         document.removeEventListener("mousedown", handleClickOutside);
    //     };
    // }, [menuRef]);

    function handleLinkClick(link) {
        setActiveLink(link);
        closeMenu()
    }

    return (
        <header className="container">
            <nav className="navbar-container">
                <div className="hamburger" onClick={toggleMenu}>
                    {!isMenuOpen ? <FontAwesomeIcon icon={faBars} /> : <FontAwesomeIcon icon={faX} />}
                </div>
                <Link to="/" onClick={handleLinkClick}>
                    <img src={mainLogo} alt="Main logo" className="navbar-logo" />
                </Link>
                <ul className={`navbar-links ${isMenuOpen ? "active" : " "}`}>
                    <li>
                        <Link
                            to="/"
                            className={`link ${activeLink === "/" ? "active" : ""}`}
                            onClick={() => handleLinkClick("/")}>Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/menu"
                            className={`link ${activeLink === "/menu" ? "active" : ""}`}
                            onClick={() => handleLinkClick("/menu")}>Menu
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/about"
                            className={`link ${activeLink === "/about" ? "active" : ""}`}
                            onClick={() => handleLinkClick("/about")}>About us
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/reservations"
                            className={`link ${activeLink === "/reservations" ? "active" : ""}`}
                            onClick={() => handleLinkClick("/reservations")}>Reservations
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/order"
                            className={`link ${activeLink === "/order" ? "active" : ""}`}
                            onClick={() => handleLinkClick("/order")}>Order Online
                        </Link>
                    </li>
                </ul>
                <Link to="/order" className="link"><FontAwesomeIcon icon={faCartShopping} /></Link>

            </nav>
        </header>
    )
}