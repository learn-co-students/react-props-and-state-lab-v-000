import React from 'react'

class Pet extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      adopted: this.props.pet.onAdoptPet
    }
  }

  handleClick = () => {
    this.setState({
      adopted: !(this.state.onAdoptPet)
    })
  }

  getButton = (decide) => {
    if(decide) {
      return (<button className="ui disabled button">Already adopted</button>);
    }else{
      return (<button className="ui primary button" onClick={this.handleClick}>Adopt pet</button>);
    }
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.pet.gender === "male" ? '♂' :'♀'}
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
          {this.getButton(this.state.adopted)}
        </div>
      </div>
    )
  }
}

export default Pet
