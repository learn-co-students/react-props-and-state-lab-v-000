import React from 'react'
import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    const pets = this.props.pets.map((p, i) => {
      return <Pet pet={p} key={i} onAdoptPet={this.props.onAdoptPet} />
    })
    return (
      <div className="ui cards">
      {pets}
      </div>
    )
  }
}

export default PetBrowser
