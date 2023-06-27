import { useLayoutEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

export function useScrollToSection() {
  const [searchParams] = useSearchParams()
  const sectionName = searchParams.get('section')

  useLayoutEffect(() => {
    if (!sectionName) {
      return
    }
    const element = document.querySelector(`#${sectionName}`)
    if (element) {
      return element.scrollIntoView({ behavior: 'smooth' })
    }
    if (import.meta.env.DEV) {
      console.error(`cant't find element #${sectionName} to scroll`)
    }
  }, [sectionName])
}
