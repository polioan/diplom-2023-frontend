import { useLayoutEffect } from 'react'

export function useDocumentTitle(
  title?: string | undefined,
  setOriginal: boolean | undefined = true
) {
  useLayoutEffect(() => {
    if (
      document.head.getAttribute('data-title-changed') !== null ||
      title === undefined
    ) {
      if (
        import.meta.env.DEV &&
        document.head.getAttribute('data-title-changed') !== null
      ) {
        console.error(
          `Can't set title "${title}", because title "${document.title}" already set`
        )
      }
      return
    }

    const originalTitle = document.title

    document.title = title
    document.head.setAttribute('data-title-changed', '')

    return () => {
      if (setOriginal) {
        document.title = originalTitle
        document.head.removeAttribute('data-title-changed')
      }
    }
  }, [title, setOriginal])

  return document.title
}
