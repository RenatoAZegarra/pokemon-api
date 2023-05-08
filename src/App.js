import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = () => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
      .then((serverResponse) => serverResponse.json())
      .then((jsonResponse) => setPokemons(jsonResponse.results))
      .catch((errorObject) => console.log('Got error: ' + errorObject));
  };

  const axiosPokemons = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
      .then((serverResponse) => {
        setPokemons(serverResponse.data.results)
      })
      .catch((errorObject) => console.log('Got error: ' + errorObject));
  };

  return (
    <div className="App">
      <h1>Pokemon API</h1>
      <button onClick={fetchPokemons}>Fetch Pokemons</button>
      <button onClick={axiosPokemons}>Axios Pokemons</button>
      <ul>
        {pokemons.map((pokemon) => {
          return <li key={pokemon.id}>{pokemon.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;