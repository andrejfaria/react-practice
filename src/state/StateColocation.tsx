import { useState } from "react"



/**
 * Neste caso apenas o componente Name utiliza o parametro name, 
 * Assim em vez de ser gerido pelo componente Pai é gerido pelo proprio componente
 * cada vez q o nome altera, nao renderiza o componente todo
 * State Colocation 
 */

function Name() {
  const [name, setName] = useState('')
  return (
    <div>
      <label htmlFor="name">Name: </label>
      <input
        id="name"
        value={name}
        onChange={e => setName(e.target.value)} />
    </div>
  )
}

function FavoriteAnimal({ animal, onAnimalChange }) {

  return (
    <div>
      <label htmlFor="animal">Favorite Animal: </label>
      <input
        id="animal"
        value={animal}
        onChange={onAnimalChange}
      />
    </div>
  )
}


function Display({ animal }) {
  return <div>{`your favorite animal is: ${animal}!`}</div>
}

function StateExample2() {
  // Parent Component 


  const [animal, setAnimal] = useState('');

  return (
    <form>
      <Name />

      <FavoriteAnimal animal={animal} onAnimalChange={e => setAnimal(e.target.value)} />

      <Display animal={animal} />
    </form>
  )
}

export default StateExample2;

/**
 * 
 * 
 * 
 */