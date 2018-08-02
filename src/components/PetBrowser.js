import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    const pets = this.props.pets.map((pet, index) => {
      return <Pet pet={pet} key={index} onAdoptPet={this.props.onAdoptPet} />
    })

    return <div className="ui cards">{pets}</div>
  }
}

export default PetBrowser


// {…}
// age:
// 4
// gender:
// "male"
// id:
// "5c142d9e-ea45-4231-8146-cccf71c704c0"
//
// isAdopted:
// false
// name:
// "Trident"
// type:
// "dog"
// weight:
// 1
