import React from 'react'

class Pet extends React.Component {

  gender = () => (this.props.pet.gender === "female" ? 9792 : 9794);
  
  handleAdopt = (event) => {
    (this.props.onAdoptPet)(this.props.pet.id);
  }
  
  render() {
    let btn = (this.props.pet.isAdopted) ?
        <button className="ui disabled button">Already adopted</button>
      : <button className="ui primary button" onClick={this.handleAdopt}>Adopt pet</button>    

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
          {btn}
        </div>
      </div>
    )
  }
}

export default Pet
