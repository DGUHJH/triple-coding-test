import { useEffect, useState } from 'react';

const useCountHook = (start: number, end: number) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (count < end) {
      const counter = setTimeout(() => {
        setCount((prev) => prev + 1);
      }, Math.floor(1000 / (start + end)));
      return () => {
        clearTimeout(counter);
      };
    }
  }, [count]);

  return count;
};

export default useCountHook;
