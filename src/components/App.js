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

  }


	onChangeType = (event) => {
			this.setState({
			type: event.target,
		})
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
		var appChild = React.Children.map(this.props.children, child => {
			if (child === this.state.filters) {
				return React.cloneElement(child, {
        filters: this.state.filters
      });} else {
				return React.cloneElement(child, {
        pets: this.state.pets,
				adoptedPets: this.state.adoptedPets,
      })
		}
    });

    return (
      <div className="ui container">{appChild}
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters filters={this.state.filters} onFindPetsClick={this.onFindPetsClick} onChangeType={this.onChangeType}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} adoptedPets={this.state.adoptedPets}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
