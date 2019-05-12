import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
	renderPets = () => {
		return this.props.pets.map((pet) => (
			<Pet
				onAdoptPet={this.props.onAdoptPet}
				// isAdopted={this.props.isAdopted}
				key={pet.id}
				pet={pet}
			/>
		));
	};

	render() {
		// console.log('from PetBrowser :', this.props.pets);
		// renderPets = this.props.pets.map((pet) => <Pet key={p.id} pet={pet} />);
		// console.log(Pet);
		return (
			<div className="ui cards">
				{/* PET COMPONENT SHOULD GO HERE */}
				{/* map over each <Pet>  with the correct filter */}
				{this.renderPets()}
			</div>
		);
	}
}

export default PetBrowser;
