import React from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cakes: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('http://localhost:3333/cakes')
      .then(response => response.json())
      .then(cakes_response => this.setState({ cakes: cakes_response }));
  }

  handleChange = (e) => {
    this.setState(e => this.setState({searchField: e.target.value}));
  }

  render() {
    const { cakes, searchField } = this.state;
    const filteredCakes = cakes.filter(cake => 
      cake.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className='App'>
        <h1>Cakes Site</h1>
        <SearchBox
          placeholder='Search cakes'
          handleChange={ e => this.setState({searchField: e.target.value}) }
        />
        <CardList cakes = {filteredCakes} />
      </div>
    )
  }
}

export default App;
