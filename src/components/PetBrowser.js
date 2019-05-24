import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
 
	render() {
    return (
						<div className="wrapper">
							<div className="cards"> 
								{this.props.pets.map((el) => { 
									return <Pet onAdoptPet={this.props.onAdoptPet} pet={el} />
								})}
							</div>
					 </div>
					)
  }
}

export default PetBrowser
