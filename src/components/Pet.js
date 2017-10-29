import React from 'react';

class Pet extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      name: props.name,
      type: props.type,
      age: props.age,
      weight: props.weight,
      gender: props.gender,
      isAdopted: props.isAdopted
    };
  }

  render() {
    return (
      <div className="card">
        <h3>Search Results</h3>
        <div className="content">
          <a className="header">Pet name</a>
          <p>Name: {this.props.pet.name}</p>
          <p>Gender: {(this.props.pet.gender === 'male') ? '♂' : '♀'}
          </p>
          <div className="meta">
            <span className="date">Pet type: {this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          { this.props.isAdopted === false ?
            (<button className="ui primary button" onClick={() => this.props.onAdoptPet(this.props.pet.id)} >Adopt pet</button>)
          :
            (<button className="ui disabled button">Already adopted</button>)
          }
        </div>
      </div>
    );
  }
}


export default Pet;
