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

  onAdoptPet = petId => {

    const pets = this.state.pets.map(p => {
      return p.id === petId ? { ...p, isAdopted: true } : p;
    });
    // why do we need the id here?
    // notice the slick use of the ternary operator, and notice how we can just return that
    // the spread operator is used with ...p because its setting state for just isAdopted and not meant to overwrite the other properties in the given object from the array
     
    this.setState({ pets });

    // notice how recursion is used here
  };



  fetchPets = () => {
    let endpoint = '/api/pets';

    if (this.state.filters.type !== 'all') {
      endpoint += `?type=${this.state.filters.type}`;
    }

    fetch(endpoint)
      .then(res => res.json())
      .then(pets => this.setState({ pets }));
  };


  
  onChangeType = ({ target: { value } }) => {
    this.setState({ 
      filters: { ...this.state.filters, 
        type: value } });
  };


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
                onFindPetsClick={this.fetchPets} 
              />
              
            </div>
            <div className="twelve wide column">

              <PetBrowser 
                pets={ this.state.pets }
                onAdoptPet={ this.onAdoptPet }
              />

            </div>
          </div>
        </div>
      </div>
    )
  }
}

// defaultProps isn't needed because the default item being rendered is fetching the list of all animals, which is done with the fetch method

// App.defaultProps = 
//   fetch('/api/pets')
//   .then(response => response.json)
//   .then(
//     (petList) => {
//       this.selectedPets(petList)
//     }
// )

    // - Finally set `<App/>`'s `state.pets` with the results of your fetch request
    // so you can pass the pet data down as props to `<PetBrowser />`

    // return returnFetch;
    // .then(response => response.json())
    //what to do with json object?

//if all pets, fetch /api/pets
//if pet type === cat, fetch /api/pets?type=cat
//do the same for dogs and micropigs

  // .then(response => response.json())
  // .then(json =>
  //   document.write(`Holy cow! There are ${json['number']} humans in space.`)
  // );


export default App
