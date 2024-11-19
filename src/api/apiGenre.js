import axiousClient from "./axiouClient";

const apiGenre = {
  getGenreById: async (id) => {
    try {
      const url = `http://localhost:5000/api/v1/Seriess/${id}`;
      return axiousClient.get(url);
    } catch (error) {
      console.log(error);
    }
  },
  getGenres: async () => {
    try {
      const url = `http://localhost:5000/api/v1/genres`;
      return axiousClient.get(url);
    } catch (error) {
      console.log(error);
    }
  },
};
export default apiGenre;
