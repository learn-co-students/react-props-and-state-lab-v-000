import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

	generatePets = (petArray) => {
	    return petArray.map((data, idx) => <Pet key={idx} pet={data} onAdoptPet={this.props.onAdoptPet} />);
	}

  render() {
    return <div className="ui cards"> {this.generatePets(this.props.pets)} </div>
  }
}

export default PetBrowser
