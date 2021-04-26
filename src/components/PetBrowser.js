import React from 'react'
import App from './App'
import Pet from './Pet'

//
// const PetBrowser = (props) => {
//   return <div className="ui cards"> {this.props.state.pets.map(pet => <Pet />)} </div>
// }

//
// const PetBrowser = (props) => {
//   return <div className="ui cards">hi </div>
// }


class PetBrowser extends React.Component {
  render() {
      return <div className="ui cards">
        {this.props.pets
          .map(pet => <Pet
            onAdoptPet={this.props.onAdoptPet}
            key={pet.id}
            pet={pet}
            />)}
          </div>
  }
  // render() {
  //     return <div className="ui cards"> <Pet /> </div>
  // }
}


export default PetBrowser;


//
// class PetBrowser extends React.Component {
//
//
//
//   render() {
//
//     return  <div className="ui cards">
//                // console.log("this.props.pets!!!!!!!!!!", this.props.pets)
//                this.props.pets.map( pet => {
//                 <Pet onAdoptPet={ this.props.onAdoptPet } pet={pet}/>
//               })
//             </div>
//   }
// }
//
// // issue log
// // 1
// // tried putting brackets around this.props.pets, but got 'expected assignment or
// // function call' browser error. Removed them and got a 'pet undefined' error.
//
//
//
// export default PetBrowser
