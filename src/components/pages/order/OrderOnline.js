import { Link } from "react-router-dom"
import "./OrderOnline.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons"

export default function OrderOnline() {
    return (
        <div className="container">
            <div className="order-page">
                <h1>Order Online</h1>
                <h2>This page is currently under construction.</h2>
                <p><FontAwesomeIcon icon={faScrewdriverWrench} className="build-icon"/></p>
                <h4>Check back later when this functionality is available.</h4>
            </div>
            <div className="order-page-btn">
                <Link to="/" className="primary-btn">Home</Link>
            </div>
        </div>
    )
}