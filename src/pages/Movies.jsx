import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchMovies } from '../servise/serviseApi';
import SearchForm from 'components/SearchForm/SearchForm';
import MoviesList from 'components/MoveList/MoveList';
import { Loader } from 'components/Loader/Loader';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const moviesName = searchParams.get('query') ?? '';

  const handleOnSubmit = query => {
    const changeParams = query !== '' ? { query } : {};
    setSearchParams(changeParams);
  };

  useEffect(() => {
    if (!moviesName) return;
    setLoading(true);

    fetchSearchMovies(moviesName).then(setMovies).finally(setLoading(false));
  }, [moviesName]);

  return (
    <>
      <SearchForm value={moviesName} onSearch={handleOnSubmit} />
      {loading && <Loader />}
      {movies.length > 0 && <MoviesList movies={movies} />}
    </>
  );
};

export default Movies;
