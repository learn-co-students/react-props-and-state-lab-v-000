import React from 'react'

class Pet extends React.Component {

  handleClickEvent = () => {
    this.props.onAdoptPet(this.props.pet.id)
  };

  renderGender = () => {
    if (this.props.pet.gender === 'male'){
      return '♂'
    } else {
      return '♀'
    }
  };

  renderButton = () => {
    if (this.props.pet.isAdopted === true) {
      return <button className="ui disabled button">Already adopted</button>
    } else {
      return <button onClick = {this.handleClickEvent} className="ui primary button">Adopt pet</button>

    }
  };


  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */}
            PET NAME
              {this.props.pet.name}
              <i> {this.renderGender()} </i>
          </a>
          <div className="meta">
            <span className="date">
              PET TYPE
            {this.props.pet.type}
            </span>
          </div>
          <div className="description">
            <p>Age: PET AGE</p>
            {this.props.pet.age}
            <p>Weight: PET WEIGHT</p>
            {this.props.pet.weight}
          </div>
        </div>
        <div className="extra content">
          {this.renderButton()}

        </div>
      </div>
    )
  }
}

export default Pet
