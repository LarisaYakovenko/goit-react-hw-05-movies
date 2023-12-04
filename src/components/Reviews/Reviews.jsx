import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'servise/serviseApi';
import { Card } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setMoviesReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchReviews(movieId).then(setMoviesReviews);
  }, [movieId]);

  return (
    <>
      <div>
        <Card>
          {reviews.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <h4>{author}</h4>
                <p>{content}</p>
              </li>
            );
          })}
        </Card>
      </div>
    </>
  );
};

export default Reviews;
