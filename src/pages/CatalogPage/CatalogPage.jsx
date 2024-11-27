import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCampers } from '../../redux/campers/operations';
// import Filters from '../../components/Filters/Filters';
import CamperCard from '../../components/CamperCard/CamperCard';
import Navigation from '../../components/Navigation/Navigation';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector(state => state.campers);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <div style={{ padding: '16px' }}>
      <Navigation />
      {/* <Filters /> */}
      {loading && <p>Завантаження...</p>}
      {error && <p>Помилка: {error}</p>}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '16px',
          justifyContent: 'center',
        }}
      >
        {items.map(camper => (
          <div
            key={camper.id}
            style={{
              flex: '1 1 calc(33.333% - 16px)', // Ширина одной карты
              maxWidth: 'calc(33.333% - 16px)', // Ограничение ширины
              boxSizing: 'border-box',
            }}
          >
            <CamperCard camper={camper} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatalogPage;

// import { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchCampers } from '../../redux/campers/operations';
// import { selectCampers } from '../../redux/campers/campersSlice';
// import CamperCard from '../../components/CamperCard/CamperCard';

// const CatalogPage = () => {
//   const dispatch = useDispatch();
//   const campers = useSelector(selectCampers);

//   useEffect(() => {
//     dispatch(fetchCampers());
//   }, [dispatch]);

//   return (
//     <div>
//       <h1>Catalog</h1>
//       <div className="campers-list">
//         {campers.map(camper => (
//           <CamperCard key={camper.id} camper={camper} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CatalogPage;
