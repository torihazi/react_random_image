import { useState, useCallback } from "react";
import axios from "axios";

export const useFetchDogImage = () => {
  const targetURL = "https://dog.ceo/api/breeds/image/random";
  const [isLoading, setIsLoading] = useState(false);
  const [imageURL, setImageURL] = useState();

  const fetchDogImage = useCallback(async () => {
    try {
      setIsLoading(true);
      let data = await axios.get(targetURL);
      setImageURL(data.data.message);
    } catch (error) {
      window.alert(`エラーです: ${error}`);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { isLoading, imageURL, fetchDogImage };
};
