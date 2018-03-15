import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  render() {
  	const renderPets = this.props.pets.map((p,i) => 
  		<Pet pet={p} key={i}
  		isAdopted={this.props.adoptedPets.includes(p.id)}
  		onAdoptPet={this.props.onAdoptPet}
  		/>
  	)
    return (
      <div className="ui cards">
        {renderPets}
      </div>
    );
  }
}

export default PetBrowser;
