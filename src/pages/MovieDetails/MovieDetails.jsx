import { useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovie } from 'servise/serviseApi';
import {
  Button,
  Img,
  Container,
  InfoMovie,
  MovieBlok,
  Li,
} from './MovieDetails.styled';
import { Loader } from 'components/Loader/Loader';

const MovieDetails = () => {
  const [moviesDetails, setMoviesDetails] = useState({});
  const [loading, setLoading] = useState(false);

  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    fetchMovie(movieId).then(setMoviesDetails).finally(setLoading(false));
  }, [movieId]);

  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  const { poster_path, title, vote_average, overview, genres } = moviesDetails;

  return (
    <Container>
      {loading && <Loader />}
      <Button to={'/'} type="button" state={location}>
        Back
      </Button>
      <MovieBlok>
        <Img
          src={
            moviesDetails.poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : defaultImg
          }
          width={250}
          alt="poster"
        />

        <InfoMovie>
          <h1>{title}</h1>
          <p>
            User Score: <b>{Math.round(vote_average * 10)}%</b>
          </p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <p>{genres?.map(({ name }) => name).join(', ')} </p>
        </InfoMovie>
      </MovieBlok>
      <div>
        <h2>Additional information</h2>
        <ul>
          <Li to="cast">Cast</Li>

          <Li to="reviews">Reviews</Li>
        </ul>
        <Outlet />
      </div>
    </Container>
  );
};
export default MovieDetails;
