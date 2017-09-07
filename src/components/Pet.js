import React from 'react';

class Pet extends React.Component {
  constructor() {
    super();
  }

  adoptPetButton = () => {
    this.props.onAdoptPet(this.props.pet.id)
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">Pet {this.props.pet.name} {this.props.pet.gender ===  'male'? '♂' : '♀' }</a>
          <div className="meta">
            <span className="date">Pet type: {this.props.pet.type}</span>
          </div>
          <div className="description">
            <h3>Name: {this.props.pet.name}</h3>
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
            <p>Gender:{this.props.pet.gender === 'male'? '♂' : '♀' }</p>
          </div>
        </div>
        <div className="extra content">
          
          {this.props.isAdopted ? <button className="ui disabled button">Already adopted</button> : <button className="ui primary button" onClick={this.adoptPetButton}>Adopt pet</button>}
        </div>
      </div>
    );
  }
}

export default Pet;

