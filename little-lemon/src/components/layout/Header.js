import React, { useState } from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./Header.css"
import mainLogo from "./assets/logo.png"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping"
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars"

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen)
    }

    function closeMenu() {
        setIsMenuOpen(false)
    }
    return (
        <header className="container">
            <nav className="navbar-container">
                <div className="hamburger" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
                <img src={mainLogo} alt="Main logo" className="navbar-logo" />
                <ul className={`navbar-links ${isMenuOpen ? "active" : " "}`}>
                    <li><Link to="/" className="link" onClick={closeMenu}>Home</Link></li>
                    <li><Link to="/menu" className="link" onClick={closeMenu}>Menu</Link></li>
                    <li><Link className="link" onClick={closeMenu}>About us</Link></li>
                    <li><Link to="/reservations" className="link" onClick={closeMenu}>Reservations</Link></li>
                    <li><Link to="/order" className="link" onClick={closeMenu}>Order Online</Link></li>
                    <i><FontAwesomeIcon icon={faCartShopping} /></i>
                </ul>

            </nav>
        </header>
    )
}