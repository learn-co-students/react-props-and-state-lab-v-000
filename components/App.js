const React = require('react');

const Filters = require('./Filters');
const PetBrowser = require('./PetBrowser');

class App extends React.Component {
  constructor(props) {
    super(props);

    this.onChangeType = this.onChangeType.bind(this);
    this.onFindPetsClick = this.onFindPetsClick.bind(this);
    this.onAdoptPet = this.onAdoptPet.bind(this);

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };
  }

  onChangeType(value) {
    this.setState({
      filters: { type: value }
    });
  }

  onFindPetsClick() {
    let url = '/api/pets';
    let type = this.state.filters.type
    if(type !== "all") {
      url += `?type=${this.state.filters.type}`;
    }
    fetch(url)
    .then(response => { console.log(response); })
  }

  onAdoptPet(id) {
    this.setState({
      adoptedPets: this.state.adoptedPets.concat([id])
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
              <Filters
                filters={this.state.filters}
                onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser
                pets={this.state.pets}
                adoptedPets={this.state.adoptedPets} onAdoptPet={this.onAdoptPet}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = App;
