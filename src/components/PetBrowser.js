import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  renderPets = () => {
    for (let pet of this.props.pets) {
      return <Pet key={pet.id} pet={pet} />
    }
  }

  render() {
    
    return (
      <div className="ui cards">
        { this.props.children }
      </div>
    )
  }
}

export default PetBrowser;
