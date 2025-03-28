import React from "react"
import { Link } from "react-router-dom"
import "./Hero.css"
import heroImg from "./assets/restaurant-food.jpg"

export default function Hero() {
    return(
        <section className="hero-container">
            <div className="hero">
                <div className="hero-information">
                    <h1>Little Lemon</h1>
                    <h2>Chicago, IL</h2>
                    <p>Welcome to Little Lemon. We are a family
                        owned restaurant serving up fresh and delicious
                        Mediterranean meals in the Lincon Park area.
                        Join us for lunch or dinner!</p>
                    <Link to="/reservations" className="primary-btn">Make a Reservation</Link>
                </div>
                <div>
                    <img src={heroImg} className="hero-image" alt="A plate of assorted bruschetta"/>
                </div>
            </div>
        </section>
    )
}