import React, {Component} from 'react'

import Pet from './Pet'

export default class PetBrowser extends Component {
  render() {
    const pets = this.props.pets.map(pet =>
          <Pet key={pet.id} pet={pet} onAdoptPet={this.props.onAdoptPet} />
        );
    return <div className="ui cards">{pets}</div>;

  }
}
