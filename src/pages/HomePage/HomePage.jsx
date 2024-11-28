import React from 'react';
import s from './HomePage.module.css';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className={s.container}>
      <div className={s.info}>
        <p className={s.title}>Campers of your dreams</p>
        <p className={s.text}>
          You can find everything you want in our catalog
        </p>
        <Link to="/catalog">
          <button className={s.buttonView}>View Now</button>
        </Link>
      </div>
    </div>
  );
};
export default HomePage;
