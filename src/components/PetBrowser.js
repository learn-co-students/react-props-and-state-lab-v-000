import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    let petCards = this.props.pets.map(obj => <div className="ui cards"><Pet pet={obj} onAdoptPet={ this.props.onAdoptPet }/></div> )
    return <div className="ui cards">{ petCards }</div>;
  }
}

export default PetBrowser
