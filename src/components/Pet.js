import React from 'react'

class Pet extends React.Component {

  constructor(props) {
    super(props);
  }

  genderSymbol = () => {
    if (this.props.pet.gender === "female") {
      return '♀'
    } else {
      return '♂'
    }
  }

  getID = () => {
    return this.props.pet.id
  }

  adoptionButton = () => {
    if (this.props.pet.isAdopted) {
      return <button className="ui disabled button">Already adopted</button>
    } else {
      const id = this.props.pet.id;
      return <button onClick={() => this.props.onAdoptPet(id)} value={this.props.pet.id} className="ui primary button">Adopt pet</button>
    }
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.genderSymbol()}
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.adoptionButton()}
        </div>
      </div>
    )
  }
}

export default Pet
