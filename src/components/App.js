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
			value: event.target.value,
		})
	};

	onFindPetsClick = () => {
	if(this.props.value === "all" || this.props.value === undefined){
		fetch("/api/pets").then((response)=>{
			this.setState({
				pets: response,
			})
    })} else {
			fetch(`/api/pets?type=${this.props.value}`).then((response)=>{
			this.setState({
				pets: response,
		})})
	}};

  render() {
		var appChild = React.Children.map(this.props.children, child => {
			if (child === this.props.filters) {
				return React.cloneElement(child, {
        filters: this.props.filters
      });} else {
				return React.cloneElement(child, {
        pets: this.props.pets,
				adoptedPets: this.props.adoptedPets,
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
              <Filters filters={this.state.filters} />
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
