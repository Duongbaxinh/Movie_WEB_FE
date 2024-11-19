import axiousClient from "./axiouClient";

const listFilm = {
  getList: async () => {
    try {
      const url = `http://localhost:5000/api/v1/movies`;
      return axiousClient.get(url);
    } catch (error) {
      console.log(error);
    }
  },
  getDetai: async (id) => {
    try {
      const url = `https://movie-web-backend-yui1.onrender.com/api/v1/movies/${id.id}`;
      return axiousClient.get(url);
    } catch (error) {
      console.log(error);
    }
  },
  getQueryMovie: async (param) => {
    try {
      const url = `https://movie-web-backend-yui1.onrender.com/api/v1/search`;
      return axiousClient.get(url, { params: param });
    } catch (error) {
      console.log(error);
    }
  },
  getMovieBySeriesId: async (SeriesId) => {
    try {
      const url = `https://movie-web-backend-yui1.onrender.com/api/v1/movies/:${SeriesId}`;
    } catch (error) {
      console.log(error);
    }
  },
};
export default listFilm;
