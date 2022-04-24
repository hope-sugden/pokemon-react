import React from 'react'
import { Link } from 'react-router-dom';
import { toProper } from "../../utils";
import './PokemonImage.scss';

const PokemonImage = ({ id, name, sprite}) => {

  return (
    <>
      <article className='poke-image-card' >
        <Link to={"/pokemon/" + id} >
          <h2 className='card__heading' >{toProper(name)}</h2>
        </Link>
        <img src={sprite} alt={ toProper(name) } className="card__image" />
      </article>
    </>
  )
}

export default PokemonImage