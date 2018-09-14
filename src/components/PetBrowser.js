import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  listPets = () => {
      return this.props.pets.map((value, index) =>
      <Pet
      isAdopted={value['isAdopted']}
      key= {index}
      // onAdoptPet={this.props.onAdoptPet}
      name={value['name']}
      type={value['type']}
      age={value['age']}
      weight={value['weight']}
      gender={value['gender']}
      id={value['id']}/>
  )}

  render() {
    return (
      <div className="ui cards">
        {this.listPets()}
      </div>
    )
  }
}

export default PetBrowser
