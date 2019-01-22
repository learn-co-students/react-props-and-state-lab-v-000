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

  handleOnChangeType = (optionChosen) => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: optionChosen
      }
    })
  }

  fetchPets = () => {
    const rootURL = `/api/pets`
    let fetchURL;

    switch (this.state.filters.type) {
      case 'cat':
        fetchURL = rootURL + `?type=cat`;
        break;
      case 'dog':
        fetchURL = rootURL + `?type=dog`;
        break;
      case 'micropig':
        fetchURL = rootURL + `?type=micropig`;
        break;
      default:
        fetchURL = rootURL;
    }

    fetch(fetchURL)
      .then(response => response.json())
      .then(petsArray => this.updatePets(petsArray))
  }

  updatePets = (filteredPets) => {
    this.setState(prevState => ({
      pets: filteredPets
    }))
  }

  handleAdoption = petId => {
    const pets = this.state.pets.map((petObject) => {
      return petObject.id === petId ? { ...petObject, isAdopted: true } : petObject;
    });
    this.setState( { pets });
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
              <Filters filterApplied={this.state.filters.type} onChangeType={this.handleOnChangeType} onFindPetsClick={this.fetchPets} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.handleAdoption} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App

/*
- The app's initial state is already defined. 
- I'm storing state (i.e. the collection of pets being filtered and the specific filter applied) in the parent App component
- App has two children: the <Filters /> and <PetBrowser /> components.
- The child Filters component needs to know what filter is currently applied (to display as the value of the value property of the root <select> tag)
- Since the applied filter is stored in the parent App's state object,
- I must pass the value of the applied filter from the parent's state to the child Filters component as a prop (called filterApplied)
- Only the App parent who owns, mutates the state can update, change the state
- When the <option> selected in <select> menu in Filter class component changes, I need to inform the parent App to update the state (i.e. update which filter type is applied)
- App should pass a callback prop, onChangeType, to <Filters />.
- When parent component App renders the Filters child component, it passes an object that looks like this as its props:
- {filterApplied: string type stored in state object, onChangeType: handleOnChangeType callback arrow function object, onFindPetsClick: fetchPets callback arrow function object} 
- In App, handleOnChangeType callback needs to update <App />'s state.filters.type
- <Filters /> needs a callback prop, onFindPetsClick. 
- When the Find Pets button is clicked, the Filters component calls this.props.onFindPetsClick, which is the invocation of App's fetchPets() arrow function:
- App should fetch a list of pets using fetch().
- The URL of the API is `/api/pets` with an optional query parameter
- Use app's state.filters to control/update this parameter:
  - If the type is 'all', send a request to `/api/pets`
  - If the type is 'cat', send a request to `/api/pets?type=cat`. 
  - If the type is 'dog', send a request to `/api/pets?type=dog`.
  - If the type is 'micropig', send a request to `/api/pets?type=micropig`.
-Finally set App's state.pets with the results of your fetch request 
so you can pass the pet data down as props to <PetBrowser /> component:
-When App renders PetBrowser component, it passes in an object as its props that looks like this:
{pets: the array of pet JSON objects that is stored in state object, onAdoptPet: function}
-The pet data received should include information on individual pets and their
adoption status.

*/