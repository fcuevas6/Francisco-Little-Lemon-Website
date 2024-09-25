import "./Footer.css"
import whiteLogo from "./assets/logo-white.png"
export default function Footer() {

    const contactInfo = [
        {icon: "", info: "143 Main St. Chicago, IL 60610"},
        {icon: "", info: "(312)555-1234"},
        {icon: "", info: "info@littlelemon.com"}
    ]
    return (
       <footer className="footer-container">
            <div>
                <img src={whiteLogo} alt="Little Lemon logo" className="footer-logo" />
            </div>
            <div>
                <nav>
                    <h4>Site Map</h4>
                    <ul>
                        <li>Home</li>
                        <li>Menu</li>
                        <li>About us</li>
                        <li>Reservations</li>
                        <li>Order Online</li>
                    </ul>
                </nav>
            </div>
            <div>
                <nav>
                    <h4>Contact us</h4>
                    <ul>
                        <li>Address</li>
                        <li>Phone</li>
                        <li>Email</li>
                    </ul>
                </nav>
            </div>
            <div>
                <nav>
                    <h4>Connect with us</h4>
                    <ul>
                        <li>Instagram</li>
                        <li>Facebook</li>
                        <li>Yelp</li>
                        <li>TikTok</li>
                    </ul>
                </nav>
            </div>
       </footer>
    )
}