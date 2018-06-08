import React from 'react';

class Pet extends React.Component {


  handleAdoptPet = () => {
    this.props.onAdoptPet(this.props.pet.id)
  }

  render() {
    const {name, type, age, weight, gender} = this.props.pet;

    return (
      <div className="card">
        <div className="content">
          <a className="header">{name} 
          {(gender === 'male') ? 
          ("Gender: ♂") :
          ("gender: ♀")} 
          </a>

          <div className="meta">
            <span className="date">{type}</span>
          </div>
          <div className="description">
            <p>Age: {age}</p>
            <p>Weight: {weight}</p>
          </div>
        </div>
        <div className="extra content">
        {!this.props.isAdopted ? 
          (<button className="ui primary button" onClick={this.handleAdoptPet}>Adopt pet</button>) :
          (<button className="ui disabled button">Already adopted</button>)
        }
        </div>
      </div>
    );
  }
}

export default Pet;

