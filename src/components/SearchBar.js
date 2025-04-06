import React, { useState } from "react";

const SearchBar = ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSumbit = (evt) => {
    evt.preventDefault();
    onSubmit(searchTerm);
    setSearchTerm('');
  };

  return (
    <div>
      <form className="image-search-form" onSubmit={handleSumbit}>
        <label htmlFor="searchTerm" className="visually-hidden">Enter the search term:</label>
        <input
          value={searchTerm}
          onChange={(evt) => setSearchTerm(evt.target.value)}
          type="text"
          id="searchTerm"
          name="searchTerm"
        />
        <button type="submit">Search</button>
      </form>
      
    </div>
  );
}

export default SearchBar;

// <button onClick={handleClick} type="button">Search</button>
