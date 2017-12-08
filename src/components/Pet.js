import React from 'react';

class Pet extends React.Component {
  constructor(pet) {
    super(pet);

  }

  handleClick = () => {
    this.props.onAdoptPet(this.props.pet.id)
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            <h1>{this.props.pet.name}</h1> <h2> {this.props.pet.gender === "female" ? ('♀') : ('♂') } </h2>
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age} </p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.props.isAdopted === false ? <button
            className="ui primary button"
            data-id={this.props.pet.id}
            onClick={this.handleClick}
            >Adopt pet</button> : <button className="ui disabled button">Already adopted</button> }

        </div>
      </div>
    );
  }
}

Pet.defaultProps = {

  pet: {
    "id": "86520b4b-7849-4462-b511-cddc7f416ad6",
    "type": "cat",
    "gender": "female",
    "age": 7,
    "weight": 6,
    "name": "Cuddles"
  },

  isAdopted: false,
}

export default Pet;
