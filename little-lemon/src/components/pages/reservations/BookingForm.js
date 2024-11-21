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
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Telephone:
          <input
            type='tel'
            placeholder='ex. 222-234-5678'
            value={phoneNum}
            onChange={(e) => setPhoneNum(e.target.value)}
            required
            inputMode="numeric"
          />
        </label>
      </div>
      <div>
        <label>
          Date:
          <input
            type="date"
            value={date}
            onChange={handleDateChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
        Time:
            <select value={time} onChange={(e) => setTime(e.target.value)} required>
              <option value="">Select Time</option>
              {availableTimes.map(time => {
                const formattedTime = formatTimeTo12Hour(time)
                return (
                  <option key={time} value={time}>{formattedTime}</option>
                )
              })}
            </select>
        </label>
        {error && <p className="error-message">{error}</p>}
      </div>
      <div>
        <label>
          Number of People:
          <input
            type="number"
            min="1"
            max="10"
            value={people}
            onChange={(e) => setPeople(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Occasion:
          <select
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
            required
          >
            <option value="None">None</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </select>
        </label>
      </div>
      <button type="submit" className="primary-btn">Book Table </button>
    </form>
  );
};