import React from 'react'

class Pet extends React.Component {


  callBefore = event => {
    this.props.onAdoptPet(this.props.pet.id)
  }



  render() {

    let dis = <button className="ui disabled button">Already adopted</button>
    let abl = <button className="ui primary button" onClick={this.callBefore}>Adopt pet</button>




    //  <button className="ui disabled button">Already adopted</button>
    //  <button className="ui primary button" onClick={this.props.onAdoptPet}>Adopt pet</button>

    return (
      <div className="card">
        <div className="content">




          <a className="header">
            {/*'♀' OR '♂' */}
            {this.props.pet.gender === 'male' ? '♂':'♀'}
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
          {this.props.pet.isAdopted === true ? dis : abl }
        </div>
      </div>
    )
  }
}

export default Pet
