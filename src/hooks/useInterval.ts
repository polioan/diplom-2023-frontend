import { useEffect, useLayoutEffect, useRef } from 'react'

export function useInterval(
  callback: () => void,
  delay?: number | null | undefined
) {
  const savedCallback = useRef(callback)

  useLayoutEffect(() => {
    savedCallback.current = callback
  }, [])

  useEffect(() => {
    if (!delay && delay !== 0) {
      return
    }

    const interval = setInterval(() => savedCallback.current(), delay)

    return () => clearInterval(interval)
  }, [delay])
}
