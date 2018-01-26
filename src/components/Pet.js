import React from 'react';

class Pet extends React.Component {
  // constructor(props) {
  //   super(props);
  //
  //   this.state = {
  //     isAdopted: false,
  //   }
  // }
  isAdopted = () => this.props.onAdoptPet(this.props.pet.id)

  onAdoptPetClick(event) {
    this.props.onAdoptPet(this.props.pet.id)
  }

  render() {
    const {pet:
      {name, type, age, weight, gender
      }, isAdopted} = this.props

    var genderSym = gender === 'male' ?  '♂'  : '♀'
    return (
      <div className="card">
        <div className="content">
          <a className="header">Name: {name} ({genderSym}) </a>
          <div className="meta">
            <span className="date">Pet type: {type}</span>
          </div>
          <div className="description">
            <p>Age: {age}</p>
            <p>Weight: {weight}</p>
          </div>
        </div>
        <div className="extra content">
          {isAdopted ? (
            <button className="ui disabled button" onClick={this.props.handleClick}>Already adopted</button>
          ) : (
            <button className="ui primary button" onClick={this.onAdoptPetClick.bind(this)}>Adopt pet</button>
          )}
        </div>

      </div>
    );
  }
}

export default Pet;
