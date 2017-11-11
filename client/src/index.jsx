import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      search: ''
    }
  }
  componentDidMount() {

  }

  search(e) {
    this.setState({
      search: e.target.value
    });
  }

  render() {
    return (
      <div>
        <h1>Yo You Init</h1>
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('app'));
