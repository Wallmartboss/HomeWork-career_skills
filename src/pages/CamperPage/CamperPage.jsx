import React, { useEffect } from 'react';
import { useParams, NavLink, Outlet, Navigate } from 'react-router-dom';
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

  if (!camper) return <p>Loading...</p>;
  const isSubRouteActive =
    location.pathname.includes('features') ||
    location.pathname.includes('reviews');

  const locat = camperLocation => {
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
            {camper?.rating} ({camper.reviews.length} Reviews)
          </p>
          <p className={s.inline2}>
            <img className={s.img} src={map_icon} alt="map" />{' '}
            {locat(camper?.location)}
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

      <nav className={s.subMenu}>
        <NavLink
          to="features"
          className={({ isActive }) => (isActive ? s.activeLink : '')}
        >
          Features
        </NavLink>
        <NavLink
          to="reviews"
          className={({ isActive }) => (isActive ? s.activeLink : '')}
        >
          Reviews
        </NavLink>
      </nav>
      <hr className={s.line} />
      <div className={s.content}>
        <div className={s.dynamicContent}>
          {!isSubRouteActive && <Navigate to="features" replace />}
          <Outlet context={{ camper }} />
        </div>

        <div className={s.bookingForm}>
          <BookingForm camperId={camper?.id} price={camper?.price} />
        </div>
      </div>
    </div>
  );
};

export default CamperPage;
