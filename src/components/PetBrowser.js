import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
    render() { 
        let onAdoptPet = this.props.onAdoptPet
        let pets = this.props.pets.map( pet => {
            
            let isAdopted = this.props.adoptedPets.includes(pet.id);
            
            return (<Pet pet={pet} isAdopted={isAdopted} onAdoptPet={onAdoptPet} />)
        })
        return (
            <div className="ui cards">
                <div>{pets}</div>
            </div>
        );
    }
}

export default PetBrowser;