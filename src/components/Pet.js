import React from 'react'

class Pet extends React.Component {

  handleAdoption = (id) => {
    this.props.onAdoptPet(this.props.pet.id)
  }


  printButtons = () =>{ 
    if(this.props.pet.isAdopted === false){
      return (
        <div className="extra content">
        <button className="ui primary button" onClick={this.handleAdoption}>Adopt pet</button>
        </div>)
    }else{
      return (
      <div className="extra content">
      <button className="ui disabled button">Already adopted</button>
      </div>
    )}
}

  render() {
    if (this.props.pet){
      return (
        <div className="card">
          <div className="content">
            <a className="header">
              <span> <h1>{this.props.pet.name}  --   {this.props.pet.gender === 'male' ? '♂' : '♀'} </h1></span>
              Is Adopted? {this.props.pet.isAdopted === true ? "true" : "false"}
            </a>
            <div className="meta">
              <span className="date">{this.props.pet.type}</span>
            </div>
            <div className="description">
              <p>Age: {this.props.pet.age}</p>
              <p>Weight: {this.props.pet.weight}</p>
            </div>
          </div>         
          {this.printButtons()}
          </div>                
      )}
    
    else { 
      return (null)
    }
          
          
  }
}
  

export default Pet
