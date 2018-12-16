import React from 'react'

import Pet from './Pet'

// class PetBrowser extends React.Component {


//   render() {
//       const pets = this.props.pets.map((pet, index) => { 
//         <Pet pet={pet} key={index} onAdoptPet={this.props.onAdoptPet} isAdopted={this.props.adoptedPets.includes(pet.id)} /> 

//       })

//     return <div className="ui cards">
//         {pets}
//     </div>
//   }
// }

const PetBrowser = ({ pets, onAdoptPet }) => {

  const petCards= pets.map(pet => <Pet pet={pet} key={pet.id} onAdoptPet={onAdoptPet} />);
  
  return <div className="ui cards">
         {petCards}
      </div>
  };

export default PetBrowser;
