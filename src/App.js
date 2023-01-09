import React from 'react';
import './App.css';

class App extends React.Component {
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

  componentDidMount() {
    fetch('https://postman-echo.com/get', {
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin':'*'
        }
      }
    )
    .then(response => console.log(response))
  }

  render() {
    return (
      <div className='App'>
        {
          this.state.cakes.map(cake => <h1 key={cake.id}>{cake.name}</h1>)
        }
      </div>
    )
  }
}

export default App;
