import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovie } from 'servise/serviseApi';

const MovieDetails = () => {
  const [moviesDetails, setMoviesDetails] = useState({});

  const { movieId } = useParams();
  const location = useLocation();

  // console.log('movieId :>> ', movieId);

  useEffect(() => {
    fetchMovie(movieId).then(setMoviesDetails);
  }, [movieId]);

  const defaultImg =
    '<https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700>';

  // const { poster_path } = moviesDetails;

  return (
    <>
      <Link to={'/'} type="button" state={location}>
        Back
      </Link>
      <div>
        <div>
          <img
            src={
              moviesDetails.poster_path
                ? `https://image.tmdb.org/t/p/w500${moviesDetails.poster_path}`
                : defaultImg
            }
            alt="title"
          />
        </div>
        <div>
          <h1>{moviesDetails.title}</h1>
          <p>
            User Score: <b>{Math.round(moviesDetails.vote_average * 10)}%</b>
          </p>
          <h2>Overview</h2>
          <p>Overview</p>
          <h2>Genres</h2>
          <p>{moviesDetails.genres?.map(({ name }) => name).join(', ')} </p>
        </div>
        <div>
          <h2>Additional information</h2>
          <ul>
            <Link to="cast">Cast</Link>
            <Link to="cast">Reviews</Link>
          </ul>
          <Outlet />
        </div>
      </div>
    </>
  );
};
export default MovieDetails;
