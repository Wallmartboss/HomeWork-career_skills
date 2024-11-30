import React, { useEffect } from 'react';
import { useParams, NavLink, Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCamperById } from '../../redux/campers/operations';
import s from './CamperPage.module.css';
import star from '../../img/star.svg';
import map_icon from '../../img/map_icon.svg';
import BookingForm from '../../components/BookingForm/BookingForm';

const CamperPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  // const camper = useSelector(state => state.campers.selectedCamper);
  const { camper, gallery, reviews } = useSelector(state => state.campers);

  useEffect(() => {
    dispatch(fetchCamperById(id));
  }, [dispatch, id]);

  const renderStars = rating => {
    const stars = Array.from({ length: 5 }, (_, index) => {
      return (
        <span
          key={index}
          className={index < rating ? `{ s.filled }` : `{ s.empty }`}
        >
          {index < rating ? (
            <svg
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                fill="#FFC531"
              />
            </svg>
          ) : (
            <svg
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                fill="#F2F4F7"
              />
            </svg>
          )}
        </span>
      );
    });
    return stars;
  };

  if (!camper) return <p>Loading...</p>;

  const location = camperLocation => {
    const [country, city] = camperLocation.split(', ');
    const formattedLocation = `${city}, ${country}`;
    return formattedLocation;
  };
  return (
    <div className={s.camperPage}>
      <div className={s.camperInfo}>
        <h2 className={s.name}>{camper?.name}</h2>
        <div className={s.revLocation}>
          <p className={s.inline}>
            <img className={s.img} src={star} alt="ratingstar" />
            {camper?.rating} ({reviews.length} Reviews)
          </p>
          <p className={s.inline2}>
            <img className={s.img} src={map_icon} alt="map" />{' '}
            {location(camper?.location)}
          </p>
        </div>
        <p className={s.price}>€{Number(camper?.price).toFixed(2)}</p>
      </div>

      <div className={s.gallery}>
        {camper.gallery.map((image, index) => (
          <img
            className={s.imageGallery}
            key={index}
            src={image.original}
            alt={`${camper?.name} ${index}`}
            loading="lazy"
          />
        ))}
      </div>
      <p className={s.description}>{camper?.description}</p>

      <div className={s.subMenu}>
        <NavLink
          to="features"
          className={({ isActive }) =>
            isActive ? `${s.subMenuText} ${s.active}` : s.subMenuText
          }
        >
          Features
        </NavLink>
        <NavLink
          to="reviews"
          className={({ isActive }) =>
            isActive ? `${s.subMenuText} ${s.active}` : s.subMenuText
          }
        >
          Reviews
        </NavLink>
      </div>
      <hr className={s.line} />
      <div className={s.dynamicContent}>
        <Outlet />
      </div>
      <div className={s.bookingForm}>
        <BookingForm camperId={camper?.id} price={camper?.price} />
      </div>
    </div>
  );
};

export default CamperPage;
