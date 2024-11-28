import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCampers } from '../../redux/campers/operations';
import { selectCampers } from '../../redux/campers/selectors';
// import Filters from '../../components/Filters/Filters';
import CamperCard from '../../components/CamperCard/CamperCard';
import s from './CatalogPage.module.css';

const CatalogPage = () => {
  const dispatch = useDispatch();
  // const { items, loading, error } = useSelector(state => state.campers);
  const campers = useSelector(selectCampers);
  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <div>
      {/* <Filters /> */}
      <div className={s.catalog}>
        {campers.map(camper => (
          <div className={s.field} key={camper.id}>
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
// import { selectCampers } from '../../redux/campers/selectors';
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
//       <div>
//         {Array.isArray(campers) ? (
//           campers.map(camper => <CamperCard key={camper.id} camper={camper} />)
//         ) : (
//           <p>No data for showing</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CatalogPage;
