import React from 'react'
import App from './App'
import Pet from './Pet'


class PetBrowser extends React.Component {



  render() {

    return  <div className="ui cards">
               // {console.log("this.props.pets!!!!!!!!!!", this.props.pets)}
               this.props.pets.map( pet => {
                <Pet onAdoptPet={ this.props.onAdoptPet } pet={pet}/>
              })
            </div>
  }
}

// issue log
// 1
// tried putting brackets around this.props.pets, but got 'expected assignment or
// function call' browser error. Removed them and got a 'pet undefined' error.



export default PetBrowser
