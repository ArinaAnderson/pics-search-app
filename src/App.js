import React, { useState } from "react";
import SearchBar from './components/SearchBar.js';
import ImageList from './components/ImageList.js';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  console.log('SEARCHTERM', searchTerm);
  return (
    <>
      <SearchBar onSubmit={setSearchTerm} />
      <ImageList searchTerm={searchTerm} />
    </>
  );
}

export default App;
