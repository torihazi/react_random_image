import { useState, useEffect } from "react";
import axios from "axios";
export const ImageBox = () => {
  const targetURL = "https://dog.ceo/api/breeds/image/random";
  const [count, setCount] = useState(0);
  const [isthree, setIsthree] = useState(false);
  const [imageURL, setImageURL] = useState();

  useEffect(() => {
    const fetchDogImage = async () => {
      let data = await axios.get(targetURL);
      setImageURL(data.data.message);
    };
    fetchDogImage();
  }, [isthree]);

  const onClickCount = () => {
    setCount((prevCount) => {
      const newCount = prevCount + 1;
      newCount % 3 === 0 && setIsthree(!isthree);
      return newCount;
    });
  };

  return (
    <>
      <div>
        <p>{count}</p>
        <button onClick={onClickCount}>ボタン</button>
      </div>
      <img src={imageURL} style={{ width: "500px", height: "400px" }} alt="" />
    </>
  );
};
