import React from 'react';

class Pet extends React.Component {

  adoptPet(){
    this.props.onAdoptPet(this.props.pet.id);
  }

  getButton(adopted){
    if(adopted){
      return <button className="ui disabled button">Already adopted</button>
    } else {
      return <button className="ui primary button" onClick={this.adoptPet.bind(this)}>Adopt pet</button>
    }
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">{this.props.pet.name} ({this.props.pet.gender === "male" ? '♂' : '♀'})</a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.getButton(this.props.isAdopted)}
        </div>
      </div>
    );
  }
}

export default Pet;