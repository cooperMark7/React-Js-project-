// FlightSearchForm.js
import React, { useState } from 'react';

function FlightSearchForm({ onSearch }) {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [journeyDate, setJourneyDate] = useState('');
  const [passengers, setPassengers] = useState('');

  const handleSearch = () => {
    // Validating and making sure all the Fields are filled 
    if (from && to && journeyDate && passengers) {
      onSearch({ from, to, journeyDate, passengers });
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <div className="search-form">
      <h2>Flights Booking</h2>
      <div className="form-group">
        <label>Destination From:</label>
        <input type="text" value={from} onChange={(e) => setFrom(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Destination To:</label>
        <input type="text" value={to} onChange={(e) => setTo(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Journey Date:</label>
        <input type="date" value={journeyDate} onChange={(e) => setJourneyDate(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Passengers:</label>
        <input type="number" value={passengers} onChange={(e) => setPassengers(e.target.value)} />
      </div>
      <button onClick={handleSearch}>Book +</button>
    </div>
  );
}

export default FlightSearchForm;
