import React from 'react';

const Meme = props => (
  <div>
    <h4>{props.meme.title}</h4>
    <img src={props.meme.link} alt="Meme"/>
  </div>
)


export default Meme;
