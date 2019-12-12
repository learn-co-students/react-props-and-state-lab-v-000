import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {



  render() {

     let ret = this.props.pets.map((p) => {
                return <Pet pet={p} onAdoptPet={this.props.onAdoptPet}/>
                })


      return(

        <div>
          {ret}
        </div>


      )
        //this.pets.forEach(p => {
        //  <Pet />
        //})
        //<div className="ui cards"> {this.props.pets.forEach(p => {<Pet pet={p} onAdoptPet={this.props.onAdoptPet} />})} </div>

  }
}

export default PetBrowser
