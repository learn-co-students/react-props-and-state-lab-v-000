import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  
  render() {
    const petCards = this.props.pets.map((petObject) => 
      <Pet key={petObject.id} pet={petObject} onAdoptPet={this.props.onAdoptPet} />
    );
    return <div className="ui cards">{petCards}</div>;
  }
}

export default PetBrowser

{/*
// - When rendered, PetBrowser component should receive a pets prop. 
// - The pets prop is an array of pets that the component uses to render <Pet /> components. 
// - App should determine which pets to pass down as props. 
// - App should be responsible for filtering this list based on the types of pets the user wants to see.
// PetBrowser component should receive an onAdoptPet prop. This callback prop gets passed to its
// <Pet /> children components.
*/}