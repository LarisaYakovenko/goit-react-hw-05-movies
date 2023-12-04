import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'servise/serviseApi';
import { Li, P, Ul } from './Cast.styled';

const Cast = () => {
  const [moviesCast, setMoviesCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchCast(movieId).then(setMoviesCast);
  }, [movieId]);

  const defaultImg =
    '<https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700>';

  return (
    <>
      <Ul>
        {moviesCast.map(({ id, name, profile_path }) => (
          <Li key={id}>
            <img
              src={
                profile_path
                  ? `http://image.tmdb.org/t/p/w185${profile_path}`
                  : defaultImg
              }
              width={250}
              alt="poster"
            />
            <P>{name}</P>
          </Li>
        ))}
      </Ul>
    </>
  );
};

export default Cast;
