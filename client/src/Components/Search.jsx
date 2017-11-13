import React from 'react';

const Search = props => (
  <div className="input-group">
    <input type="text" className="form-control" value={props.input} onChange={props.search} />
    <span className="input-group-btn">
      <button className="btn btn-secondary" onClick={props.onSearch} >Submit</button>
    </span>
  </div>
)

export default Search;
