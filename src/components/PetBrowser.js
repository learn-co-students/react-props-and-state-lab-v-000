import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {


    render() {
        const petsArr = this.props.pets.map((curr, idx, arry) => {
            return(
                <div key={idx}>
                    <Pet isAdopted={arry[idx].isAdopted} onAdoptPet={this.props.onAdoptPet} pet={arry[idx]} />

                </div>
            )});
        return <div className="ui cards">{petsArr}</div>
    }
}

export default PetBrowser
