import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };

this.onChangeType = this.onChangeType.bind(this)
this.onAdoptPet = this.onAdoptPet.bind(this)
this.onFindPetsClick = this.onFindPetsClick.bind(this)

  }

	onAdoptPet(event) {
		this.setState({
			adoptedPets: [...this.state.adoptedPets, event]}
	)};

	onChangeType = (event) => {	
		this.setState({
			filters: {
				type:event,}
		},()=>this.state.filters.type)
	};

	onFindPetsClick = (event) => {
		if(this.state.filters.type === "all" || this.state.filters.type === undefined){
		fetch("/api/pets").then((response)=>{
			this.setState({
				pets: response,
			})
    })} else {
			fetch(`/api/pets?type=${this.state.filters.type}`).then((response)=>{
			this.setState({
				pets: response,
		})})
	}};

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters filters={this.state.filters} onFindPetsClick={this.onFindPetsClick} onChangeType={this.onChangeType}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} adoptedPets={this.state.adoptedPets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
