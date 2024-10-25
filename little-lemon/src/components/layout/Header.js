import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./Header.css"
import mainLogo from "./assets/logo.png"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping"

export default function Header() {
    return (
        <header>
            <nav className="navbar-container">
                <img src={mainLogo} alt="Main logo" className="navbar-logo" />
                <ul className="navbar-links">
                    <li><Link to="/" className="link">Home</Link></li>
                    <li><Link to="/menu" className="link">Menu</Link></li>
                    <li><Link className="link">About us</Link></li>
                    <li><Link to="/reservations" className="link">Reservations</Link></li>
                    <li><Link to="/order" className="link">Order Online</Link></li>
                    <li><FontAwesomeIcon icon={faCartShopping} /></li>
                </ul>
            </nav>
        </header>
    )
}