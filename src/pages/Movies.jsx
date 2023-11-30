import { Link, Outlet } from 'react-router-dom';

const Movies = () => {
  return (
    <>
      <div>Movies</div>
      <Link to={'moviesDetails'}>Detalis</Link>
      <Outlet />
    </>
  );
};
export default Movies;
