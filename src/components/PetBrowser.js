import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      pets: this.props.pets
    }
  }

	petList () {
		{this.props.pets.map((el) => {
			debugger
			return <div className="card">{<Pet pet={el} onAdoptPet={this.props.onAdoptPet} />}</div>})
		}
	}
  
	render() {
    {/* return <div className="ui cards"><Pet onAdoptPet=this.props.onAdoptPet /></div> */}
    return (
						<div className="wrapper">
							<div className="ui cards">{this.petList()}</div>
							<div className="test">{this.state.pets.length}</div>
							{/*<div className="test-2">{this.props.pets}</div>*/}
					 </div>
					)
  }
}

export default PetBrowser
