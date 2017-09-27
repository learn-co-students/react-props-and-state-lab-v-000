import React from 'react';

class Pet extends React.Component {
<<<<<<< HEAD
  constructor() {
    super();

this.state = {

	isAdopted: false}
  }

	onAdoptPet = () => {
	
		this.setState({
isAdopted: true})
=======
  // constructor() {
  //   super();
  // }

	onAdoptPet = () => {


>>>>>>> b40c9929a581b1cd18b557c83beda46a5ed1aa71
	}

//name, type, age and weight. Based on the pet's gender
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
