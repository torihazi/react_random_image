import { useState } from "react";

export const useManageCountBox = () => {
  const [count, setCount] = useState(0);
  const [isThree, setIsThree] = useState(false);

  const incrementAndCheck = () => {
    setCount((prevCount) => {
      const newCount = prevCount + 1;
      if (newCount % 3 === 0) {
        setIsThree((prev) => !prev);
      }
      return newCount;
    });
  };

  return { count, isThree, incrementAndCheck };
};
