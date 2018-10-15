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

	// onAdoptPet = (adopted) => {
	// 	if(!adopted){
	// 	}
	// }
	// () => this.onAdoptPet(x.isAdopted)

	showPets = (info) => {
		// debugger
		return info.map((x) => <Pet key={x.id} pet={x} onAdoptPet={x.isAdopted}/>);
  	}

  render() {
    return(<div className="ui cards">
    	{this.showPets(this.props.pets)}
    </div>);
  }
}

export default PetBrowser
