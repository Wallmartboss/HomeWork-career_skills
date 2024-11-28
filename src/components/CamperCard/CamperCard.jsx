import { Link } from 'react-router-dom';
import s from './CamperCard.module.css';
import {
  addToFavorites,
  removeFromFavorites,
} from '../../redux/favorites/slice';
import { useDispatch, useSelector } from 'react-redux';
import heart from '../../img/heart.svg';
const CamperCard = ({ camper }) => {
  const dispatch = useDispatch();
  const { id, name, gallery, price } = camper;

  const favorites = useSelector(state => state.favorites.items);

  const isFavorite = favorites.some(item => item.id === camper.id);

  const handleFavoriteToggle = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(camper.id));
    } else {
      dispatch(addToFavorites(camper));
    }
  };
  return (
    <div className={s.camperCard}>
      <img
        className={s.image}
        src={gallery[0]?.original || '/placeholder.jpg'}
        alt={name}
      />
      <div className={s.info}>
        <div className={s.mainInfo}>
          <h2 className={s.name}>{name}</h2>
          <p className={s.price}>€{Number(price).toFixed(0)}</p>
        </div>
        <div className={s.actions}>
          <button
            className={`${s.favoriteBtn} ${isFavorite ? s.active : ''}`}
            onClick={handleFavoriteToggle}
          >
            <img
              src={heart}
              alt={isFavorite ? 'Favorite' : 'Not favorite'}
              style={{
                fill: isFavorite ? 'var(--button_hover)' : 'var(--main)',
              }}
            />
          </button>
          <Link to={`/catalog/${id}`}>
            <button className={s.showMoreBtn}>Show More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CamperCard;
