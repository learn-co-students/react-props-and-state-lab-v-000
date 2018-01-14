import React from 'react';

class Pet extends React.Component {

  handleAdoptPet = () => this.props.onAdoptPet(this.props.pet.id)
  
  render() {
    const { pet: { name, type, gender, age, weight }, isAdopted } = this.props;

    return (
      <div className="card">
        <fieldset>
          <div className="content">
            <legend><a className="header">{name} {gender === 'male' ? '♂' : '♀'}</a></legend>
            <div className="meta">
              <span className="date">{type}</span>
            </div>
            <div className="description">
              <p>Age: {age}</p>
              <p>Weight: {weight}</p>
            </div>
          </div>
        </fieldset>
        <div className="extra content">
          {isAdopted ?
            <button className="ui disabled button">Already adopted</button>
            :
            <button className="ui primary button" onClick={this.handleAdoptPet}>Adopt pet</button>
          }
        </div>
      </div>
    );
  }
}

export default Pet;
