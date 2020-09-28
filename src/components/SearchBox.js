import React from 'react';

const SearchBox = ({ searchChange }) => {
  return (
    <div className="pa2">
      <input 
        onChange={searchChange}
        type="search" 
        className="tc pa3 ba b--near-black bg-light-yellow"
        name="searchCharacters"
        placeholder="search by character name..."
      />
    </div>
  );
};

export default SearchBox;

