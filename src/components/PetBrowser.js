import React from 'react'
import App from './App'
import Pet from './Pet'


class PetBrowser extends React.Component {
  render() {

    return  <div className="ui cards">PET COMPONENT SHOULD GO HERE...
              <Pet onAdoptPet={ this.props.onAdoptPet }/>
            </div>
  }
}

export default PetBrowser
