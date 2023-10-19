import Pokedex from "../Pokedex";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'; 


function Pokecard() { 
  const pokemons = Pokedex(); 

  return (
    <div className="text-center">
      <h2>Pokemons</h2>
      <div className="d-flex justify-content-center">
        {pokemons.map((pokemon) => (
          <Card className="card" key={pokemon.name} style={{ width: '18rem', margin: '10px' }}>
            
            <Card.Body>
              <Card.Title className="pokemon-name">{pokemon.name}</Card.Title>
              <Card.Img variant="top" src={pokemon.image} alt={pokemon.name} />
              <Card.Text className="type-poke">
                Type: {pokemon.type}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}


export default Pokecard;