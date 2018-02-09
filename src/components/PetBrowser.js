import React from 'react';
import Pet from './Pet';

class PetBrowser extends React.Component {
  constructor() {
    super()

    this.state = {
      adoptions: 0
    }

    this.handleAdoptions = this.handleAdoptions.bind(this)
  }

  handleAdoptions = id => {
    this.setState({
      adoptions: this.state.adoptions + 1,
    });

    this.callPropFn(id);
  }

  callPropFn = id => this.props.onAdoptPet(id)

  render() {

    const adoptFn = this.handleAdoptions;
    const adoptStatus = (id) => this.props.adoptedPets.includes(id);

    const petComps = this.props.pets.map(pet => {
      return <li key={pet.id}><Pet
        key={pet.id}
        pet={pet}
        onAdoptPet={ adoptFn }
        isAdopted={ adoptStatus(pet.id) }
      /></li>
    })

    return (
      <div className="ui cards">
        <ul>
          {petComps}
        </ul>
      </div>
    );
  }
}

export default PetBrowser;
