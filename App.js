// App.js
import React, { useState } from 'react';
import './App.css';
import FlightSearchForm from './components/FlightSearchForm';
import Footer from './components/Footer';

function App() {
  const [bookingDetails, setBookingDetails] = useState(null);

  const handleSearch = (searchData) => {
    setBookingDetails(searchData);
  };

  return (
    <div className="App">
      <FlightSearchForm onSearch={handleSearch} />
      {bookingDetails && (
        <div className="booking-details">
          <h2>Booking Details</h2>
          <p><strong> From:</strong> {bookingDetails.from}</p>
          <p><strong> To:</strong> {bookingDetails.to}</p>
          <p><strong> Journey Date:</strong> {bookingDetails.journeyDate}</p>
          <p><strong> Passengers:</strong> {bookingDetails.passengers}</p>
        </div>
      )}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
