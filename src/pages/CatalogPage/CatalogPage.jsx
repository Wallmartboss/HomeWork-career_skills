import { useEffect, useState } from 'react';
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
  const [visibleCount, setVisibleCount] = useState(4);

  const handleLoadMore = () => {
    setVisibleCount(prevCount => prevCount + 4);
  };

  const isLoadMoreVisible = visibleCount < campers.length;
  return (
    <div className={s.mainContent}>
      <aside className={s.sidebar}>
        <Filters />
      </aside>
      <section className={s.content}>
        <div className={s.catalog}>
          {campers.slice(0, visibleCount).map(camper => (
            <div className={s.field} key={camper.id}>
              <CamperCard camper={camper} />
            </div>
          ))}
        </div>
        {isLoadMoreVisible && (
          <button className={s.loadMore} onClick={handleLoadMore}>
            Load more
          </button>
        )}
      </section>
    </div>
  );
};

export default CatalogPage;
