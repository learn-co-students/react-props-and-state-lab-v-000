import React from 'react';

class Pet extends React.Component {
  constructor() {
    super();
    this.handleAdoptPet = this.handleAdoptPet.bind(this)
  }

  handleAdoptPet () {
    //onAdoptPet callback prop called with the pet's id when the user clicks the adopt pet button
    this.props.onAdoptPet(this.props.pet.id)
  }

  render() {
    const { pet, isAdopted } = this.props
    const { name, type, gender, age, weight } = pet

    return (
      <div className="card">
        <div className="content">
          <a className="header">{name} {gender === "male" ? "♂" : "♀"}</a>
          <div className="meta">
            <span className="date">{type}</span>
          </div>
          <div className="description">
            <p>Age: {age}</p>
            <p>Weight: {weight}</p>
          </div>
        </div>
        //render the correct button using isAdopted prop; if adopted, show the disabled button
        <div className="extra content">
          {!isAdopted && <button className="ui primary button" onClick={this.handleAdoptPet}>Adopt pet</button>}
          {isAdopted && <button className="ui disabled button">Already adopted</button>}
        </div>
      </div>
    );
  }
}

export default Pet;
