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

  onChangeType = (e) => {
    this.setState({
      filters: {type: e.target.value},
    });
  }

  onFindPetsClick = (e) => {
    const type = this.state.filters.type;
    console.log("The type is:", type)
    const url = type !== 'all' ? '/api/pets?type='+type : '/api/pets';
    fetch(url)
      .then((response) => response.json())
      .then((theJson) => {
        console.log(theJson);
        this.setState({pets: theJson,});
      });
  }

  onAdoptPet = (petID) => {
    console.log("it fired")
    this.setState({
      pets: this.state.pets.map((aPet)=>{
        if(petID === aPet.id){
          aPet.isAdopted = !aPet.isAdopted
        }
        return aPet
      }),
    });
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
              <Filters 
                onChangeType={this.onChangeType} 
                onFindPetsClick={this.onFindPetsClick} 
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser 
                pets={this.state.pets}
                onAdoptPet={this.onAdoptPet} 
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
