import React from 'react';

class Pet extends React.Component {
  constructor() {
    super();
  }
  // This callback prop gets called with the pet's id when the user clicks the adopt pet button
  handleAdoptPet = e => {
    this.props.onAdoptPet(this.props.pet.id)
  }
  
  render() {
    // Based on gender...
    let gender = this.props.pet.gender === 'male' ? '♂' : '♀'
    
    return (
      // It should show the pet's name, type, age and weight. Should render the correct symbol
      <div className="card">
        <div className="content">
        
          <a className="header">Pet name: {this.props.pet.name} Gender: {gender}</a>
          <div className="meta">
            <span className="date">Pet type: {this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
        {
        // render the correct button in the pet's card; if the pet is adopted, show the disabled button. Otherwise, show the primary button to adopt the pet.
        this.props.isAdopted === false ? 
          <button className="ui primary button" onClick={this.handleAdoptPet}>Adopt pet</button> :
          <button className="ui disabled button">Already adopted</button>
        }
        </div>
      </div>
      
    );
  }
}

export default Pet;
