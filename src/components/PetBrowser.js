import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
 
	render() {
    return (
						<div className="wrapper">
							<div className="cards"> 
								{this.props.pets.map((el) => { 
									return <Pet pet={el} />
								})}
							</div>
							{<div className="test-2">{this.props.pets.length}</div>}
					 </div>
					)
  }
}

export default PetBrowser
