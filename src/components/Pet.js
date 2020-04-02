import React from 'react'

class Pet extends React.Component {
  gender(){
    if (this.props.pet.gender === 'male'){
      return '♂'
    }
    else{
      return '♀'
    }
  }




  render() {

    return (

      <div className="card">
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */}
            Name:{this.props.pet.name}
            <p>Gender: {this.gender()}</p>

          </a>
          <div className="meta">
            <span className="date">{this.props.pet.date}</span>
          </div>
          <div className="description">
            <p>Type: {this.props.pet.type}</p>
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">

          {
            this.props.pet.isAdopted ?
          <button className="ui disabled button">Already adopted</button> :
          <button className="ui primary button" onClick={()=>this.props.onAdoptPet(this.props.pet.id)}>Adopt pet</button>
          }
        </div>
      </div>
    )
  }
}

export default Pet
