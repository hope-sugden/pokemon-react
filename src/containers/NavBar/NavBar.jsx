import React from 'react'
import './NavBar.scss';
import SearchBox from '../../components/SearchBox/SearchBox';

const NavBar = ({searchTerm, searchTermChangeHandler,searchResultCount,toggleFuzzySearch}) => {
  return (
    <div className='navbar' >
         <h1 className='navbar__header' >PokéDom - gotta code 'em all!</h1>
         <SearchBox searchTerm={searchTerm} searchTermChangeHandler={searchTermChangeHandler} searchResultCount={searchResultCount} toggleFuzzySearch={toggleFuzzySearch}/>
    </div>
  )
}

export default NavBar