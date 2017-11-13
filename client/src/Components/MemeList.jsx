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
    let load = (
      <div className="loading">
        <h3>Loading... :3</h3>
        <img src="https://loading.io/spinners/bluecat/lg.blue-longcat-spinner.gif" alt="Loading Kitty"/>
      </div>
    )
    if (this.state.memes.memes.length > 0) {
      load = this.state.memes.memes.map(meme => {
        return <Meme input={this.state.search} meme={meme} key={meme.id}/>
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
