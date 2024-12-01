import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCampers } from '../../redux/campers/operations';
import s from './Filters.module.css';
import AC from '../../img/acForBig.svg';
import automatic from '../../img/automForBig.svg';
import kitchen from '../../img/kitchenForBig.svg';
import TV from '../../img/tvForBig.svg';
import bathroom from '../../img/bathForBig.svg';
import van from '../../img/vanForBig.svg';
import fullyIntegrated from '../../img/fullyForBig.svg';
import alcove from '../../img/alcoveForBig.svg';
import map_icon from '../../img/map_icon.svg';

const Filters = () => {
  const dispatch = useDispatch();
  const [filters, setFilters] = useState({
    location: '',
    transmission: '', // 'automatic' чи 'manual'
    form: '', // 'van', 'fullyIntegrated', 'alcove'
    AC: false,
    kitchen: false,
    TV: false,
    bathroom: false,
  });

  const toggleFilter = filterName => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [filterName]: !prevFilters[filterName],
    }));
  };

  const selectRadioFilter = (name, value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: prevFilters[name] === value ? '' : value,
    }));
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const filtersToSend = Object.fromEntries(
      Object.entries(filters).filter(
        ([key, value]) => value !== '' && value !== false
      )
    );
    dispatch(fetchCampers(filtersToSend));
  };

  return (
    <form className={s.filterForm} onSubmit={handleSubmit}>
      <div className={s.filterGroup}>
        <label htmlFor="location">Location</label>
        <div className={s.inputWrapper}>
          <img src={map_icon} alt="Location icon" className={s.icon} />
          <input
            id="location"
            type="text"
            name="location"
            value={filters.location}
            placeholder="Kyiv, Ukraine"
            onChange={handleInputChange}
            className={s.input}
          />
        </div>
      </div>

      <div className={s.filterGroup}>
        <p className={s.filterTitle}>Filters</p>
        <h3>Vehicle equipment</h3>
        <hr className={s.separator} />

        <button
          type="button"
          className={filters.AC ? s.active : ''}
          onClick={() => toggleFilter('AC')}
        >
          <img className={s.iconBig} src={AC} alt="AC" />
        </button>
        <button
          type="button"
          className={filters.transmission === 'automatic' ? s.active : ''}
          onClick={() => selectRadioFilter('transmission', 'automatic')}
        >
          <img className={s.iconBig} src={automatic} alt="automatic" />
        </button>
        <button
          type="button"
          className={filters.kitchen ? s.active : ''}
          onClick={() => toggleFilter('kitchen')}
        >
          <img className={s.iconBig} src={kitchen} alt="kitchen" />
        </button>
        <button
          type="button"
          className={filters.TV ? s.active : ''}
          onClick={() => toggleFilter('TV')}
        >
          <img className={s.iconBig} src={TV} alt="TV" />
        </button>
        <button
          type="button"
          className={filters.bathroom ? s.active : ''}
          onClick={() => toggleFilter('bathroom')}
        >
          <img className={s.iconBig} src={bathroom} alt="bathroom" />
        </button>
      </div>

      <div className={s.filterGroup}>
        <h3>Vehicle type</h3>
        <hr className={s.separator} />
        <button
          type="button"
          className={filters.form === 'van' ? s.active : ''}
          onClick={() => selectRadioFilter('form', 'van')}
        >
          <img className={s.iconBig} src={van} alt="van" />
        </button>
        <button
          type="button"
          className={filters.form === 'fullyIntegrated' ? s.active : ''}
          onClick={() => selectRadioFilter('form', 'fullyIntegrated')}
        >
          <img
            className={s.iconBig}
            src={fullyIntegrated}
            alt="fullyIntegrated"
          />
        </button>
        <button
          type="button"
          className={filters.form === 'alcove' ? s.active : ''}
          onClick={() => selectRadioFilter('form', 'alcove')}
        >
          <img className={s.iconBig} src={alcove} alt="alcove" />
        </button>
      </div>

      <button type="submit" className={s.searchButton}>
        Search
      </button>
    </form>
  );
};

export default Filters;
