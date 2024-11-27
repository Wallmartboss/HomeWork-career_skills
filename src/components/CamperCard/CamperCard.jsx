import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  IconButton,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToFavorites,
  removeFromFavorites,
} from '../../redux/favorites/slice';

const CamperCard = ({ camper }) => {
  const dispatch = useDispatch();
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
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={camper.image}
        alt={camper.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {camper.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {camper.description}
        </Typography>
      </CardContent>
      <IconButton
        color={isFavorite ? 'error' : 'default'}
        onClick={handleFavoriteToggle}
      >
        <FavoriteIcon />
      </IconButton>
      <Button size="small">Show More</Button>
    </Card>
  );
};

export default CamperCard;

// import { Link } from 'react-router-dom';
// import s from './CamperCard.module.css';

// const CamperCard = ({ camper }) => {
//   const { id, name, image, price } = camper;

//   return (
//     <div className="camper-card">
//       <img src={image} alt={name} />
//       <h2>{name}</h2>
//       <p>{Number(price).toFixed(2)} грн</p>
//       <Link to={`/catalog/${id}`}>
//         <button>Show More</button>
//       </Link>
//     </div>
//   );
// };

// export default CamperCard;
