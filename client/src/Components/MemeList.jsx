import React from 'react';
import Meme from './Meme.jsx';

const Memelist = props => (
  <div>
    <h3>Lit Memes</h3>
    <div className="wrap">
      {props.memes.map(meme => {
        return <Meme meme={meme} key={meme.id}/>
      })}
    </div>
  </div>
)


export default Memelist;
