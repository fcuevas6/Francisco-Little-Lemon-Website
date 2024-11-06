import React, { useState } from "react"
import "./Reservations.css"
import restaurantImg from "./assets/restaurant-indoor.jpg"
import BookingForm from "./BookingForm"
import WeeklySpecials from "../home/WeeklySpecials"

export default function Reservations() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [reservationData, setReservationData] = useState(null);

    function handleFormSubmit(data) {
        setIsSubmitted(true);
        setReservationData(data)
    }

    function convertTo12HourFormat(time) {
        const [hours, minutes] = time.split(':');
        const hour = parseInt(hours, 10);
        const isPM = hour >= 12;
        const formattedHour = hour % 12 || 12; // Convert 0 to 12
        const formattedTime = `${formattedHour}:${minutes} ${isPM ? 'PM' : 'AM'}`;
        return formattedTime;
    };

    function formatDate(dateString){
        const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', options);
    }


    console.log(isSubmitted)
    console.log(reservationData)


    return (
        <section>
            <div className="booking-container">
                {isSubmitted ? (
                    <div className="confirmation-message">
                        <h1>Thank you {reservationData.firstName}, your table is booked!</h1>
                        <h3>{reservationData.firstName} {reservationData.lastName} your {reservationData.people} person reservation is set for {formatDate(reservationData.date)} at {convertTo12HourFormat(reservationData.time)}
                            {reservationData.occaison !== "None" || "" && ` to celebrate a ${reservationData.occasion}`}</h3>
                        <p>An email confirmation has been sent to {reservationData.email} <br/>If we need to contact you regarding your reservation we will use the provided phone number: {reservationData.phoneNum}</p>
                    </div>
                ) : (
                    <>
                    <div className="booking-area">
                        <h2>Join us for dinner</h2>
                        <h3>Fill out your reservation information below!</h3>
                        <BookingForm onSubmit={handleFormSubmit}/>
                    </div>
                    <div className="booking-img">
                        <img src={restaurantImg} alt="Customers eating at table" />
                    </div>
                    </>
                )}
            </div>
            <WeeklySpecials />
        </section>
    )
}