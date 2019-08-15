import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  // onAdoptPet = (pets) => {
  //   this.state.pets.map( (p) => {
  //     if ( p.isAdopted ) {
  //       this.setState({
  //         isAdopted: false
  //       })
  //     }
  //   })
  // }
  
  selectedPets = (p) => {
    this.setState({
      pets: p
    })
  }

  fetchPets = () => {

    let petType = this.state.filters.type;

    let returnFetch; 

    //refactor with switch case statement

    if ( petType === "all" ) {
      returnFetch = fetch('/api/pets')
    };

    if ( petType === "cat" ) {
      returnFetch = fetch('/api/pets?type=cat')
    };

    if ( petType === "dog" ) {
      returnFetch = fetch('/api/pets?type=dog')
    };

    if ( petType === "micropig" ) {
      returnFetch = fetch('/api/pets?type=micropig')
    };

    returnFetch
      .then(response => response.json)
      .then(
        (petList) => {
          this.selectedPets(petList)
        }
      )
  }

  // My function above worked! but you should use the solution as a guide to refactoring

  // fetchPets = () => {
  //   let endpoint = '/api/pets';

  //   if (this.state.filters.type !== 'all') {
  //     endpoint += `?type=${this.state.filters.type}`;
  //   }

  //   fetch(endpoint)
  //     .then(res => res.json())
  //     .then(pets => this.setState({ pets }));
  // };
  

  // onChangeType = (newType) => {
  //   this.setState({
  //     type: {
  //       ...this.state.filters,
  //       type: newType
  //     }
  //   })
  // }


  // Here I didn't take into consideration that onChangeType is an event that changes the pet type based on what is selected in App ... because it's an event, the input expected has a "target" property and the specific type of the pet chosen

  onChangeType = ({ target: { value } }) => {
    this.setState({ 
      filters: { ...this.state.filters, 
        type: value } }
    );
  };


  // Notice that you can set state on a property within a property, just like the lesson shows :)
  

  // changePetType = () => <Filters onChangeType={ this.props.onChangeType }/>

  // Here I didn't take into consideration that the change of pet type should be passed to Filters in the render/return statement, not directly in the element. onChangeType be passed to a variable and this.variable could be called in the render/return? Try it later
  // so I didn't take into consideration onChangeType going in the render/return ... try it later
  

  // passSelectedPets = () => <Filters onFindPetsClick={ this.fetchPets } />

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
                onChangeType={this.onChangeType}
                onFindPetsClick={this.fetchPets} 
                // onFindPetsClick={ this.props.onFindPetsClick } 
                // no need for '.props' when setting the prop :)
              />
              
            </div>
            <div className="twelve wide column">

              <PetBrowser 

              />

            </div>
          </div>
        </div>
      </div>
    )
  }
}

// defaultProps isn't needed because the default item being rendered is fetching the list of all animals, which is done with the fetch method

// App.defaultProps = 
//   fetch('/api/pets')
//   .then(response => response.json)
//   .then(
//     (petList) => {
//       this.selectedPets(petList)
//     }
// )

    // - Finally set `<App/>`'s `state.pets` with the results of your fetch request
    // so you can pass the pet data down as props to `<PetBrowser />`

    // return returnFetch;
    // .then(response => response.json())
    //what to do with json object?

//if all pets, fetch /api/pets
//if pet type === cat, fetch /api/pets?type=cat
//do the same for dogs and micropigs

  // .then(response => response.json())
  // .then(json =>
  //   document.write(`Holy cow! There are ${json['number']} humans in space.`)
  // );


export default App
