import React from 'react';
import { useSelector } from 'react-redux';
import { useOutletContext } from 'react-router-dom';
// import star from '../../img/star.svg';
const Reviews = () => {
  const { camper } = useOutletContext();

  console.log('reviews', camper.reviews);

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

  return (
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
  );
};

export default Reviews;
