import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  render() {
    // create const render pets, using map,
    // render one pet component, and pass pet object,invoke the constant inside thereturn statement
    const pets = this.props.pets.map(animal => {
      return <Pet pet={animal} onAdoptPet={this.props.onAdoptPet}/>
    })

    return (
      <div className="ui cards">
        {pets}
      </div>
    )
  }
}

export default PetBrowser
