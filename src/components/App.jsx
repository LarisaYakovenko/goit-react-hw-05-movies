import Movies from 'pages/Movies';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import MovieDetails from 'pages/MovieDetails';
import Home from 'pages/Home/Home';

// import MovieDetails from 'pages/MovieDetails';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />} />
      </Route>
    </Routes>
  );
};

export default App;
