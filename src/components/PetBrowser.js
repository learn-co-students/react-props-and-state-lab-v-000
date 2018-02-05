import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  render() {
    return (
      <div className="ui cards">
        {this.props.pets.map(animal =>
          <Pet
            pet={animal}
            key={animal.id}
            isAdopted={this.props.adoptedPets.includes(animal.id)}
            onAdoptPet={this.props.onAdoptPet}
            // 2. okay this is <PetBrowser /> component existing in App class's render problem now
          />
        )}
      </div>
    );
  }
}

export default PetBrowser;
