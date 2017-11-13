import React from 'react';

const Meme = props => (
  <div className="meme">
    <h4>{props.meme.title}</h4>
    <img src={props.meme.link} alt="Meme"/>
    <p> Views: {props.meme.views}</p>
  </div>
)


export default Meme;
