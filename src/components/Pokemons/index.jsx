import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Pokemons() {
  useEffect(() => {
    fetchItems()
  }, [])

  const [items, setItems] = useState([]);
console.log(items)
  const fetchItems = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
    const pokemonData = await response.json()
    setItems(pokemonData.results)
  }

  return (
      <div>
      <button onClick={() => navigate("/")}> Back to the </button>

      <h1>Pokemons: </h1>
      <div>
        {items.map((el, i) => (
          <p key={i}>
            <Link to={`/pokemons/${i + 1}`}>{el.name}</Link></p>
        ))}
        
      </div>
    </div>
  )
}

export default Pokemons