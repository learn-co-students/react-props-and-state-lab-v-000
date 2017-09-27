import React from 'react';

class Pet extends React.Component {
  constructor() {
    super();

this.state = {

	isAdopted: false}
  }

	onAdoptPet = () => {
	
		this.setState({
isAdopted: true})}

  render() {
    return (
      <div className="card" pet={this.props.pet}>
        <div className="content">
          <a className="header">Pet name:{this.props.pet.name} ({this.props.pet.gender === "male" ? "♂" : "♀"})</a>
          <div className="meta">
            <span className="date">Pet type: {this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">{this.props.isAdopted===false ?
          <button className="ui primary button" onClick={() => this.onAdoptPet(this.props.pet.id)}>Adopt pet</button> :
          <button className="ui disabled button">Already adopted</button> }
        </div>
      </div>
    );
  }
}

export default Pet;
