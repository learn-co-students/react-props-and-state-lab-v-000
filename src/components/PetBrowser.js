import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    const {pets} = this.props
    const {onAdoptPet} = this.props
    const renderPet = pets.map(p => <Pet pet={p} key={p.id} onAdoptPet={onAdoptPet} />)
    return (
      <div className="ui cards">
        {renderPet} 
      </div>
    )
  }
}

export default PetBrowser
