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
    "id": "6057de4f-6725-4b9f-a0b1-1f3bd3ad04a6",
    "type": "cat",
    "gender": "male",
    "age": 2,
    "weight": 5,
    "name": "Hemingway"
  }
]

const adoptedPets = [  {
    "id": "3c44545b-94b0-4eff-a960-7805f9677799",
    "type": "dog",
    "gender": "female",
    "age": 10,
    "weight": 4,
    "name": "Ham"
  },
  {
    "id": "bf60344b-8674-451b-b39a-df59e54986e6",
    "type": "dog",
    "gender": "male",
    "age": 7,
    "weight": 5,
    "name": "Teddy"
  },
  {
    "id": "4619fb66-c3da-4ae6-8ed3-894a3dce37d9",
    "type": "micropig",
    "gender": "male",
    "age": 2,
    "weight": 5,
    "name": "Grim"
  },
  {
    "id": "f20db164-e63e-45e9-80df-d687988e1f09",
    "type": "cat",
    "gender": "female",
    "age": 4,
    "weight": 4,
    "name": "Flurry"
  },
  {
    "id": "6c8e937e-3104-4ceb-a3c7-8cdd6ee90082",
    "type": "dog",
    "gender": "female",
    "age": 3,
    "weight": 2,
    "name": "Hennessy"
  }
];

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

  updateFilter = (value) => {
    this.setState({
      filters: {
        ...this.state.filters, type: value,
      }
    })
  }

  adoptPet = (id) => {
    this.setState({
      adoptedPets: [...this.state.adoptedPets, id]
    })
  }

  findPets = () => {
    if (this.state.filters.type === 'all')
      {
        fetch('/api/pets')
      } else {
        fetch(`/api/pets?type=${this.state.filters.type}`)
      }

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
                onChangeType={this.updateFilter}
                onFindPetsClick={this.findPets}
                filters={this.state.filters}
               />
            </div>
            <div className="twelve wide column">
              <PetBrowser
                pets={this.state.pets}
                adoptedPets={this.state.adoptedPets}
                onAdoptPet={this.adoptPet}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
