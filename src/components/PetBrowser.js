import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    const petCards = this.props.pets;

    return <div className="ui cards">
            {petCards.map((pet) => {
              return (
                <Pet pet={pet} key={pet.id} onAdoptPet={this.props.onAdoptPet}/>
              )
            }
            )}
             
            </div>
    }
}

export default PetBrowser
