import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchMovies } from '../servise/serviseApi';
import SearchForm from 'components/SearchForm/SearchForm';
import MoviesList from 'components/MoveList/MoveList';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);

  const moviesName = searchParams.get('query') ?? '';

  const handleOnSubmit = query => {
    const changeParams = query !== '' ? { query } : {};
    setSearchParams(changeParams);
  };

  useEffect(() => {
    if (!moviesName) return;

    fetchSearchMovies(moviesName).then(({ results }) => {
      setMovies(results);
    });
    // .catch(error => setError(error))
    // .finally(() => setLoading(false));
  }, [moviesName]);

  return (
    <>
      <SearchForm value={moviesName} onSearch={handleOnSubmit} />
      {movies.length > 0 && <MoviesList movies={movies} />}
    </>
  );
};

export default Movies;
