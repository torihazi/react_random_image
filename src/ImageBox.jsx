import { useEffect } from "react";
import { useFetchDogImage } from "./hooks/useFetchDogImage";
import { useManageCountBox } from "./hooks/useManageCountBox";
export const ImageBox = () => {
  const { isLoading, imageURL, fetchDogImage } = useFetchDogImage();
  const { count, isThree, incrementAndCheck } = useManageCountBox();

  useEffect(() => {
    // console.log("--Effect");
    fetchDogImage();
  }, [isThree]);

  return (
    <>
      <div>
        <p>{count}</p>
        <button onClick={incrementAndCheck}>ボタン</button>
      </div>
      {isLoading ? (
        <h2>Loading....</h2>
      ) : (
        <img
          src={imageURL}
          style={{ width: "400px", height: "400px", objectFit: "cover" }}
          alt="dog"
        />
      )}
    </>
  );
};
