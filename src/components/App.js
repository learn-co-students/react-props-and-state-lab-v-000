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

	onChangeType = () => {}


onAdoptPet = () => {}

  render() {
		React.Children.map(this.props.children, child => {
			if (child === Filters) {
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
    );
  }
}

export default App;
