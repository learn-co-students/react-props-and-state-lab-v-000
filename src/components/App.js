import React from 'react';
import Filters from './Filters';
import PetBrowser from './PetBrowser';

const allPets = [
  {
    "id": "5c142d9e-ea45-4231-8146-cccf71c704c0",
    "type": "dog",
    "gender": "male",
    "age": 4,
    "weight": 1,
    "name": "Trident"
  },
  {
    "id": "2c902312-dfa3-446f-8b4b-5e115170d807",
    "type": "cat",
    "gender": "male",
    "age": 3,
    "weight": 1,
    "name": "Teddy"
  },
  {
    "id": "20f15086-7952-4ead-bee4-bd8d8f990738",
    "type": "cat",
    "gender": "male",
    "age": 5,
    "weight": 1,
    "name": "Strike"
  },
  {
    "id": "1b44f0ee-1957-471b-b474-92650053995c",
    "type": "cat",
    "gender": "male",
    "age": 8,
    "weight": 4,
    "name": "Sprout"
  },
  {
    "id": "1a56b25a-008f-4c00-bdb7-9302ca608964",
    "type": "dog",
    "gender": "male",
    "age": 6,
    "weight": 5,
    "name": "Sprout"
  }
]

class App extends React.Component {
  constructor() {
    super();

    this.onAdoptPet = this.onAdoptPet.bind(this)
    this.onChangeType = this.onChangeType.bind(this)
    this.onFindPetsClick = this.onFindPetsClick.bind(this)

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };
  }

 onAdoptPet(id){
   this.setState({
     adoptedPets: [...this.state.adoptedPets, id],
   })
  }

  onChangeType(selected){
    this.setState({
      filters: Object.assign({}, this.state.filters, { type: selected })
    })
  }


  onFindPetsClick(){
    var url = '/api/pets'
    if (this.state.filters.type !== 'all')
    { url += "?type=" + this.state.filters.type}

    fetch(url).then(function(response) { return response.json()}).then(data => {
      this.setState({
        pets: data,
      })
    })
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
              <Filters filters={this.state.filters} onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} adoptedPets={this.state.adoptedPets}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
