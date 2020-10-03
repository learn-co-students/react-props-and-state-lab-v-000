import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    return (
      <div className="ui cards">
        {this.props.pets.map((petty) => (
          <Pet key={petty.id} pet={petty} onAdoptPet={this.props.onAdoptPet}/>
        ))
      }
      </div>
    );
  }
}

export default PetBrowser
