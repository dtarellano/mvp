import React from 'react';
import Meme from './Meme.jsx';

const Memelist = props => (
  <div>
    <h3>Lit Memes</h3>
    {props.memes.map(meme => {
      return <Meme meme={meme} />
    })}
  </div>
)


export default Memelist;
