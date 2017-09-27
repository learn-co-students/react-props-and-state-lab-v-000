import React from 'react';

class Pet extends React.Component {
  constructor() {
    super();

this.state = {

	isAdopted: false}
  }

	onAdoptPet = () => {
		this.setState({
			isAdopted: true}
	)}

  render() {
    return (
      <div className="card"{...this.props.pets}>
        <div className="content">
          <a className="header">Pet name:{this.props.name} ({this.props.gender === "male" ? "♂" : "♀"})</a>
          <div className="meta">
            <span className="date">Pet type: {this.props.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.age}</p>
            <p>Weight: {this.props.weight}</p>
          </div>
        </div>
        <div className="extra content">{this.props.isAdopted===false ?
          <button className="ui primary button" onClick={() => this.onAdoptPet(this.props.id)}>Adopt pet</button> :
          <button className="ui disabled button">Already adopted</button> }
        </div>
      </div>
    );
  }
}

export default Pet;
