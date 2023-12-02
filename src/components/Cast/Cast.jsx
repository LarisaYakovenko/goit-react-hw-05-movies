import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'servise/serviseApi';

const Cast = () => {
  const [moviesCast, setMoviesCast] = useState([]);
  const { movieId } = useParams;

  // console.log(movieId);
  useEffect(() => {
    const fetchData = async () => {
      if (!movieId) return;
      try {
        const data = await fetchCast(movieId);
        setMoviesCast([...data.cast]);
      } catch (error) {
        console.log('Error', error.message);
      }
    };
    fetchData();
  }, [movieId]);
  // useEffect(() => {
  //   //   fetchCast(movieId).then(setMoviesCast);
  //   // }, [movieId]);
  //   const fetchData = async () => {
  //     if (!movieId) return;
  //     try {
  //       const data = await fetchCast(movieId);
  //       setMoviesCast([...data.cast]);
  //     } catch (error) {
  //       console.log('Error', error.message);
  //     }
  //   };
  //   fetchData();
  // }, [movieId]);

  console.log('object :>> ', moviesCast);

  const defaultImg =
    '<https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700>';

  return (
    <>
      <ul>
        {moviesCast.map(({ id, name, character, profile_path }) => (
          <li key={id}>
            <b>{name}</b>
            <p>Character: {character}</p>
            <img
              src={
                profile_path
                  ? `http://image.tmdb.org/t/p/w185${profile_path}`
                  : defaultImg
              }
              alt={name}
              width="100"
              height="150"
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cast;
