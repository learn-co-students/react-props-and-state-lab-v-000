import React from 'react'

class Pet extends React.Component {
  render() {
    return (
      <div className="card">
      {/* Show the pets' details */}
        <div className="content">
          <a className="header">
            {/*female '♀' OR male '♂' */}
            {this.props.pet.name}{this.props.pet.gender === 'male' ? '♂' : '♀'}
          </a>
          <div className="meta">
            <span >{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {/* If the pet is adopted, show the disabled button, else show the adopt pet button to adopt the pet */}
          {/* Call onAdoptPet with the pet id when the user clicks the adopt pet button */}
          {this.props.pet.isAdopted ?
            ( <button disabled className="ui disabled button">Already adopted</button> ) 
            : 
            ( <button
                onClick={() => this.props.onAdoptPet(this.props.pet.id)}
                className="ui primary button">
                Adopt pet
              </button>
            )
          }
        </div>
      </div>
    )
  }
}

export default Pet
