import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {

  renderChildren = () =>{
    let children = this.props.pets
  }

  render() {
    
    debugger
    return (

      <div className="ui cards">
        {this.props.children}
      </div>
    );
  }
}

export default PetBrowser;
