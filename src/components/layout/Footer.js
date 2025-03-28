import React from "react"
import { Link } from "react-router-dom"
import "./Footer.css"
import whiteLogo from "./assets/logo-white.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faPhone,
    faAt,
    faLocationDot
} from "@fortawesome/free-solid-svg-icons"
import {
    faInstagram,
    faSquareFacebook,
    faYelp,
    faTiktok

} from "@fortawesome/free-brands-svg-icons"


export default function Footer() {

    const contactInfo = [
        {icon: faLocationDot, info: "143 Main St. Chicago, IL 60610"},
        {icon: faPhone, info: "(312)555-1234"},
        {icon: faAt, info: "info@littlelemon.com"}
    ]

    const socialsInfo = [
        {icon: faInstagram, info: "Instagram", href:"https://www.instagram.com"},
        {icon: faSquareFacebook, info: "Facebook", href:"https://facebook.com"},
        {icon: faYelp, info: "Yelp", href:"https://yelp.com"},
        {icon: faTiktok, info: "Tiktok", href:"https://tiktok.com"}
    ]
    return (
       <footer>
            <div className="footer-container">
                <div>
                <img src={whiteLogo} alt="Little Lemon logo" className="footer-logo" />
                </div>
                <div className="footer-site-map">
                <h4>Site Map</h4>
                    <nav className="site-map">
                        <ul>
                            <li><Link to="/" className="footer-link">Home</Link></li>
                            <li><Link to="/menu" className="footer-link">Menu</Link></li>
                            <li><Link to="/about" className="footer-link">About us</Link></li>
                            <li><Link to="/reservations" className="footer-link">Reservations</Link></li>
                            <li><Link to="/order" className="footer-link">Order Online</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="footer-address">
                    <h4>Contact us</h4>
                    <address>
                    {contactInfo.map((contact, index) =>
                            <p key={index}>
                                <FontAwesomeIcon icon={contact.icon} className="icon" /> {contact.info}
                            </p>
                    )}
                    </address>
                </div>
                <div className="footer-socials">
                    <h4>Connect with us</h4>
                    <address>
                        {socialsInfo.map((social, index) =>
                            <a href={social.href} key={index} className="footer-link"><FontAwesomeIcon icon={social.icon} className="icon" />  {social.info}</a>
                        )}
                    </address>
                </div>
            </div>
       </footer>
    )
}