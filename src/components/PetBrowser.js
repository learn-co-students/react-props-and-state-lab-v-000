import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    return (
      <div className="ui cards">
        {this.props.pets.map((p) => {
          return (
            <Pet 
              key={p.id} 
              pet={p}
              onAdoptPet={(p)=>this.props.onAdoptPet(p)}
              />
          )
        },console.log(this.props.pets)
        )}
      </div>
    )
  }
}

export default PetBrowser
