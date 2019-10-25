import React from 'react'

class Pet extends React.Component {
  render() {
    
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */}
    
          </a>
          <div className="meta">
            <span className="date">{this.props.petType}</span>
          </div>
          <div className="description">
            <p>{this.props.petName}</p>
            <p>{this.props.petWeight} pounds </p>
          </div>
        </div>
        <div className="extra content">
          <button className="ui disabled button">Already adopted</button>
          <button 
          onClick={this.props.onAdoptPet}
          className="ui primary button">Adopt pet</button>
        </div>
      </div>
    )
  }
}

export default Pet
