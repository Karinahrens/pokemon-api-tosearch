import Nav from './Nav';
import React from 'react';
import { Pokecard, Pokeform, Pokemon, Pokemons, Pokesearch } from './components';
import { Routes, Route } from "react-router-dom";
import './App.css';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Pokecard />} />
          <Route path="/search" element={<Pokeform />} />
          <Route path="/pokemons">
            <Route index element={<Pokemons />} />
            <Route path=":id" element={<Pokemon />} />
          </Route>
          <Route path="*" element={<h1>Not found</h1>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;


