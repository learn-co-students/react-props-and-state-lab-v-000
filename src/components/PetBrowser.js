import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {

    let petComponent = this.props.pets.map(pet => (
      <Pet 
        pet={pet}
      />
    ))

    return <div className="ui cards">{petComponent}</div>
  }
}

export default PetBrowser


