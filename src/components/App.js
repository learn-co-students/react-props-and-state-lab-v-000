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

   adoptPet = (petId) => {
     this.state.adoptedPets.push(petId);
   }

   findPets = () => {
     const type = this.state.filters["type"];
     let url = "/api/pets";

     if(type !== "all") {
       url += "?type=" + type;
     }

     fetch(url)
         .then(response => {
           if (response.ok) {
             return response.json();
           } else {
             throw new Error('Something went wrong ...');
           }
         })
         .then(pets => this.setState({ pets }))
   }

   changeType = (type) => {
     this.state.filters["type"] = type;
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
               <Filters filters={this.state.filters} onFindPetsClick={this.findPets} onChangeType={this.changeType}/>
              </div>
              <div className="twelve wide column">
               <PetBrowser pets={this.state.pets} adoptedPets={this.state.adoptedPets} onAdoptPet={this.adoptPet} />
              </div>
            </div>
          </div>
       </div>
     );
   }
 }

 export default App;
