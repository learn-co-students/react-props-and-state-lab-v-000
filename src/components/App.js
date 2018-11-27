import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  changeFilterType = (event) => {
    //debugger;
    this.setState({
      filters: Object.assign({}, this.state.filters, {
        type: event.target.value,
      }),
    }, () => {console.log(this.state.filters.type)})
    //debugger;
  }

  fetchPets = () => {
    let endpoint = '/api/pets';
    if (this.state.filters.type !== 'all') {
      endpoint += `?type=${this.state.filters.type}`;
    }
    //const pets = fetch('/api/pets').then((resp) => resp.json()).then(pets => {return pets})
    //console.log(pets);
    //debugger;
    fetch(endpoint)
      .then(res => res.json())
      .then(pets => this.setState({pets}));
        //this.setState({ pets })
        //);
      //debugger;
  };


  findPets = (event) => {
    debugger;
    console.log(event)
    console.log(this.state.filters.type)
    //debugger;
    //console.log(target.)

    if (this.state.filters.type === "All") {
      //fetch('/api/pets')
      //debugger;
      const pets = fetch('/api/pets').then((resp) => resp.json())
      console.log(pets);
      //debugger;
      this.setState({
        pets: [fetch('/api/pets').then((resp) => resp.json())],
        filters: {
          type: 'all'
        }
      })
      //const filterType = this.state.filters.type
      debugger;
    } else if (this.state.filters.type === "Cats") {
      debugger;
      fetch('/api/pets?type=cat')
      this.setState({
        pets: ['cats']
      })
    } else if (this.state.filters.type ===  "Dogs" ) {
      debugger;
      fetch('/api/pets?type=dog')
      this.setState({
        pets: ['dog']
      })
    } else if (this.state.filters.type === "Micropigs") {
      debugger;
      fetch('/api/pets?type=micropig')
      this.setState({
        pets: ['micropig']
      })
    }
  }

  changePetStatus = (event) => {
    return null
  }




  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.changeFilterType} onFindPetsClick={this.fetchPets} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.changePetStatus} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
