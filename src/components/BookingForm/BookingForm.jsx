import React, { useState } from 'react';
import s from './BookingForm.module.css';
import toast, { Toaster } from 'react-hot-toast';

const BookingForm = ({ camperId, price }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bookingDate, setBookingDate] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Booking details:', { camperId, name, email, bookingDate });
    toast.success('You successfully made a booking of this camper! ');
    setName('');
    setEmail('');
    setBookingDate('');
    setComment('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <h3>Book your campervan now</h3>
      <p className={s.text}>Stay connected! We are always ready to help you.</p>
      <label>
        <input
          type="text"
          placeholder="Name*"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
      </label>
      <label>
        <input
          type="email"
          placeholder="Email*"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
      </label>
      <label>
        <input
          type="date"
          placeholder="Booking date*"
          min={new Date().toISOString().split('T')[0]}
          value={bookingDate}
          onChange={e => setBookingDate(e.target.value)}
          required
        />
      </label>
      <label>
        <textarea
          placeholder="Comment"
          value={comment}
          onChange={e => setComment(e.target.value)}
        />
      </label>

      <button type="submit">Send</button>
    </form>
  );
};

export default BookingForm;
