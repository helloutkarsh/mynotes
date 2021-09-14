import React from 'react'
import {BiSearch} from 'react-icons/bi'
import './search.css'
export const Search = ({handleSearchNote}) => {
    return (
        <div className="search">
      <BiSearch className ='search-icon'/>
      <input onChange={(event)=>handleSearchNote(event.target.value)} className="input" type="text" placeholder="Looking for something ? 
              ( •︠ ͜ʖ ︡•)"/>
        </div>
    )
}
export default Search;