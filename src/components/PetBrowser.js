import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    return (
      <div className="ui cards">
        {this.props.pets.each(petAttributes => <Pet pet={petAttributes} />)}
      </div>
    )
  }
}

export default PetBrowser
