import { Link } from 'react-router-dom';
import s from './CamperCard.module.css';
import {
  addToFavorites,
  removeFromFavorites,
} from '../../redux/favorites/slice';
import { useDispatch, useSelector } from 'react-redux';
import star from '../../img/star.svg';
import map from '../../img/map.svg';
import CamperFeatures from '../CamperFeatures/CamperFeatures';

const CamperCard = ({ camper }) => {
  const dispatch = useDispatch();
  const { id, name, gallery, price, rating, reviews, location } = camper;

  const favorites = useSelector(state => state.favorites.items);

  const isFavorite = favorites.some(item => item.id === camper.id);

  const loc = location => {
    const [country, city] = location.split(', ');
    const formattedLocation = `${city}, ${country}`;
    return formattedLocation;
  };
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

          <div className={s.actions}>
            <button
              className={`${s.favoriteBtn} ${isFavorite ? s.active : ''}`}
              onClick={handleFavoriteToggle}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke={isFavorite ? 'var(--button_hover)' : '#101828'}
                strokeWidth="2"
              >
                <path d="M12 9.854L10.659 7.1705C10.326 6.506 9.7485 5.5505 8.931 4.778C8.127 4.0175 7.164 3.5 6 3.5C3.486 3.5 1.5 5.489 1.5 7.88C1.5 9.6965 2.331 10.979 4.302 12.935C4.8075 13.436 5.3835 13.9775 6.021 14.5745C7.683 16.1345 9.75 18.0755 12 20.6705C14.25 18.0755 16.317 16.1345 17.979 14.5745C18.6165 13.9775 19.194 13.4345 19.698 12.935C21.669 10.979 22.5 9.6965 22.5 7.88C22.5 5.489 20.514 3.5 18 3.5C16.8345 3.5 15.873 4.0175 15.069 4.778C14.2515 5.5505 13.674 6.506 13.341 7.1705L12 9.854Z" />
              </svg>
            </button>
          </div>
        </div>
        <div className={s.revLocation}>
          <p className={s.inline}>
            <img className={s.img} src={star} alt="ratingstar" />
            {rating} ({reviews.length} Reviews)
          </p>
          <p className={s.inline}>
            <img className={s.img} src={map} alt="map" /> {loc(location)}
          </p>
        </div>
        <p className={s.textOneLine}>{camper.description}</p>
        <div className={s.features}>
          <CamperFeatures features={camper.features} />
        </div>
        <div className={s.more}>
          <Link to={`/catalog/${id}`}>
            <button className={s.moreBtn}>Show More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CamperCard;
