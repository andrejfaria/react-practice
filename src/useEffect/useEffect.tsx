/**
 * Saving on localstorage every name typed in the input"
 */


import { useEffect, useState } from "react"


export default function Greeting() {

  // 💣 -  console.log('rendering')

  const initialName = ''

  const [name, setName] = useState(
    () => window.localStorage.getItem('name') || initialName
  )

  const [count, setCount] = useState(0)

  function handleChange(event) {
    //  update the name here based on event.target.value
    setName(event.target.value)
  }

  useEffect(() => {
    console.log('useEffect called')
    window.localStorage.setItem('name', name)
  }, [name]) // === Object.is, 

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name} </strong> : 'Please type your name'}
      <button onClick={() => setCount((prevCount) => prevCount + 1)}> {count}🐨 </button>
    </div>
  )
}
