import React from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const params = useParams();
  console.log('params :>> ', params);
  return <div>MovieDetails</div>;
};
export default MovieDetails;
