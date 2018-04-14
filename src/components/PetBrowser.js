import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  render() {
    const pets = this.props.pets.map(pet => <Pet pet={pet} />)

    return (
      <div className="ui cards">
        <div>
          {pets}
        </div>
      </div>
    );
  }
}

export default PetBrowser;
