import React from 'react';
import { useSelector } from 'react-redux';

const Reviews = ({ camper }) => {
  const reviews = useSelector(state => state.campers.reviews);

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
