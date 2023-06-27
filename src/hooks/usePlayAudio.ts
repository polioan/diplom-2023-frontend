import { useEffect, useRef } from 'react'

export function usePlayAudio(audioUrl?: string | null | undefined) {
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
    }
    if (audioUrl) {
      audioRef.current = new Audio(audioUrl)
    }
  }, [audioUrl])

  return async function play() {
    if (audioRef.current) {
      audioRef.current.currentTime = 0
      await audioRef.current?.play()
    }
  }
}
