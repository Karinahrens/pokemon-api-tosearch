import React, { useState } from 'react';

function Pokeform({ onSearch }) {
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonData, setPokemonData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    fetchPokemon(pokemonName);
  };

  const fetchPokemon = async (name) => {
    try {
      setLoading(true);
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      if (response.ok) {
        const data = await response.json();
        setPokemonData(data);
      } else {
        console.error('Error fetching Pokemon data:', response.statusText);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error('Error fetching Pokemon data:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Pokemon Name: "
        value={pokemonName}
        onChange={(e) => setPokemonName(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {loading && <div>Loading...</div>}
      {!loading && !pokemonData && <div>No Pokemon yet, please submit a Pokemon!</div>}
      {pokemonData && (
        <div>
          <h2>{pokemonData.name}</h2>
          <p>ID: {pokemonData.id}</p>
          <p>Base Experience: {pokemonData.base_experience}</p>
          <p>Height: {pokemonData.height}</p>
          <p>Weight: {pokemonData.weight}</p>
        </div>
      )}
    </div>
  );
}

export default Pokeform;


