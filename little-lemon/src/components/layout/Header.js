
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
                    <li>Home</li>
                    <li>Menu</li>
                    <li>About us</li>
                    <li>Reservations</li>
                    <li>Order Online</li>
                    <li><FontAwesomeIcon icon={faCartShopping} /></li>
                </ul>
            </nav>
        </header>
    )
}