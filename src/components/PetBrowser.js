import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    return <div className="ui cards">
      <ul>
        {
          this.props.pets.map(pet => {
            return <li key={pet.id}><Pet onAdoptPet={this.props.onAdoptPet} pet={pet}/></li>
          })  
        }
      </ul>
    </div>
  }
}

export default PetBrowser
