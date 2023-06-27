import useLocalStorage from 'use-local-storage'

export function useCsrfToken() {
  return useLocalStorage<string | undefined>('csrfToken', undefined)
}
