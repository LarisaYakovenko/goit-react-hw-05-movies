import { useEffect, useState } from 'react';
import { H1 } from './Home.styled';
import { fetchTrending } from 'servise/serviseApi';
import MoveList from 'components/MoveList/MoveList';
import { Loader } from 'components/Loader/Loader';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchTrending().then(setMovies).finally(setLoading(false));
  }, []);

  return (
    <>
      <H1>Trending today</H1>
      {loading && <Loader />}
      <MoveList movies={movies} />
    </>
  );
};
export default Home;
