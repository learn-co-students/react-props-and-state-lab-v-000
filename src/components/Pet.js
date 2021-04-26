import React from 'react';

class Pet extends React.Component {
  render() {
    const pet = this.props.pet
    const symbol = (pet.gender === "female") ? "♀":"♂"

    return (
      <div className="card">
        <div className="content">
          <a className="header">
            <p>PET NAME:{this.props.pet.name}</p>
            {symbol}
          </a>
          <div className="meta">
            <span className="date">PET TYPE: {this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
        {(this.props.pet.isAdopted) ? (<button className="ui disabled button">Already adopted</button>)
            : (<button className="ui primary button" onClick={() => this.props.onAdoptPet(this.props.pet.id)}>Adopt pet</button>
          )}
          
        </div>
      </div>
    )
  }
}

export default Pet
