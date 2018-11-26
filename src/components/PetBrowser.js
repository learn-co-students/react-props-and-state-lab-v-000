import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

renderPets = () => {
    let arr = [];
    this.props.pets.forEach((pet) => {

     arr.push(<Pet pet={pet} onAdoptPet={this.props.onAdoptPet} />)
    })
        return arr;
    }
  render() {
    return (
        <div className="ui cards">
            {this.renderPets()}
        </div>
    )
  }
}

export default PetBrowser
