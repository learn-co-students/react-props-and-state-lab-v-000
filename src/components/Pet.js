import React from 'react';

class Pet extends React.Component {
  // constructor() {
  //   super();
  // }

  render() {
    const pet = this.props.pet
    const gender = (pet.gender === 'male' ? '♂' : '♀')

    return (
      <div className="card">
        <div className="content">
          <a className="header">{pet.name} {gender} </a>
          <div className="meta">
            <span className="date">Pet type: {pet.type} </span>
          </div>
          <div className="description">
            <p>Age: {pet.age} </p>
            <p>Weight: {pet.weight} </p>
          </div>
        </div>
        <div className="extra content">
          {this.adoptButton()}          
        </div>
      </div>
    );
  }

  handleAdopt = event => {
    this.props.onAdoptPet(this.props.pet.id)
  }

  adoptButton() {
    if (this.props.isAdopted) {
      return <button className="ui disabled button">Already adopted</button>
    } else {
      return <button className="ui primary button" onClick={this.handleAdopt} >Adopt pet</button>
    }
  }
}

export default Pet;
