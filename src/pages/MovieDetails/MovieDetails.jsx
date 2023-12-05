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
  const [moviesDetails, setMoviesDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    fetchMovie(movieId).then(setMoviesDetails).finally(setLoading(false));
  }, [movieId]);

  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <Container>
      {loading && <Loader />}
      <Button to={location.state?.from || '/'} type="button" state={location}>
        Back
      </Button>
      {moviesDetails && (
        <MovieBlok>
          <Img
            src={
              moviesDetails.poster_path
                ? `https://image.tmdb.org/t/p/w500${moviesDetails.poster_path}`
                : defaultImg
            }
            width={250}
            alt="poster"
          />

          <InfoMovie>
            <h1>{moviesDetails.title}</h1>
            <p>
              User Score: <b>{Math.round(moviesDetails.vote_average * 10)}%</b>
            </p>
            <h2>Overview</h2>
            <p>{moviesDetails.overview}</p>
            <h2>Genres</h2>
            <p>{moviesDetails.genres?.map(({ name }) => name).join(', ')} </p>
          </InfoMovie>
        </MovieBlok>
      )}

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
