import React from 'react';

class Pet extends React.Component {
  adoptPet = () =>{
    this.props.onAdoptPet(this.props.pet.id)
  }

  render() {

    return (
      <div className="card">
        <div className="content">
          <a className="header">{this.props.pet.name} {genderSign(this.props.pet.gender)}</a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.props.isAdopted &&
            <button className="ui disabled button">Already adopted</button>
          }
          {!this.props.isAdopted &&
            <button
              onClick={this.adoptPet}
              className="ui primary button">Adopt pet</button>
          }

        </div>
      </div>
    );
  }
}

function genderSign(g) {
  return g === "female" ? "♀" : "♂"
}


export default Pet;
