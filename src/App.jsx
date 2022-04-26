import { useState } from 'react';
import './App.scss';
import NavBar from './containers/NavBar/NavBar';
import PokemonImageList from './containers/PokemonImageList/PokemonImageList';
import pokemonArr from "./data/pokemon";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [fuzzySearch, setFuzzySearch] = useState(false);

  const toggleFuzzySearch = () => {
    setFuzzySearch(!fuzzySearch)
  }

  
  const filteredPokemon = pokemonArr.filter(pokemon => {
    if(fuzzySearch)
       return pokemon.name.toLowerCase().includes(searchTerm)
  
  else 
      return pokemon.name.toLowerCase().startsWith(searchTerm)
  });
  
  
  console.log("filteredPokemon");
  console.log(filteredPokemon);

  const searchTermChangeHandler = event => {
    const text = event.target.value.toLowerCase();
    setSearchTerm(text);
  }
  return (
    <div className="">
      <NavBar searchTerm={searchTerm} searchTermChangeHandler={searchTermChangeHandler} searchResultCount={filteredPokemon.length} toggleFuzzySearch={toggleFuzzySearch}/>
      <PokemonImageList pokemonArr={filteredPokemon} />
    </div>
  );
}

export default App;
