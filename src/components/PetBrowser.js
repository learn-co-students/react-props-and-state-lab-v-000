//Should receive a pets prop. This is an array of pets that the component uses to render <Pet /> components. App should determine which pets to pass down as props.
//App should be responsible for filtering this list based on the types of pets the user wants to see.

//Should receive an onAdoptPet prop. This callback prop gets passed to its <Pet /> children components.


import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  


  render() {
    const pets = this.props.pets
    return (
            <div className="ui cards">
                {pets.map((element,index) =>
                     <Pet key={index} pet={element} onAdoptPet={this.props.onAdoptPet}/>
                  )}
            </div>
        )
  }
}

export default PetBrowser
