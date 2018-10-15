import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

	// constructor(){
	// 	super()
	// 	this.state = {
	// 		data: this.props.data
	// 	}
	// }

	// showPets(info){

	// }

	adoptIt = () => {

	}

	showPets = (info) => {
		// debugger
		return info.map((x) => <Pet key={x.id} name={x.name} type={x.type} age={x.age} weight={x.weight} gender={x.gender} status={x.isAdopted} onAdoptPet={this.adoptIt}/>);
  	}

  render() {
    return(<div className="ui cards">
    	{this.showPets(this.props.pets)}
    </div>);
  }
}

export default PetBrowser
