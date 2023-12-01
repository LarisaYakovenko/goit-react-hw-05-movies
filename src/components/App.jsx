import Movies from 'pages/Movies';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import MovieDetails from 'pages/MovieDetails';
import Home from 'pages/Home/Home';

import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';

// import MovieDetails from 'pages/MovieDetails';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
