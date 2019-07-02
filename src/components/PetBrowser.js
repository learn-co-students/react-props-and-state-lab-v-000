import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const petCards = this.props.pets.map(pet => <Pet pet={pet} key={pet.id} id={pet.id} onAdoptPet={this.props.onAdoptPet} />);
    return (
      <div className="ui cards">
        {petCards}
      </div>
    )
  }
}

export default PetBrowser
