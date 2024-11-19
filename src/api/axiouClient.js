import axious from "axios";

const axiousClient = axious.create({
  URL: "/",
});
axiousClient.interceptors.request.use(async (config) => {
  return config;
});
axiousClient.interceptors.response.use((response) => {
  if (response && response.data) {
    return response.data;
  }
});
export default axiousClient;
