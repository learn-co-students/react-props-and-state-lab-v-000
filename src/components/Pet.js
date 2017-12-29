import React from 'react';

class Pet extends React.Component {
  constructor() {
    super();


  }

  handleAdoption = (event) => {
    debugger
    this.props.onAdoptPet(this.props.id)
  }
  render() {

    let gender = this.props.gender === "male" ? '♂' : '♀'
    let adoptButton = this.props.isAdopted ? <button className="ui disabled button">Already adopted</button> :
    <button className="ui primary button" onClick={this.handleAdoption.bind(this)}>Adopt pet</button>
    return (
      <div className="card">
        <div className="content">
          <a className="header">Pet name: {this.props.name} {gender}</a>
          <div className="meta">
            <span className="date">Pet type {this.props.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.age}</p>
            <p>Weight: {this.props.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {adoptButton}
        </div>
      </div>
    );
  }
}

export default Pet;
