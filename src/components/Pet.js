import React from 'react'

class Pet extends React.Component {



  render() {
    // {this.props.isAdopted ? (<button className="ui disabled button">Already adopted</button>) : (
    // console.log('from pet', this.props.id)
    // console.log('from pet', this.props.name)
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */}
            {this.props.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.age}</p>
            <p>Weight: {this.props.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.props.isAdopted ? (<button className="ui disabled button">Already adopted</button>) : (<button onClick={this.changeAdoptionStatus(this.props.id)}>Adopt pet</button>)}
        </div>
      </div>
    )
  }
}

export default Pet
