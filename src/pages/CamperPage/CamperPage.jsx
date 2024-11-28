import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCamperById } from '../../redux/campers/operations';
import s from './CamperPage.module.css';

const CamperPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  // const camper = useSelector(state => state.campers.selectedCamper);
  const { camper, gallery, reviews, loading, error } = useSelector(
    state => state.campers
  );

  useEffect(() => {
    dispatch(fetchCamperById(id));
  }, [dispatch, id]);

  console.log({ camper });
  console.log(gallery);

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
    <div>
      <h1>{camper?.name}</h1>
      <h3>{camper?.price}</h3>
      <h3>{camper?.rating}</h3>
      <h3>{location(camper?.location)}</h3>
      <h3>{camper?.form}</h3>
      <h3>{camper?.length}</h3>
      <h3>{camper?.width}</h3>
      <h3>{camper?.tank}</h3>
      <h3>{camper?.consumption}</h3>
      <h3>{camper?.transmission}</h3>
      <h3>{camper?.engine}</h3>
      <p>{camper?.description}</p>

      <div>
        <h2>Gallery</h2>
        {camper.gallery.map((image, index) => (
          <img
            key={index}
            src={image.original}
            alt={`${camper?.name} ${index}`}
            style={{
              width: '292px',
              height: '312px',
              marginBottom: '10px',
              objectFit: 'cover',
            }}
          />
        ))}
      </div>
      <div>
        <h2>Reviews</h2>
        {camper.reviews.map((review, index) => (
          <div key={index}>
            <p>
              <strong>{review.reviewer_name}</strong>
            </p>
            <p> {renderStars(review.reviewer_rating)} </p>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CamperPage;

// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// // import DocumentTitle from '../../components/DocumentTitle';
// import ContactList from '../../components/ContactList/ContactList';
// import ContactsForm from '../../components/ContactsForm/ContactsForm';
// import SearchBox from '../../components/SearchBox/SearchBox';
// import { fetchContacts } from '../../redux/contacts/operations';
// import { selectLoading, selectError } from '../../redux/contacts/selectors';

// const ContactsPage = () => {
//   const dispatch = useDispatch();
//   const loading = useSelector(selectLoading);
//   const error = useSelector(selectError);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <div>
//       <h1> Contact book </h1>
//       <ContactsForm />
//       <SearchBox />
//       {loading && !error && <p>Request in progress...</p>}
//       <ContactList />
//     </div>
//   );
// };
// export default ContactsPage;
