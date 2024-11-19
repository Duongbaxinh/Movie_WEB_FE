import axiousClient from "./axiouClient";

const listSeries = {
  getSeriesById: async (id) => {
    try {
      const url = `http://localhost:5000/api/v1/Seriess/${id}`;
      return axiousClient.get(url);
    } catch (error) {
      console.log(error);
    }
  },
  getSeriess: async () => {
    try {
      const url = `https://movie-web-backend-yui1.onrender.com/api/v1/Seriess`;
      return axiousClient.get(url);
    } catch (error) {
      console.log(error);
    }
  },
};
export default listSeries;
