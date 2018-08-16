import React from 'react'

class Pet extends React.Component {

  petGender(pet){
    if(pet.gender === "female") {
      return '♀'
    }
    else {
      return '♂'
    }
  }

  adoptButton(pet){
    if(pet.isAdopted){
      return <button className="ui disabled button">Already adopted</button>
    }
    else {
      return <button id={pet.id} className="ui primary button" onClick={this.petAdopt}>Adopt pet</button>
    }
    
  }

  petAdopt = event => {
    this.props.onAdoptPet(this.props.pet.id);
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.petGender(this.props.pet)}
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>{this.props.pet.age}</p>
            <p>{this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.adoptButton(this.props.pet)}
        </div>
      </div>
    )
  }
}

export default Pet
