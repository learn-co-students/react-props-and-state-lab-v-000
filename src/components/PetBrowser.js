// first attempt 5/10/18
// import React from 'react';
//
// import Pet from './Pet';
//
// class PetBrowser extends React.Component {
//   render() {
//     const petComponents = this.props.pets.map(pet =>
//         <Pet
//           pet={pet}
//           onAdoptPet={this.props.onAdoptPet}
//           isAdopted={this.props.adoptedPets.includes(pet.id)}
//         />
//       )
//
//     return (
//       <div className="ui cards">
//         {petComponents}
//       </div>
//     );
//   }
// }
//
// export default PetBrowser;
// second attempt 11/12/18
import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    const pets = this.props.pets.map(p =>
      <Pet
        pet={p}
        onAdoptPet={this.props.onAdoptPet}
        isAdopted={this.props.adoptedPets.includes(p.id)}
      />
    )
    return <div className="ui cards">{pets}</div>
  }
}

export default PetBrowser;
