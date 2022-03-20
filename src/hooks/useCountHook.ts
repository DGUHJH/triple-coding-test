import { useEffect, useState } from 'react';

const useCountHook = (start: number, end: number, ms: number) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (count < end) {
      const counter = setTimeout(() => {
        setCount((prev) => prev + 1);
        if (count === end) {
          clearTimeout(counter);
        }
      }, ms);
    }
  }, [count]);

  return count;
};

export default useCountHook;
