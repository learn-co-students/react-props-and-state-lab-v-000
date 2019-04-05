import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    return <div className="ui cards">
      {this.props.pets.map(pet => (
        < Pet 
          pet={pet}
          key={pet.id}
          // name={pet.name} 
          // type={pet.type} 
          // id={pet.id} 
          // age={pet.age}
          // weight={pet.weight} 
          // gender={pet.gender}
          onAdoptPet={this.props.onAdoptPet}
        />
        ))}
    </div>
  }
}

export default PetBrowser


