import React from 'react';

class Pet extends React.Component {
  constructor(props) {
    super();
  }

  getGender = (gender) => {
    if(gender === "male") {
      return "♂";
    } else {
      return "♀";
    }
  }

  handleAdoptPet = () => this.props.onAdoptPet(this.props.pet.id);

  renderAdoptPet = (props) => {
    if (props.isAdopted) {
      return <button className="ui disabled button">Already adopted</button>;
    } else {
      return <button onClick={this.handleAdoptPet} className="ui primary button">Adopt pet</button>;
    }
  }

  render() {
    const { id, type, name, gender, age, weight } = this.props.pet;


    return (
      <div className="card">
        <div className="content">
          <a className="header">{name} {this.getGender(gender)}</a>
          <div className="meta">
            <span className="date">{type}</span>
          </div>
          <div className="description">
            <p>Age: {age}</p>
            <p>Weight: {weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.renderAdoptPet(this.props)}
        </div>
      </div>
    );
  }
}

export default Pet;
