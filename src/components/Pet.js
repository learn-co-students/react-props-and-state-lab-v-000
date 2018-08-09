import React from 'react'

class Pet extends React.Component {
  outputGender(pet){
    if(pet.gender==="male"){
      return '♂';
    } else {
      return '♀';
    }
  }
  
  outputAdoptButton(pet){
    console.log()
    if(pet.isAdopted){
      return <button className="ui disabled button">Already adopted</button>
    } else {
      return <button id={this.props.pet.id} className="ui primary button" onClick={this.handleAdopt}>Adopt pet</button>
    }
  }
  
  handleAdopt=(event)=>{
    this.props.onAdoptPet(this.props.pet.id);
  }

  
  
  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.outputGender(this.props.pet)}
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.outputAdoptButton(this.props.pet)}
        </div>
      </div>
    )
  }
}

export default Pet
