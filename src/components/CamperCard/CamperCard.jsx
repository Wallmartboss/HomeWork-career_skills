import { Link } from 'react-router-dom';
import s from './CamperCard.module.css';
import {
  addToFavorites,
  removeFromFavorites,
} from '../../redux/favorites/slice';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch, useSelector } from 'react-redux';

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
        <h2 className={s.name}>{name}</h2>
        <p className={s.price}>{Number(price).toFixed(0)} €</p>
      </div>
      <div className={s.actions}>
        <button
          className={`${s.favoriteBtn} ${isFavorite ? s.active : ''}`}
          onClick={handleFavoriteToggle}
        >
          {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        </button>
        <Link to={`/catalog/${id}`}>
          <button className={s.showMoreBtn}>Show More</button>
        </Link>
      </div>
    </div>
  );
};

export default CamperCard;

//   return (
//     <div className={s.camperCard}>
//       <img src={gallery[0].original} alt={name} />
//       <h2>{name}</h2>
//       <p>{Number(price).toFixed(0)} €</p>
//       <Link to={`/catalog/${id}`}>
//         <button>Show More</button>
//       </Link>
//     </div>
//   );
// };

// export default CamperCard;
