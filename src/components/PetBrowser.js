import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  getPets = () => {
    console.log([this.props.pets])
  }

  render() {
    return <div className="ui cards">{this.getPets()}
      <Pet  />
    </div>
  }
}

export default PetBrowser
