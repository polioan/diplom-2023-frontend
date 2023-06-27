import {
  differenceInSeconds,
  intervalToDuration,
  type Duration,
} from 'date-fns'
import { useRef, useState } from 'react'
import { query } from '../lib/trpc'
import { useInterval } from './useInterval'
import { formatToTwoDigits } from '../helpers'

function toDuration(date: Date) {
  const timeRemainingInSeconds = differenceInSeconds(date, new Date())
  return intervalToDuration({
    start: 0,
    end: timeRemainingInSeconds * 1000,
  })
}

export function useTimeLeft() {
  const [duration, setDuration] = useState<Duration>()
  const startRef = useRef<Date>()

  const result = query.info.eventDate.useQuery(undefined, {
    onSuccess: ({ start }) => {
      startRef.current = start
      setDuration(toDuration(start))
    },
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  })

  useInterval(
    () => {
      if (startRef.current) {
        setDuration(toDuration(startRef.current))
      }
    },
    duration ? 1000 : null
  )

  const optimisticDuration = {
    months: duration?.months ?? 0,
    days: duration?.days ?? 0,
    hours: duration?.hours ?? 0,
    minutes: duration?.minutes ?? 0,
    seconds: duration?.seconds ?? 0,
  }

  return {
    ...result,
    duration: optimisticDuration,
    durationAsObjWithTexts: {
      Месяцев: optimisticDuration.months,
      Дней: optimisticDuration.days,
      Часов: formatToTwoDigits(optimisticDuration.hours),
      Минут: formatToTwoDigits(optimisticDuration.minutes),
      Секунд: formatToTwoDigits(optimisticDuration.seconds),
    },
  }
}
