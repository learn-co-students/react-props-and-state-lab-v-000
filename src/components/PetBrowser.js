import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  render() {
      const pets = this.props.pets.map((pet, index) => {
        return <Pet pet={pet} key={index} onAdoptPet={this.onAdoptPet}/>
      })

      return {pets}
      // <div className="ui cards">
      // </div>
  }
}

export default PetBrowser
