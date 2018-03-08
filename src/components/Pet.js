import React from 'react';

class Pet extends React.Component {
  constructor() {
    super();

  }
  adoptPet = () =>{
    this.props.onAdoptPet(this.props.pet.id)
  }

  render() {
    const adoptedButton = <button className="ui disabled button">Already adopted</button>
    const notAdoptedButton = <button className="ui primary button" onClick={this.adoptPet}>Adopt pet</button>
    return (
      <div className="card">
        <div className="content">
          <a className="header">Pet name {this.props.pet.name}(gender: {this.props.pet.gender === "male" ? "♂" : "♀"})</a>
          <div className="meta">
            <span className="date">Pet type {this.props.pet.type} </span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.props.isAdopted ? adoptedButton : notAdoptedButton}
        </div>
      </div>
    );
  }
}

export default Pet;

// {
//     "id": "5c142d9e-ea45-4231-8146-cccf71c704c0",
//     "type": "dog",
//     "gender": "male",
//     "age": 4,
//     "weight": 1,
//     "name": "Trident"
//   }