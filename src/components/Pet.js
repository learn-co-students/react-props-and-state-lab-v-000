import React from 'react';

class Pet extends React.Component {
  constructor() {
    super();
  }

  handleButtonClick = () => {
    this.props.onAdoptPet(this.props.pet.id)
  }

  renderButton = () => {
    if (this.props.isAdopted === true){
      return(
          <button disabled className="ui disabled button">Already adopted</button>
        )
    } else {
      return(
          <button className="ui primary button" onClick={this.handleButtonClick.bind(this)}>Adopt pet</button>
        )
    }
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">{this.props.pet.name} {this.props.pet.gender === "male" ? '♂' : '♀'}</a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">pet.
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.renderButton()}
        </div>
      </div>
    );
  }
}

export default Pet;