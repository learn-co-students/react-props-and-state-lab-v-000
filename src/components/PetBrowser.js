import React from 'react'
import Pet from './Pet'




//  1:
//  age: 2
//  gender: "male"
//  id: "6057de4f-6725-4b9f-a0b1-1f3bd3ad04a6"
//  isAdopted: false
//  name: "Hemingway"
//  type: "cat"
//  weight: 5

class PetBrowser extends React.Component {
  render() {
    const petCards = this.props.pets.map(pet => (
      <Pet pet={pet} key={pet.id} onAdoptPet={this.props.onAdoptPet} />
    ));

    return <div className="ui cards">{petCards}</div>;
  }
}

export default PetBrowser;
