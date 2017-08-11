
import React from 'react';

class Pet extends React.Component {
  constructor() {
    super();

     this.handleAdopt = this.handleAdopt.bind(this);
 
  }

  handleAdopt(id) {
    this.props.onAdoptPet(this.props.pet.id); 
  }



  gender() {
    if (this.props.pet['gender'] === 'male') {
      return '♂'
    } else if (this.props.pet['gender'] === 'female'){
      return '♀'
    }
    
  }

  onAdoptPet() {
    console.log('pp', this.props.pet['id'])
  }

  render() {
      const { pet, isAdopted } = this.props;

    return (
      <div className="card">
        <div className="content">
          <a className="header">Pet name {this.props.pet['name']} ({this.gender()}) </a>
          <div className="meta">
            <span className="date">Pet type: {this.props.pet['type']}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet['age']}</p>
            <p>Weight: {this.props.pet['weight']}</p>
          </div>
        </div>
        <div className="extra content">
         {!isAdopted && <button className="ui primary button" onClick={this.handleAdopt}>Adopt pet</button>}
          {isAdopted && <button className="ui disabled button">Already adopted</button>}
        </div>
      </div>
    );
  }
}

export default Pet;