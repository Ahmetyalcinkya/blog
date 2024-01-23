import React from "react";

const SearchBar = ({ changeHandler }) => {
  return (
    <div>
      <label>Search:</label>
      <input onChange={changeHandler} />
    </div>
  );
};

export default SearchBar;
