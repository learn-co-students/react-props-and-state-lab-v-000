const React = require('react');

const Filters = require('./Filters');
const PetBrowser = require('./PetBrowser');

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
    this.adoptPetHandler = this.adoptPetHandler.bind(this)
    this.onChangeType = this.onChangeType.bind(this)
    this.onFindPetsClick = this.onFindPetsClick.bind(this)
  }

  adoptPetHandler(id) {
    this.state.adoptedPets.push(id)
  }

  onChangeType(type) {
    this.state.filters.type = type
  }

  onFindPetsClick() {
    const baseUrl = '/api/pets'
    var url = baseUrl

    if (this.state.filters.type !== 'all') {
      url += '?type=' + this.state.filters.type
    }

    fetch(url)
      .then(pets => {this.state.pets = pets})
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
                filters={this.state.filters}
                onChangeType={this.onChangeType}
                onFindPetsClick={this.onFindPetsClick}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser
                pets={this.state.pets}
                onAdoptPet={this.adoptPetHandler}
                adoptedPets={this.state.adoptedPets}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = App;
