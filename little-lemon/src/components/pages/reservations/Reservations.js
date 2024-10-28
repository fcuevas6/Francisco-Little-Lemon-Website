import "./Reservations.css"
import restaurantImg from "./assets/restaurant-indoor.jpg"
import BookingForm from "./BookingForm"

export default function Reservations() {
    return (
        <section className="container">
            <div className="booking-container">
                <div className="booking-img">
                    <img src={restaurantImg} alt="Customers eating at table" />
                </div>
                <div className="booking-area">
                    <h2>Join us for dinner</h2>
                    <h3>Fill out your reservation below</h3>
                    <BookingForm />
                </div>
            </div>
        </section>
    )
}