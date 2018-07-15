import React from 'react'

export default class Pet extends React.Component {
  

  handleGender = () => {
      if(this.props.pet.gender === 'male') {
        return `♂`
      } else {return '♀'}
    }
  handleAdopt = () => {
    this.props.onAdoptPet(this.props.pet.id)
    console.log(this.props.pet.name)
  }

  // alreadyAdopted = () => {
  //    this.props.pet.isAdopted = true
  // }

  // notYetAdopted = () => {
  //  return this.props.pet.isAdopted = false
  // }
    
  render() {
 const isAdopted = this.props.pet.isAdopted
  
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.handleGender()}
          </a>
          
          <div className="description">
            <p>Age: {this.props.pet.name}</p>
            <p>Age: {this.props.pet.age}</p>
            <p>Age: {this.props.pet.type}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
       
        
        <div className="extra content">
        {isAdopted && <button className="ui disabled button">Already adopted</button>} 
        {!isAdopted && <button className="ui primary button" onClick={this.handleAdopt}>Adopt pet</button>}
        </div>
      </div>
    )
  }
}

