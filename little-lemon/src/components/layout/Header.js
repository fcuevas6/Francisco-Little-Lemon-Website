
import "./Header.css"
import mainLogo from "./assets/logo.png"

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
                </ul>
            </nav>
        </header>
    )
}