import React from 'react'

class Pet extends React.Component {
  render() {

    let petGender = ''
    if (this.props.type === 'male') {
      petGender = '♀';
    } else {
      petGender = '♂';
    }

    console.log(this.props.pet)


    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.name}
          </a>
          {petGender}
          <div className="meta">
            <span className="date">PET TYPE{this.props.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.age}</p>
            <p>Weight: {this.props.weight}</p>
          </div>
        </div>
        <div className="extra content">
          <button className="ui disabled button">Already adopted</button>
          <button className="ui primary button">Adopt pet</button>
        </div>
      </div>
    )
  }
}

export default Pet
