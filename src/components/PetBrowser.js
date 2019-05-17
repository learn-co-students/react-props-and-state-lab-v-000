import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    const allPet = this.props.pets.map((currentvalue, index, arry) => {
            return(
                <div key={index}>
                    <Pet isAdopted={arry[index].isAdopted} onAdoptPet={this.props.onAdoptPet} pet={arry[index]} />

                </div>
            )});
        return <div className="ui cards">{allPet}</div>
  }
}

export default PetBrowser
