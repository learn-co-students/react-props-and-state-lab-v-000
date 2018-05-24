import React from 'react';
// import PropTypes from 'prop-types'

class Pet extends React.Component {
  constructor(props) {
    super(props);

  }
  showGenderSymbol =()=>{
    this.props.pet.gender === "male" ? "♂" : "♀"
  }
  handleClick = (event)=> {
    const id = this.props.pet.id
    return this.props.onAdoptPet(id)
  }
  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">{this.props.pet.name}: {this.props.pet.gender === "male" ? "♂" : "♀"}</a>
          <div className="meta">
            <span className="date">Pet type: {this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
        { this.props.isAdopted ? (
            <button className="ui disabled button">Already adopted</button>
          ) : (
            <button className="ui primary button" onClick={this.handleClick}>Adopt pet</button>
          )
        }
        </div>
      </div>
    );
  }
}

export default Pet;
