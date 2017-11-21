import React from 'react';

class Pet extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
          <div className="name">Name: {this.props.pet.name}</div>
          <div className="gender">Gender {this.props.pet.gender === "male" ? "♂" : "♀"}</div></a>
          <div className="type">Type: {this.props.pet.type}</div>
          <div className="meta">
            <span className="date">Pet type</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
        {this.props.isAdopted ? <button className="ui disabled button">Already adopted</button> :
        <button className="ui primary button" onClick={()=> this.props.onAdoptPet(this.props.pet.id)}>Adopt pet</button>}
        </div>
      </div>
    );
  }
}

export default Pet;
