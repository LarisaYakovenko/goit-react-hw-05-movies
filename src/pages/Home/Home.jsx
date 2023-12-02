import { useEffect, useState } from 'react';
import { H1 } from './Home.styled';
import { fetchTrending } from 'servise/serviseApi';
import MoveList from 'components/MoveList/MoveList';
// import Header from '../components/Header/Header';
// import { Outlet } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTrending();
        setMovies([...data.results]);
      } catch (error) {
        console.log('Error', error.message);
      }
    };
    fetchData();
    console.log('object :>> ', { setMovies });
  }, []);

  return (
    <>
      <H1>Trending today</H1>
      <MoveList movies={movies} />
    </>
  );
};
export default Home;
