import React, { useState, useRef, useEffect } from "react"
import { Link } from "react-router-dom"
import "./Header.css"
import mainLogo from "./assets/logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping"
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars"
import { faX } from "@fortawesome/free-solid-svg-icons/faX"

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const menuRef = useRef(null);

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen)
    }

    function closeMenu() {
        setIsMenuOpen(false)
    }

    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                closeMenu();
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);

        // Cleanup the event listener on component unmount
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuRef]);

    return (
        <header className="container">
            <nav className="navbar-container">
                <div className="hamburger" onClick={toggleMenu}>
                    {!isMenuOpen ? <FontAwesomeIcon icon={faBars} /> : <FontAwesomeIcon icon={faX} />}
                </div>
                <Link to="/">
                <img src={mainLogo} alt="Main logo" className="navbar-logo" />
                </Link>
                <ul className={`navbar-links ${isMenuOpen ? "active" : " "}`}>
                    <li><Link to="/" className="link" onClick={closeMenu}>Home</Link></li>
                    <li><Link to="/menu" className="link" onClick={closeMenu}>Menu</Link></li>
                    <li><Link to="/about" className="link" onClick={closeMenu}>About us</Link></li>
                    <li><Link to="/reservations" className="link" onClick={closeMenu}>Reservations</Link></li>
                    <li><Link to="/order" className="link" onClick={closeMenu}>Order Online</Link></li>     
                </ul>
                <i><FontAwesomeIcon icon={faCartShopping} /></i>

            </nav>
        </header>
    )
}