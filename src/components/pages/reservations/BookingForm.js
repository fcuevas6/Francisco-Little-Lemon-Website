import React, { useState, useEffect } from 'react';
import "./BookingForm.css"
import {fetchAPI, submitAPI} from "../../../utils/api"

export function formatTimeTo12Hour(time) {
  const [hour, minute] = time.split(":").map(Number)
  const period = hour >= 12 ? "PM" : "AM"
  const formattedHour = hour % 12 === 0 ? 12 : hour % 12
  const formattedMinute = minute === 0 ? "00" : minute
  return `${formattedHour}:${formattedMinute} ${period}`
}

export default function BookingForm({ onSubmit }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("")
  const [phoneNum, setPhoneNum] = useState("")
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [people, setPeople] = useState(1);
  const [occasion, setOccasion] = useState("");
  const [error, setError] = useState("")
  const [availableTimes, setAvailableTimes] = useState([])

  useEffect(() => {
    const today = new Date()
    setAvailableTimes(fetchAPI(today))
  }, [])

  const handleDateChange = (e) => {
    const newDate = e.target.value
    setDate(newDate)
    const dateObject = new Date(newDate)
    setAvailableTimes(fetchAPI(dateObject))
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!time) {
      setError("Please select a time");
      return;
    }
    setError("")


    const bookingDetails = {
      firstName,
      lastName,
      email,
      phoneNum,
      date,
      time,
      people,
      occasion,
    };

    if (submitAPI(bookingDetails)) {
      alert('Reservation succesful!')
      onSubmit(bookingDetails)
    } else {
      alert('Reservation failed.')
    }

    console.log(bookingDetails)
  };

  return (
    <form onSubmit={handleSubmit} aria-labelledby="booking-form">
      <div>
        <label htmlFor="first-name">
          First Name:
          <input
            id="first-name"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            aria-required="true"
          />
        </label>
      </div>
      <div>
        <label htmlFor="last-name">
          Last Name:
          <input
            id="last-name"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            aria-required="true"
          />
        </label>
      </div>
      <div>
        <label htmlFor="email">
          Email:
          <input
            id="email"
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-required="true"
          />
        </label>
      </div>
      <div>
        <label htmlFor="phone">
          Telephone:
          <input
            id="phone"
            type='tel'
            placeholder='ex. 222-234-5678'
            value={phoneNum}
            onChange={(e) => setPhoneNum(e.target.value)}
            required
            inputMode="numeric"
            aria-required="true"
          />
        </label>
      </div>
      <div>
        <label htmlFor="date">
          Date:
          <input
            id="date"
            type="date"
            value={date}
            onChange={handleDateChange}
            required
            aira-required="true"
          />
        </label>
      </div>
      <div>
        <label htmlFor="time">
        Time:
            <select 
            id="time"
            value={time} 
            onChange={(e) => setTime(e.target.value)} 
            required
            aira-required="true"
            >
              <option value="">Select Time</option>
              {availableTimes.map(time => {
                const formattedTime = formatTimeTo12Hour(time)
                return (
                  <option key={time} value={time}>{formattedTime}</option>
                )
              })}
            </select>
        </label>
        {error && <p className="error-message" aria-live="assertive">{error}</p>}
      </div>
      <div>
        <label htmlFor="people">
          Number of People:
          <input
            id="people"
            type="number"
            min="1"
            max="10"
            value={people}
            onChange={(e) => setPeople(e.target.value)}
            required
            aria-required="true"
          />
        </label>
      </div>
      <div>
        <label htmlFor="occasion">
          Occasion:
          <select
            id="occasion"
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
            required
            aria-required="true"
          >
            <option value="None">None</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </select>
        </label>
      </div>
      <button type="submit" className="primary-btn" aria-label="Book Table">Book Table </button>
    </form>
  );
};