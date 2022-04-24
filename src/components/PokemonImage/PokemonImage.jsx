import React from 'react'
import './PokemonImage.scss';

const PokemonImage = ({ name, sprite}) => {

  // converts a string to a proper string - makes first letter a capital
  const toProper = (string) => {
    return string[0].toUpperCase() + string.substring(1);
  }

  return (
    <>
      <article className='poke-image-card' >
        <h2 className='card__heading' >{toProper(name)}</h2>
        <img src={sprite} alt={ toProper(name) } class="card__image" />
      </article>
    </>
  )
}

export default PokemonImage