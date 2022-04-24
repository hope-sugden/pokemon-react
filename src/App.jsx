import './App.scss';
import NavBar from './containers/NavBar/NavBar';
import PokemonImageList from './containers/PokemonImageList/PokemonImageList';
import pokemonArr from "./data/pokemon";

const App = () => {
  return (
    <div className="">
      <NavBar />
      <PokemonImageList pokemonArr={pokemonArr} />
    </div>
  );
}

export default App;
