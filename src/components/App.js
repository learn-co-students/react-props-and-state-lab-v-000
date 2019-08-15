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

  // <Filters />
  
  onChangeType = (newType) => {
    this.setState({
      type: {
        ...this.state.filters,
        type: newType
      }
    })
  }

  selectedPets = (p) => {
    this.setState({
      pets: p
    })
  }

  onFindPetsClick = () => {

    const petType = this.state.filters.type;

    let returnFetch; 

    //refactor with switch case statement

    if ( petType === "all" ) {
      returnFetch = fetch('/api/pets')
    };

    if ( petType === "cat" ) {
      returnFetch = fetch('/api/pets?type=cat')
    };

    if ( petType === "dog" ) {
      returnFetch = fetch('/api/pets?type=dog')
    };

    if ( petType === "micropig" ) {
      returnFetch = fetch('/api/pets?type=micropig')
    };

    returnFetch
      .then(response => response.json)
      .then(
        (petList) => {
          this.selectedPets(petList)
        }
      )
    // - Finally set `<App/>`'s `state.pets` with the results of your fetch request
    // so you can pass the pet data down as props to `<PetBrowser />`

    // return returnFetch;
    // .then(response => response.json())
    //what to do with json object?
  }

  changePetType = () => <Filters onChangeType={ this.props.onChangeType }/>

  passSelectedPets = () => <Filters onFindPetsClick={ this.props.onFindPetsClick } />

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters />
            </div>
            <div className="twelve wide column">
              <PetBrowser />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

// App.defaultProps = 
//if all pets, fetch /api/pets
//if pet type === cat, fetch /api/pets?type=cat
//do the same for dogs and micropigs

  // fetch('http://api.open-notify.org/astros.json')
  // .then(response => response.json())
  // .then(json =>
  //   document.write(`Holy cow! There are ${json['number']} humans in space.`)
  // );


export default App
