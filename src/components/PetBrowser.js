import React from 'react'

import Pet from './Pet'
import { ENGINE_METHOD_DIGESTS } from 'constants';

class PetBrowser extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.makePetList()}
      </div>
    )
  }

  makePetList = () => {
    return this.props.pets.map(pet => {
      return <div className="ui cards"><Pet pet={pet} onAdoptPet={this.props.onAdoptPet} /></div>
    })
  }

}

export default PetBrowser
