import React from 'react'

class Pet extends React.Component {

  isAlreadyAdopted = () => (this.props.pet.isAdopted ? '' : 'disabled'); 
  isNotAdopted = () => (this.props.pet.isAdopted ? 'disabled' : ''); 
  gender = () => (this.props.pet.gender === "female" ? 9792 : 9794);
  
  render() {
    console.log("Pet",this.props);
    console.log("Adopted",this.props.pet.isAdopted);

    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {String.fromCharCode(this.gender())}
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
          <button className="ui disabled button" disabled={this.isAlreadyAdopted()}>Already adopted</button>
          <button className="ui primary button" disabled={this.isNotAdopted()}>Adopt pet</button>
        </div>
      </div>
    )
  }
}

export default Pet
