import React, { useState } from 'react';
import s from './BookingForm.module.css';

const BookingForm = ({ camperId, price }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [guests, setGuests] = useState(1);

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Booking details:', { camperId, startDate, endDate, guests });
    alert('Booking confirmed!');
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <h3>Book this camper</h3>
      <label>
        Start Date:
        <input
          type="date"
          value={startDate}
          onChange={e => setStartDate(e.target.value)}
          required
        />
      </label>
      <label>
        End Date:
        <input
          type="date"
          value={endDate}
          onChange={e => setEndDate(e.target.value)}
          required
        />
      </label>
      <label>
        Guests:
        <input
          type="number"
          min="1"
          value={guests}
          onChange={e => setGuests(e.target.value)}
          required
        />
      </label>
      <p>Total price: €{(price * guests).toFixed(2)}</p>
      <button type="submit">Book Now</button>
    </form>
  );
};

export default BookingForm;
