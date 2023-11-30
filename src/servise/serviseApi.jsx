import axios from 'axios';

const KEY = 'd7e1feefb2be86c23322f9d6c93516c8';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const fetchTrending = async () => {
  // const params = new URLSearchParams({
  //   key: KEY,
  // });

  const { data } = await axios.get(`trending/movie/day?api_key=${KEY}`);
  return data;
};

// axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

// export const fetchTrending = async () => {
//   const res = await axios.get(`trending/movie/day?api_key=${KEY}`);
//   return res.data;
// };
// // export async function fetchTrending(endPoint) {
// //   const url = `${URL}${endPoint}?api_key=${KEY}`;
// //   const response = await axios.get(url);
// //   return response.data;
// // }
