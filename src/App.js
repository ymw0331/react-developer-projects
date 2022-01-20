import React from 'react';
import { CardList } from './components/card-list/card-list-component';
import { SearchBox } from './components/search-box/search-box-component';
import './App.css';

class App extends React.Component {
  constructor() {
    super(); //helps us with this by calling React.Component's constructor

    this.state = {
      monsters: [],
      searchField: ''
    }

    //define this to become the app component
    // this.handleChange = this.handleChange.bind(this)
  }

  //using this componenet licycle method
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json()) //taking in response and convert it to JSON format
      .then(users => this.setState({ monsters: users })) //then setState
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }


  render() {
    // const monsters = this.state.monsters
    // const searchField = this.state.searchField 
    //equivalent to 

    const { monsters, searchField } = this.state; //destructuring
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )


    return (
      <div className="App" >
        <h1>Monster Rolodex</h1>
        <SearchBox
          placeholder='search monster'
          handleChange={this.handleChange} />

        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
