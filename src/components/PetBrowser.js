import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  render() {
    debugger;
    return (
      <div className="ui cards">
        {this.props.pets.map(animal =>
          <Pet pet={animal} key={animal.id} />
        )}
      </div>
    );
  }
}

export default PetBrowser;
