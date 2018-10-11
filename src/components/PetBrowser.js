import React from 'react'

import Pet from './Pet'

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
    this.props.pets.map(pet => {
      return <div className="ui cards"><Pet pet={pet} /></div>
    })
  }

}

export default PetBrowser
