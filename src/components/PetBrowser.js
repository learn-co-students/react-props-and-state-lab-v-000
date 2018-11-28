import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  displayPet = () => {
    let pets = []
    pets = this.props.pets
    console.log(pets)
    return pets.map((element) => {
      console.log(element.age)
      return <Pet pet={element} />
    })
  }

  

    render() {
        return <div className="ui cards">
            {this.displayPet()}
        </div>
    }

}

export default PetBrowser
