import React from 'react';

class Pet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      adopted: props.isAdopted
    }

  }

  handleAdopt = event => {
    this.setState({
      adopted: true
    })
    this.props.onAdoptPet(this.props.pet.id)
  }

  render() {

    let gender = null
    let adoptionButton = null

    if (this.props.pet.gender == "male") {
      gender = '♂'
    } else {
      gender = '♀'
    }

    if (this.state.adopted == true) {
      adoptionButton = <button className="ui disabled button" >Already adopted</button>
    } else {
      adoptionButton = <button className="ui primary button" onClick={this.handleAdopt}>Adopt pet</button>
    }

    //console.log(gender)

    return (
      <div className="card">
        <div className="content">
          <a className="header">{this.props.pet.name} {gender}</a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {adoptionButton}

        </div>
      </div>
    );
  }
}

export default Pet;
