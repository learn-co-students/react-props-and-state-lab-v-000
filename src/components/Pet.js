import React from 'react';

class Pet extends React.Component {

  handleAdopt = () => {
    this.props.onAdoptPet(this.props.pet.id);
  }

  render() {
    const {name, gender, type, age, weight} = this.props.pet;
    const {isAdopted} = this.props;

    return (
      <div className="card">
        <div className="content">
          <a className="header">{name} gender: {gender === 'male' ? '♂' : '♀'}</a>
          <div className="meta">
            <span className="date">Pet type: {type}</span>
          </div>
          <div className="description">
            <p>Age: {age}</p>
            <p>Weight: {weight}</p>
          </div>
        </div>
        <div className="extra content">
          {!isAdopted ? <button className="ui primary button" onClick={this.handleAdopt}>Adopt pet</button> :
          <button className="ui disabled button" disabled>Already adopted</button>}
        </div>
      </div>
    );
  }
}

export default Pet;
