import React from 'react'
import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    const pets = []
    pets.push(this.props.pets.map((pet,i) => <div key={i}><Pet pet={ pet } onAdoptPet={ this.props.onAdoptPet } /></div>))
    return (
      <div className="ui cards">
        { pets }
      </div>
    )
  }
}

export default PetBrowser
