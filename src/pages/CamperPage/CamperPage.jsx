import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCamperById } from '../../redux/campers/operations';
import Navigation from '../../components/Navigation/Navigation';

const CamperPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const camper = useSelector(state => state.campers.selectedCamper);

  useEffect(() => {
    dispatch(fetchCamperById(id));
  }, [dispatch, id]);

  if (!camper) return <p>Loading...</p>;

  return (
    <div>
      <Navigation />
      <h1>{camper.name}</h1>
      <img src={camper.image} alt={camper.name} />
      <p>Price: {Number(camper.price).toFixed(2)} грн</p>
      <p>{camper.description}</p>
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
