import React from 'react';

const Search = props => (
  <div>
    <input type="text" onChange={props.search} />
    <button onClick={props.onSearch} >Submit</button>
  </div>
)

export default Search;
