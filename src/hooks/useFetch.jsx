import axios from "axios";
import { useEffect, useState } from "react";
const useFetch = (method = 'get', url, dependence = []) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(url);
        setData(data.metadata)
        setIsLoading(false)
      } catch (error) {
        setIsError(error);
      }
    };
    getData();

  }
    , dependence)
  return { data, isLoading, isError };
};

export default useFetch;
