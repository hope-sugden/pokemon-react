import React from 'react'
import './PokemonImage.scss';

const PokemonImage = ({name,sprite}) => {

const capitalisedName = name => {
  return name[0].toUpperCase() + name.slice(1);
}

  return (
    <>
      <section className='poke-image-card' >
        <h2 className='card__heading'>{capitalisedName(name)}</h2>
        <img src={sprite} alt={capitalisedName(name)} className="card__image" />
      </section>
    </>
  )
}

export default PokemonImage