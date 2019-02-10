import React from 'react'
import Pet from './Pet'

class PetBrowser extends React.Component {

  render() {
    const pets = [];
    for (let i = 0; i < this.props.pets.length; i++) {
      pets.push(<Pet onAdoptPet={this.props.onAdoptPet} key={i} pet={this.props.pets[i]} />);
    }

    return (
      <div className="ui cards">
        {pets}
      </div>
    )
  }
}

export default PetBrowser
