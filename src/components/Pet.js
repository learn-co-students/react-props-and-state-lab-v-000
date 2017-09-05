import React from 'react';

class Pet extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = (e) => {
    this.props.onAdoptPet(this.props.pet.id)
  }

  render() {
    const adoptButton = <button onClick={this.handleClick} className="ui primary button">Adopt pet</button>
    const disabledButton = <button className="ui disabled button">Already adopted</button> 
    const { pet, isAdopted } = this.props;
    const { name, type, gender, age, weight } = pet;
          
    return (
      <div className="card">
        <div className="content">
          <a className="header">Pet name {name} {gender === 'male' ? '♂' : '♀'}</a>
          <div className="meta">
            <span className="date">Pet type: {type}</span>
          </div>
          <div className="description">
            <p>Age: {age}</p>
            <p>Weight: {weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.props.isAdopted ? disabledButton : adoptButton}
        </div>
      </div>
    );
  }
}

export default Pet;