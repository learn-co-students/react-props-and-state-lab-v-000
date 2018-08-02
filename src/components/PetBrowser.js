import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  // isAdopted = id => {
  //   return this.props.adoptedPets.includes(id) ? true : false
  // }



  render() {
    const listItems = this.props.pets.map(pet => <div key={pet.id}><hr /><Pet pet={pet} isAdopted={pet.isAdopted} onAdoptPet={this.props.onAdoptPet}/></div>)

    return (
      <div className="ui cards">
      {listItems}
      </div>
    )
  }
}

export default PetBrowser
