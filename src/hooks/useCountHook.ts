import { useEffect, useState } from 'react';

const useCountHook = (start: number, end: number, ms: number) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (count < end) {
      setTimeout(() => setCount((prev) => prev + 1), ms);
    }
  }, [count]);

  return count;
};

export default useCountHook;
