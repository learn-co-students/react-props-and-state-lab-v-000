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
    };

    // use bind to explicitly bind 'this' to the class: this.onChangeType is context-bound to 'this'
    this.onChangeType = this.onChangeType.bind(this)
  };

  // onChangeType = ({ target: { value } }) => {
    // this.setState({ filters: { ...this.state.filters, type: value} });
  onChangeType(event) {
    console.log(event.target.value)
    this.setState({ filters: { ...this.state.filters, type: event.target.value} });
  };

  onAdoptPet = petId => {
    const pets = this.state.pets.map(p => {
      return p.id === petId ? { ...p, isAdopted: true } : p;
    });
    this.setState({ pets });
  }

  // arrow function automatically binds 'this'
  // implictly bind this base on the surrounding context by using arrow function
  onFindPetsClick = () => {
    let url = '/api/pets';

    if (this.state.filters.type !== 'all') {
      url += `?type=${this.state.filters.type}`
    };

    // .then(console.log) is same as .then(resp => console.log(resp))
    // .setState is asynchronos, so put console log in second argument of setState: this waits for setState to resolve, the record finishes to console.log
    // .then( petsJSON => this.setState({
    //  pets: petsJSON
    // }, () console.log("after fetching, this.state is ", this.state))
    fetch(url)
    .then(res => res.json())
    .then( pets => this.setState({ pets }) );
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
                // property key = property value
                onChangeType={this.onChangeType}
                onFindPetsClick={this.onFindPetsClick}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    );
  };
}

export default App
