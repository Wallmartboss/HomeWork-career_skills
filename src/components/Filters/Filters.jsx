import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCampers } from '../../redux/campers/operations';
import s from './Filters.module.css';

const Filters = () => {
  const dispatch = useDispatch();
  const [filters, setFilters] = useState({
    location: '',
    transmission: '', // automatic чи manual
    form: '', // van, fullyIntegrated, alcove
    AC: false,
    kitchen: false,
    TV: false,
    bathroom: false,
  });
  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setFilters({
      ...filters,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(fetchCampers(filters));
  };

  return (
    <form className={s.filterForm} onSubmit={handleSubmit}>
      <div className={s.filterGroup}>
        <label>Location</label>
        <input
          type="text"
          name="location"
          value={filters.location}
          placeholder="Kyiv, Ukraine"
          onChange={handleChange}
        />
      </div>

      <div className={s.filterGroup}>
        <h4>Transmission</h4>
        <label>
          <input
            type="radio"
            name="transmission"
            value="automatic"
            checked={filters.transmission === 'automatic'}
            onChange={handleChange}
          />
          Automatic
        </label>
        <label>
          <input
            type="radio"
            name="transmission"
            value="manual"
            checked={filters.transmission === 'manual'}
            onChange={handleChange}
          />
          Manual
        </label>
      </div>

      <div className={s.filterGroup}>
        <h4>Vehicle form</h4>
        <label>
          <input
            type="radio"
            name="form"
            value="van"
            checked={filters.form === 'van'}
            onChange={handleChange}
          />
          Van
        </label>
        <label>
          <input
            type="radio"
            name="form"
            value="fullyIntegrated"
            checked={filters.form === 'fullyIntegrated'}
            onChange={handleChange}
          />
          Fully Integrated
        </label>
        <label>
          <input
            type="radio"
            name="form"
            value="alcove"
            checked={filters.form === 'alcove'}
            onChange={handleChange}
          />
          Alcove
        </label>
      </div>

      <div className={s.filterGroup}>
        <h4>Equipment</h4>
        <label>
          <input
            type="checkbox"
            name="AC"
            checked={filters.AC}
            onChange={handleChange}
          />
          AC
        </label>
        <label>
          <input
            type="checkbox"
            name="kitchen"
            checked={filters.kitchen}
            onChange={handleChange}
          />
          Kitchen
        </label>
        <label>
          <input
            type="checkbox"
            name="TV"
            checked={filters.TV}
            onChange={handleChange}
          />
          TV
        </label>
        <label>
          <input
            type="checkbox"
            name="bathroom"
            checked={filters.bathroom}
            onChange={handleChange}
          />
          Bathroom
        </label>
      </div>

      <button className={s.searchButton}>Search</button>
    </form>
  );
};

export default Filters;
//   const handleInputChange = e => {
//     const { name, value, type, checked } = e.target;
//     setFilters(prevFilters => ({
//       ...prevFilters,
//       [name]: value,
//     }));
//   };

//   const handleButtonToggle = filterName => {
//     setFilters(prevFilters => ({
//       ...prevFilters,
//       [filterName]: !prevFilters[filterName],
//     }));
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     dispatch(fetchCampers(filters));
//   };

//   return (
//     <form className={s.filterForm} onSubmit={handleSubmit}>
//       <div className={s.filterGroup}>
//         <label htmlFor="location">Location</label>
//         <input
//           type="text"
//           id="location"
//           name="location"
//           placeholder="Kyiv, Ukraine"
//           value={filters.location}
//           onChange={handleInputChange}
//         />
//       </div>

//       <div className={s.filterGroup}>
//         <h4>Vehicle equipment</h4>
//         <button
//           type="button"
//           className={filters.ac ? s.active : ''}
//           onClick={() => handleButtonToggle('ac')}
//         >
//           AC
//         </button>
//         <button
//           type="button"
//           className={filters.automatic ? s.active : ''}
//           onClick={() => handleButtonToggle('automatic')}
//         >
//           Automatic
//         </button>
//         <button
//           type="button"
//           className={filters.kitchen ? s.active : ''}
//           onClick={() => handleButtonToggle('kitchen')}
//         >
//           Kitchen
//         </button>
//         <button
//           type="button"
//           className={filters.bathroom ? s.active : ''}
//           onClick={() => handleButtonToggle('bathroom')}
//         >
//           Bathroom
//         </button>
//         <button
//           type="button"
//           className={filters.tv ? s.active : ''}
//           onClick={() => handleButtonToggle('tv')}
//         >
//           TV
//         </button>
//       </div>

//       <div className={s.filterGroup}>
//         <h4>Vehicle type</h4>
//         <button
//           type="button"
//           className={filters.van ? s.active : ''}
//           onClick={() => handleButtonToggle('van')}
//         >
//           Van
//         </button>
//         <button
//           type="button"
//           className={filters.fullyIntegrated ? s.active : ''}
//           onClick={() => handleButtonToggle('fullyIntegrated')}
//         >
//           Fully Integrated
//         </button>
//         <button
//           type="button"
//           className={filters.alcove ? s.active : ''}
//           onClick={() => handleButtonToggle('alcove')}
//         >
//           Alcove
//         </button>
//       </div>

//       <button type="submit" className={s.searchButton}>
//         Search
//       </button>
//     </form>
//   );
// };

// export default Filters;

// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { fetchCampers } from '../../redux/campers/operations';
// import s from './Filters.module.css';
// import { Tv } from '@mui/icons-material';

// const Filters = () => {
//   const dispatch = useDispatch();
//   const [filters, setFilters] = useState({
//     location: '',
//     ac: false,
//     automatic: false,
//     kitchen: false,
//     tv: false,
//     bathroom: false,
//     van: false,
//     fullyIntegrated: false,
//     alcove: false,
//   });

//   const handleChange = e => {
//     const { name, value, type, checked } = e.target;
//     setFilters({
//       ...filters,
//       [name]: type === 'checkbox' ? checked : value,
//     });
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     dispatch(fetchCampers(filters));
//   };

//   return (
//     <form className={s.filterForm} onSubmit={handleSubmit}>
//     // <form className={s.filters}>
//      <div className={s.filterGroup}>
//           <label>Location</label>
//           <input type="text" placeholder="Kyiv, Ukraine" />
//         </div>

//         <div className={s.filterGroup}>
//           <h4>Vehicle equipment</h4>
//           <button>AC</button>
//           <button>Automatic</button>
//           <button>Kitchen</button>
//           <button>Bathroom</button>
//           <button>TV</button>
//         </div>

//         <div className={s.filterGroup}>
//           <h4>Vehicle type</h4>
//           <button>Van</button>
//           <button>Fully Integrated</button>
//           <button>Alcove</button>
//         </div>

//         <button className={s.searchButton}>Search</button>
//       </form>;
//   );

// export default Filters;
