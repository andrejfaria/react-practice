import { useState, useEffect, useRef } from "react"

//refator
export default function useSyncLocalStorageWithState(
  key: string,
  defaultValue: any,
  {
    serialize = JSON.stringify,
    deserialize = JSON.parse
  } = {}
) {
  const [state, setState] = useState(
    () => {
      const valueInLocalStorage = window.localStorage.getItem(key)
      if (valueInLocalStorage) {
        return deserialize(valueInLocalStorage)
      }
      return typeof defaultValue === 'function' ? defaultValue() : defaultValue
    }
  )
  const prevKeyRef = useRef(key)

  useEffect(() => {
    console.log('useEffect called')

    const prevKey = prevKeyRef.current

    if (prevKey !== key) {
      window.localStorage.removeItem(key)
    }
    prevKeyRef.current = key
    window.localStorage.setItem(key, serialize(state))
  }, [key, serialize, state])


  return [state, setState]

}
