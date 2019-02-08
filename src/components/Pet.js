import React from 'react'

const genderMapper = {male: '♂', female: '♀'}

class Pet extends React.Component {

  generateGenderIcon = () => {
    return genderMapper[this.props.pet.gender]
  }

  isAdopted = () => {
    if (this.props.pet.isAdopted === true) {
      return <button className="ui disabled button">Already adopted</button>
      } else {
      return <button className="ui primary button" onClick={() => {this.props.onAdoptPet(this.props.pet.id)}}>Adopt pet</button>
      }
  }

  //handleAdoption = (event) => {
  //  let id = event.target.id;
  //  this.props.onAdoptPet(id);
  //}

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.generateGenderIcon()}
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
           {this.isAdopted()} 
        </div>
      </div>
    )
  }
}

export default Pet
