import { useState, useEffect } from "react"

//refator
export default function useSyncLocalStorageWithState(key: string, defaultValue = '') {
  const [state, setState] = useState(
    () => window.localStorage.getItem(key) || defaultValue
  )

  useEffect(() => {
    console.log('useEffect called')
    window.localStorage.setItem(key, state)
  }, [key, state])


  return [state, setState]

}
