import { useState } from "react"

function Name({ name, onNameChange }) {
  return (
    <div>
      <label htmlFor="name">Name: </label>
      <input id="name" value={name} onChange={onNameChange} />
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


function Display({ name, animal }) {
  return <div>{`Hey ${name}, your favorite animal is: ${animal}!`}</div>
}

// animal vem do child animal e name vem do child name
// display recebe via props as variaveis
// lift state para o parente comum mais proximo para
//  que ambos os childs recebessem os parametros 
function StateExample() {
  // Parent Component 

  const [name, setName] = useState('');
  const [animal, setAnimal] = useState('');

  return (
    <form>
      <Name name={name} onNameChange={e => setName(e.target.value)} />

      <FavoriteAnimal animal={animal} onAnimalChange={e => setAnimal(e.target.value)} />

      <Display name={name} animal={animal} />
    </form>
  )
}

export default StateExample;

/**
 * 
 * 
 * 
 */