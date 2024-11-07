import React, { useState } from 'react';
import "./BookingForm.css"

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
    onSubmit(bookingDetails);
    console.log('Booking Details:', bookingDetails);
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
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
        Time:
            <select value={time} onChange={(e) => setTime(e.target.value)} required>
              <option value="">Select Time</option>
            {Array.from({ length: 12 }, (_, i) => {
                const hour = 16 + Math.floor(i / 2); // Calculate the hour
                const minute = (i % 2) * 30; // 0 for even indexes, 30 for odd indexes
                const formattedHour = hour > 12 ? hour - 12 : hour; // Convert to 12-hour format
                const period = hour >= 12 ? 'PM' : 'AM'; // Determine AM/PM
                const timeString = `${formattedHour}:${minute === 0 ? '00' : minute} ${period}`; // Format the time string

                return (
                    <option key={timeString} value={`${hour}:${minute === 0 ? '00' : minute}`} required>
                        {timeString}
                    </option>
                     );
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