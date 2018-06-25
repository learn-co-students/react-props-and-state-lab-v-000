import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component{
  render(){
    const {pets} = this.props
    const {onAdoptPet} = this.props
    const renderEachPet = pets.map(p => <Pet pet={p} key={p.id} onAdoptPet={onAdoptPet} />)
    return(
      <div className="ui cards">
        {renderEachPet}
      </div>
    )
  }
}

export default PetBrowser
