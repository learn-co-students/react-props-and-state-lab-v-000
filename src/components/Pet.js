import React from 'react';

class Pet extends React.Component {
  constructor() {
    super();

    this.state = {
      isAdopted: false
    }
  }

  onAdoptPet = (id) => {
    this.setState({
      isAdopted: true
    })
  }

  render() {
    let button;
    if (this.state.isAdopted) {
       button = <button className="ui disabled button">Already adopted</button>;
    } else {
       button = <button className="ui primary button" onClick={this.onAdoptPet}>Adopt pet</button>;
    }

    return (
      <div className="card">
        <div className="content">
          <a className="header">{this.props.pet.name} ({this.props.pet.gender === 'male' ? '♂' : '♀'})</a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {button}
        </div>
      </div>
    );
  }
}

export default Pet;
