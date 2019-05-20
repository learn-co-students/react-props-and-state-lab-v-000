import React from 'react';

class Pet extends React.Component {

  handleButton = () => {
    const id = this.props.pet.id
    this.props.onAdoptPet(id)
  }

  render() {
    const male = this.props.pet.gender === "male";
    return (
      <div className="card">
        <div className="content">
          <a className="header">{this.props.pet.name} {male ? '♂' : '♀'}</a>
          <div className="meta">
            <span className="date">Pet type</span>
            {this.props.pet.type}
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
        {!this.props.pet.isAdopted ? (
            <button className="ui primary button" onClick={this.handleButton}>Adopt pet</button>
        ) : (<button className="ui disabled button">Already adopted</button>)}
        </div>
      </div>
    );
  }
}

export default Pet;
