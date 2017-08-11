import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all'
      }
    };

      this.handleChange = this.handleChange.bind(this);
      this.handleAdopt = this.handleAdopt.bind(this);
  }



  handleChange(type) {
    this.setState({
      filters: Object.assign({}, this.state.filters, {
        type: type,
      })
    });
  }


   handleFindPets = () => {    
    
    console.log('a',this.state.pets)
    var fetch_var = ''
    if (this.state.filters["type"] === 'all') {
      fetch_var = '/api/pets'
    } else {
      fetch_var = '/api/pets?type=' + this.state.filters["type"]
    }
      
      return fetch(fetch_var)
      .then((response) => response.json())
      .then((responseJson) => {    
    
        this.setState({
          pets: responseJson,
        })
      })
      .catch((error) => {
        console.error(error);
      });

   
      
  }

    handleAdopt(id)  {
     
       this.setState({
          adoptedPets: [...this.state.adoptedPets, id],
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
                  onChangeType = {this.handleChange}
                  onFindPetsClick = {() => this.handleFindPets()}
                  filters = {this.state.filters}
                  />
            </div>
            <div className="twelve wide column">
              <PetBrowser
                  onAdoptPet = {this.handleAdopt}
                  pets = {this.state.pets}
                  adoptedPets = {this.state.adoptedPets} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;