import axios from 'axios';

const KEY = 'd7e1feefb2be86c23322f9d6c93516c8';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const fetchTrending = async () => {
  const { data } = await axios.get(`trending/movie/day?api_key=${KEY}`);
  return data.results;
};

export const fetchMovie = async movieId => {
  const { data } = await axios.get(
    `movie/${movieId}?api_key=${KEY}&language=en-US`
  );
  return data;
};

export const fetchCast = async movieId => {
  const { data } = await axios.get(
    `movie/${movieId}/credits?api_key=${KEY}&language=en-US`
  );
  return data.cast;
};

export const fetchReviews = async movieId => {
  const { data } = await axios.get(
    `movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=1`
  );
  return data.cast;
};

export const fetchSearchMovies = async query => {
  const { data } = await axios.get(
    `search/movie?api_key=${KEY}&language=en-US&page=1&include_adult=false&query=${query}`
  );
  return data.results;
};
