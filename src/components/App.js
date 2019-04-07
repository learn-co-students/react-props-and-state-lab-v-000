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

  onChangeType = (event) =>{
    this.setState({
      filters: {
        ...this.state.filter,
        type: event.target.value
      }
    })
  }

  onFindPetsClick = () => {
    let url ='/api/pets'

    if (this.state.filters.type !== 'all'){
      //Ex: of return URL => /api/pets?type=cat
      url += `?type=${this.state.filters.type}`
    }
    fetch(url)
    //Rendering JSON
    .then(response => response.json())
    .then(pets => this.setState({ pets }))
  }

  onAdoptPet = (petID) => {
    const pets = this.state.pets.map(p => {
    return p.id === petID ? { ...p, isAdopted: true } : p;
  });
  this.setState({ pets });
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
              <Filters filters={this.state.filters} onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
