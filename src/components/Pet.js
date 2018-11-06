import React from 'react'


class Pet extends React.Component {
  constructor(props){
    super(props)
    this.state={
      name: props.pet.name,
      age: props.pet.age,
      weight: props.pet.weight,
      gender: props.pet.gender,
      type: props.pet.type,
      isAdopted: props.pet.isAdopted,
      id: props.pet.id
    }
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
          {this.state.name}{this.state.gender === 'female' ? '♀' : '♂' }
          </a>
          <div className="meta">
            <span className="date">{this.state.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.state.age}</p>
            <p>Weight: {this.state.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.state.isAdopted ? <button className="ui disabled button">Already adopted</button> :
          <button className="ui primary button" onClick={()=>this.props.onAdoptPet(this.state.id)}>Adopt pet</button>}
        </div>
      </div>
    )
  }
}

export default Pet
