import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
<<<<<<< HEAD
    const petCards = this.props.pets.map(pet => (
      <Pet pet={pet} key={pet.id} onAdoptPet={this.props.onAdoptPet} />
    ));

    return <div className="ui cards">{petCards}</div>;
=======
    return (
      <div className="ui cards">
        {this.props.pets.each(petAttributes => <Pet pet={petAttributes} />)}
      </div>
    )
>>>>>>> b71dfb577cb403723dcc14cfbe5b8b022ccc059e
  }
}

export default PetBrowser
