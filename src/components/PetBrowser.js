import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

	adopted = (id) => {
	    this.props.onAdoptPet(id);
  	};

	generatePets = (petArray) => {
	    return petArray.map((data, idx) => <Pet pet={data} isAdopted={this.adopted} />);

	}

  render() {
    return <div className="ui cards"> {this.generatePets(this.props.pets)} </div>
  }
}

export default PetBrowser
