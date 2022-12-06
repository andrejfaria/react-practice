/**
 * Saving on localstorage every name typed in the input"
 */


import { useEffect, useState } from "react"
import useSyncLocalStorageWithState from "./customHook"


export default function Greeting() {


  const initialName = 'OK'
  const [name, setName] = useSyncLocalStorageWithState(
    testing(),
    initialName)
  const [count, setCount] = useState(0)



  function handleChange(event: any) {
    event.preventDefault()
    setName(event.target.value)
  }


  function testing() {
    const r = false
    return r
  }
  // 💣 -  console.log('rendering')


  // const [name, setName] = useState(
  //   () => window.localStorage.getItem('name') || initialName
  // )




  // useEffect(() => {
  //   console.log('useEffect called')
  //   window.localStorage.setItem('name', name)
  // }, [name]) // === Object.is, 




  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name} </strong> : 'Please type your name'}
      <button onClick={() => setCount((prevCount) => prevCount + 1)}> {count}🐨 </button>
    </div>
  )
}
