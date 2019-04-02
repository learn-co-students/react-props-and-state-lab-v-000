import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  isAdopted = () => {
    
  }

  render() {
    return (
      <div className="ui cards">
        {this.props.pets.map((pet) =>
          <Pet isAdopted={this.isAdopted} onAdoptPet={this.props.onAdoptPet} key={pet.id} pet={pet}/>
        )}
      </div>
    )
  }
}

export default PetBrowser
