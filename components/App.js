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

    this.handleChangeFilter = this.handleChangeFilter.bind(this);
    this.handleAdoptPet = this.handleAdoptPet.bind(this);
    this.handleFetch = this.handleFetch.bind(this);
  }

  handleChangeFilter(newType) {
    this.setState({
      filter: Object.assign({}, this.state.filters, {
        type: newType
      })
    })
  }

  handleAdoptPet(id) {
    let updatedAdopedPets = this.state.adoptedPets.push(id);
    this.setState({
      adoptedPets: updatedAdopedPets
    })
  }

  handleFetch() {
    let url = '/api/pets';
    let fetchType = this.state.filters.type

    if (fetchType !== 'all') {
      url += "?type=" + fetchType
    }

    fetch(url)
      .then((resp) => resp.json())
      .then((jsonPets) => this.setState({
        pets: jsonPets
      }));
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
              <Filters filters={this.state.filters} onChangeType={this.handleChangeFilter} onFindPetsClick={this.handleFetch} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} adoptedPets={this.state.adoptedPets} onAdoptPet={this.handleAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = App;
