import React from 'react'

class Pet extends React.Component {
  constructor(props) {
    super (props)
    this.state = {
      adoptedStatus: this.props.isAdopted
    }
  }
  gender = () => {
    if (this.props.gender == 'male') {
      return '♂'
    } else if (this.props.gender == 'female') {
      return '♀'
    }
  }

  renderAdoptButton = () => {
    if (this.state.adoptedStatus == true) {

    }
  }

  handleChange = (event) => {
    this.setState({
      adoptedStatus: true
    })
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.gender}
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
          <button className="ui disabled button">Already adopted</button>
          <button className="ui primary button" onClick={this.handleChange}>Adopt pet</button>
        </div>
      </div>
    )
  }
}

export default Pet
