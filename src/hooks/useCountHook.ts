import { useEffect, useState } from 'react'

const useCountHook = (start: number, end: number) => {
  const [count, setCount] = useState(start)
  const slowCount = 15

  useEffect(() => {
    const endCount = end - count
    if (count < end) {
      const counter = setInterval(
        () => {
          setCount((prev) => prev + 1)
        },
        endCount <= slowCount
          ? Math.round((2000 - end + slowCount) / slowCount)
          : 1,
      )
      return () => {
        clearInterval(counter)
      }
    }
  }, [count])

  return count
}

export default useCountHook
