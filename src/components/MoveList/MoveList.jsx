import { useLocation } from 'react-router-dom';
import { Img, Li, StylLink, P, List } from './MoveList.styled';

const MoveList = ({ movies }) => {
  const location = useLocation();
  const defaultImg =
    '<https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700>';
  return (
    <List>
      {movies.map(movie => (
        <Li key={movie.id}>
          <StylLink to={`/movies/${movie.id}`} state={{ from: location }}>
            <Img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : defaultImg
              }
              width={250}
              alt="poster"
            />
            <P>{movie.title}</P>
          </StylLink>
        </Li>
      ))}
    </List>
  );
};
export default MoveList;
