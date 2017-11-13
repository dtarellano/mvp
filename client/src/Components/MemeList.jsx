import React from 'react';
import Meme from './Meme.jsx';

class Memelist extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      memes: {
        memes: []
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps', nextProps);
    this.setState({
      memes: nextProps
    })
  }
  render() {
    let load = '...Loading...';
    if (this.state.memes.memes.length > 0) {
      load = this.state.memes.memes.map(meme => {
        return <Meme meme={meme} key={meme.id}/>
      });
    }

    return (
      <div>
        <h3>Lit Memes</h3>
        <div className="wrap">
          {load}
        </div>
      </div>
    )
  }
}



export default Memelist;
