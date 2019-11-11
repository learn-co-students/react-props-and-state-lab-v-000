import React from 'react'

class Pet extends React.Component {
  genderType = (props) => {
    if(this.props.pet.gender === 'male'){
      return '♂'
    } else{
      return '♀'
    }
  }
  adoptedButton = (props) => {
    if(this.props.pet.isAdopted){
      return <button className="ui disabled button">Already adopted</button>
    } else {
      return <button className="ui primary button" onClick={() => this.props.onAdoptPet(this.props.pet.id)}>Adopt pet</button>
    }
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */}
            {this.props.pet.name}
            {this.genderType(this.props.pet.gender)}
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
          {this.adoptedButton(this.props.pet.isAdopted)}
        </div>
      </div>
    )
  }
}

export default Pet
