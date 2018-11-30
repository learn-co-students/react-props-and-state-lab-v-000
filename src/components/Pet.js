import React from 'react'


class Pet extends React.Component {

  render() {
    let button;
    const pet = this.props.pet;
    const genderIcon = (pet.gender === 'male') ? '♂' : '♀';

    if (pet.isAdopted) {
      button = <button className="ui disabled button">Already adopted</button>;
    } else {
      button = <button className="ui primary button" onClick={() => this.props.onAdoptPet(pet.id)}>Adopt pet</button>
    }
  
    return (
      <div className="card">
        <div className="content">
          <a className="header">{genderIcon}
          </a>
          <div className="meta">
            <span className="date">{pet.type}</span>
          </div>
          <div className="description">
            <h4>Name: {pet.name}</h4>
            <p>Age: {pet.age}</p>
            <p>Weight: {pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
        {button}
        </div>
      </div>
    )
  }
}

export default Pet
