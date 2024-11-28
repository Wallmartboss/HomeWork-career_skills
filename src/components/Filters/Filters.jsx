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
        <label>Location</label>
        <input
          type="text"
          name="location"
          value={filters.location}
          placeholder="Kyiv, Ukraine"
          onChange={handleInputChange}
        />
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

// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { fetchCampers } from '../../redux/campers/operations';
// import s from './Filters.module.css';
// import AC from '../../img/acForBig.svg';
// import automatic from '../../img/automForBig.svg';
// import kitchen from '../../img/kitchenForBig.svg';
// import TV from '../../img/tvForBig.svg';
// import bathroom from '../../img/bathForBig.svg';

// const Filters = () => {
//   const dispatch = useDispatch();
//   const [filters, setFilters] = useState({
//     location: '',
//     transmission: '', // automatic чи manual
//     form: '', // van, fullyIntegrated, alcove
//     AC: false,
//     kitchen: false,
//     TV: false,
//     bathroom: false,
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

//     const filtersToSend = Object.fromEntries(
//       Object.entries(filters).filter(([key, value]) => {
//         return value !== '' && value !== false;
//       })
//     );
//     dispatch(fetchCampers(filtersToSend));
//   };

//   return (
//     <form className={s.filterForm} onSubmit={handleSubmit}>
//       <div className={s.filterGroup}>
//         <label>Location</label>
//         <input
//           type="text"
//           name="location"
//           value={filters.location}
//           placeholder="Kyiv, Ukraine"
//           onChange={handleChange}
//         />
//       </div>

//       <div className={s.filterGroup}>
//         <h4>Vehicle equipment</h4>
//         <label>
//           <input
//             type="checkbox"
//             name="AC"
//             checked={filters.AC}
//             onChange={handleChange}
//           />
//           <img className={s.iconBig} src={AC} alt="AC" />
//         </label>

//         <label>
//           <input
//             type="radio"
//             name="transmission"
//             value="automatic"
//             checked={filters.transmission === 'automatic'}
//             onChange={handleChange}
//           />
//           <img className={s.iconBig} src={automatic} alt="automatic" />
//         </label>
//         <label>
//           <input
//             type="checkbox"
//             name="kitchen"
//             checked={filters.kitchen}
//             onChange={handleChange}
//           />
//           <img className={s.iconBig} src={kitchen} alt="kitchen" />
//         </label>
//         <label>
//           <input
//             type="checkbox"
//             name="TV"
//             checked={filters.TV}
//             onChange={handleChange}
//           />
//           <img className={s.iconBig} src={TV} alt="TV" />
//         </label>
//         <label>
//           <input
//             type="checkbox"
//             name="bathroom"
//             checked={filters.bathroom}
//             onChange={handleChange}
//           />
//           <img className={s.iconBig} src={bathroom} alt="bathroom" />
//         </label>
//       </div>

//       <div className={s.filterGroup}>
//         <h4>Vehicle type</h4>
//         <label>
//           <input
//             type="radio"
//             name="form"
//             value="van"
//             checked={filters.form === 'van'}
//             onChange={handleChange}
//           />
//           Van
//         </label>
//         <label>
//           <input
//             type="radio"
//             name="form"
//             value="fullyIntegrated"
//             checked={filters.form === 'fullyIntegrated'}
//             onChange={handleChange}
//           />
//           Fully Integrated
//         </label>
//         <label>
//           <input
//             type="radio"
//             name="form"
//             value="alcove"
//             checked={filters.form === 'alcove'}
//             onChange={handleChange}
//           />
//           Alcove
//         </label>
//       </div>

//       <button className={s.searchButton}>Search</button>
//     </form>
//   );
// };

// export default Filters;
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
