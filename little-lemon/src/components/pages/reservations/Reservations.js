import React, { useState, useReducer } from "react"
import "./Reservations.css"
import restaurantImg from "./assets/restaurant-indoor.jpg"
import BookingForm from "./BookingForm"
import WeeklySpecials from "../home/WeeklySpecials"
import { formatTimeTo12Hour } from "./BookingForm"

const timesReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_TIMES' :
            return action.payload
        case 'INITIALIZE_TIMES' :
            return action.payload
        default:
            return state
    }
}

export default function Reservations() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [reservationData, setReservationData] = useState(null);
    const [availableTimes, dispatch] = useReducer(timesReducer, [])

    function updateTimes(date) {
        const times = ["16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30"]
        dispatch({ type: 'UPDATE_TIMES', payload: times })
    }

    function initializeTimes() {
        const initialTimes = ["16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30"]
        dispatch( { type: 'INITIALIZE_TIMES', payload: initialTimes})
    }

    React.useEffect(() => {
        initializeTimes()
    }, [])

    function handleFormSubmit(data) {
        setIsSubmitted(true);
        setReservationData(data)
    }

    function handleDateChange(date) {
        updateTimes(date)
    }

    function formatDate(dateString){
        const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', options);
    }

    return (
        <section>
            <div className="booking-container">
                {isSubmitted ? (
                    <div className="confirmation-message">
                        <h2>Thank you {reservationData.firstName}, your table is booked!</h2>
                        <h3>{reservationData.firstName} {reservationData.lastName} your {reservationData.people} person reservation is set for <br/> {formatDate(reservationData.date)} at {formatTimeTo12Hour(reservationData.time)}
                            {reservationData.occasion !== "None" && reservationData.occasion ? ` to celebrate a ${reservationData.occasion}` : ""}</h3>
                        <p>An email confirmation has been sent to {reservationData.email}</p>
                        <p>If we need to contact you regarding your reservation we will use the provided phone number: {reservationData.phoneNum}</p>
                    </div>
                ) : (
                    <>
                    <div className="booking-area">
                        <h2>Join us for dinner</h2>
                        <h3>Fill out your reservation information below!!</h3>
                        <BookingForm onSubmit={handleFormSubmit} availableTimes={availableTimes} onDateChange={handleDateChange} id="booking-form"/>
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
