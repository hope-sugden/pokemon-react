import React from 'react'
import SearchBox from '../../components/SearchBox/SearchBox';
import './NavBar.scss';

const NavBar = ( { searchText, searchTextChange, fuzzySearch, fuzzySearchChange, searchResultCount}  ) => {
  return (
    <div className='navbar' >
         <h1 className='navbar__header' >PokéDom - gotta code 'em all!</h1>
         <SearchBox 
          searchText={searchText}
          searchTextChange={searchTextChange}
          fuzzySearch={fuzzySearch}
          fuzzySearchChange={fuzzySearchChange}
          searchResultCount={searchResultCount}
          />
    </div>
  )
}

export default NavBar