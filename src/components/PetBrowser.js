import React from 'react';

  import Pet from './Pet';

  class PetBrowser extends React.Component {

 	constructor(props) {
 		super(props);
 	}


    render() {

   	let petComponents = this.props.pets.map((pet) =>
 	  			<Pet pet={pet} key={pet.id} isAdopted={this.props.adoptedPets.includes(pet.id)} onAdoptPet={this.props.onAdoptPet}/>
 		);


      return (
        <div className="ui cards">
         {petComponents}
        </div>
      );
    }
 }

 export default PetBrowser;
