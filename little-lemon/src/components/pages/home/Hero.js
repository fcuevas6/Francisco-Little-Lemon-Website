import "./Hero.css"
import heroImg from "./assets/restaurant-food.jpg"

export default function Hero() {
    return(
        <section className="hero">
            <div className="container grid">
                <div className="hero-information">
                    <h1>Little Lemon</h1>
                    <h2>Chicago, IL</h2>
                    <p>Welcome to Little Lemon. We are a family 
                        owned restaurant serving up fresh and delicious 
                        Mediterranean meals in the Lincon Park area. 
                        Join us for lunch or dinner!</p>
                    <button className="primary-btn">Make a Reservation</button>
                </div>
                <div>
                    <img src={heroImg} className="hero-image" alt="A plate of assorted bruschetta"/>
                </div>
            </div>
        </section>
    )
}