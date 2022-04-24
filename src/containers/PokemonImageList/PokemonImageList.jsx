import React from 'react'
import './PokemonImageList.scss';
import PokemonImage from "../../components/PokemonImage/PokemonImage";

const PokemonImageList = ({ pokemonArr }) => {

  const pokeImagesJsx = pokemonArr.map( (pokemon) => {
    return <PokemonImage name={pokemon.name} sprite={pokemon.sprite} />
  });

  return (
    <>
      <div className='poke-image-container' >
        {pokeImagesJsx}
      </div>
    </>
    
  )
}

export default PokemonImageList