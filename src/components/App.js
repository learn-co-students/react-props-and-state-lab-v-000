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

  fetchPets = () => {
    let url = '/api/pets';

    if (this.state.filters.type !== 'all') {
      url += `?type=${this.state.filters.type}`;
    }

    fetch(url)
      .then(res => res.json())
      .then(pets => this.setState({ pets }));
  }

  handleChangeFilterType = type => { //this function is passed to <Filter /> as a prop. Needs a type arg
    this.setState({                  //which it recieves inside <Filter /> when the onChange event occurs.
      filters: Object.assign({}, this.state.filters, {
        type: type,
      })
    });
  }

  handleAdoptPet = petId => {
    this.setState({
      adoptedPets: [...this.state.adoptedPets, petId],
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
              <Filters // uses the filter component...
                filters={this.state.filters} // this prop becomes the value of <Filters />
                onChangeType={this.handleChangeFilterType} // don't understand code here ** see above ** ???
                onFindPetsClick={this.fetchPets}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser
                 pets={this.state.pets} // sends the state of all pets as a prop to <PetBrowser />
                 adoptedPets={this.state.adoptedPets} // list of adoptedPets ids
                 onAdoptPet={this.handleAdoptPet} // adds pet id to the adoptedPets state
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;