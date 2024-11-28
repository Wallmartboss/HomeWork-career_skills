import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCampers } from '../../redux/campers/operations';
import { selectCampers } from '../../redux/campers/selectors';
import CamperCard from '../../components/CamperCard/CamperCard';
import Filters from '../../components/Filters/Filters';
import s from './CatalogPage.module.css';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  // const { items, loading, error } = campers;

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <div className={s.mainContent}>
      <aside className={s.sidebar}>
        <Filters />
      </aside>
      <section className={s.content}>
        <div className={s.catalog}>
          {campers.map(camper => (
            <div className={s.field} key={camper.id}>
              <CamperCard camper={camper} />
            </div>
          ))}
        </div>
        {campers.length > 0 && (
          <button className={s.loadMore}>Load more</button>
        )}
      </section>
    </div>
  );
};

export default CatalogPage;
