import React, { useState } from 'react';
import s from './BookingForm.module.css';
import toast, { Toaster } from 'react-hot-toast';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

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
  const [isOpen, setIsOpen] = useState(false);

  const handleDateChange = date => {
    setBookingDate(date);
    setIsOpen(false);
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <h3>Book your campervan now</h3>
      <p className={s.text}>Stay connected! We are always ready to help you.</p>
      <label>
        <input
          type="text"
          className={s.input}
          placeholder="Name*"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
      </label>
      <label>
        <input
          type="email"
          className={s.input}
          placeholder="Email*"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
      </label>

      <label>
        <DatePicker
          selected={bookingDate}
          className={s.customCalendar}
          onChange={handleDateChange}
          onClickOutside={() => setIsOpen(false)}
          onFocus={() => setIsOpen(true)}
          open={isOpen}
          minDate={new Date()}
          placeholderText="Booking date*"
          dateFormat="dd-MM-yyyy"
        />
      </label>
      <label>
        <textarea
          className={s.textarea}
          placeholder="Comment"
          value={comment}
          onChange={e => setComment(e.target.value)}
        />
      </label>

      <button className={s.button} type="submit">
        Send
      </button>
    </form>
  );
};

export default BookingForm;
