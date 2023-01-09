import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      cakes: [
        {
          name: 'cheesecake',
          id: '1'
        },
        {
          name: 'tiramisu',
          id: '2'
        },
        {
          name: 'chocolate cake',
          id: '3'
        }
      ]
    }
  }
  render() {
    return (
      <div className='App'>
        {
          this.state.cakes.map(cake => <h1>{cake.name}</h1>)
        }
      </div>
    )
  }
}

export default App;
