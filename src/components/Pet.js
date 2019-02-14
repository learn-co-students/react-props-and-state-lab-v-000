import React from 'react'

class Pet extends React.Component {

  whichGender = () => {
    if(this.props.pet.gender === 'male') {
      return '♂'
    } else{
      return '♀'
    }
  }

  whichButton = () => {
      if(this.props.pet.isAdopted) {
        return <button className="ui disabled button">Already adopted</button>
      }else {
        return <button onClick={() => this.props.onAdoptPet(this.props.pet.id)} className="ui primary button">Adopt pet</button>
      }
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.whichGender()}
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age} year</p>
            <p>Weight: {this.props.pet.weight} lb(s)</p>
          </div>
        </div>
        <div className="extra content">
          {this.whichButton()}
        </div>
      </div>
    )
  }
}

export default Pet
