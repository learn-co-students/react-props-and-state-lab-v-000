import React from 'react'

class Pet extends React.Component {

  getButton = (decide) => {
    if(decide) {
      return (<button className="ui disabled button">Already adopted</button>);
    }else{
      return (<button className="ui primary button" onClick={this.props.onAdoptPet}>Adopt pet</button>);
    }
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.gender === "male" ? '♂' :'♀'}
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
          {this.getButton(this.props.status)}
        </div>
      </div>
    )
  }
}

export default Pet
