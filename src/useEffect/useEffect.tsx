/**
 * Saving on localstorage every name typed in the input"
 */


import { useEffect, useState } from "react"


export default function Greeting() {
  // 💣 delete this variable declaration and replace it with a React.useState call
  const initialName = ''
  const [name, setName] = useState(
    window.localStorage.getItem('name') || initialName
  )

  function handleChange(event) {
    // 🐨 update the name here based on event.target.value
    setName(event.target.value)
  }

  useEffect(() => {
    window.localStorage.setItem('name', name)
  })

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}
