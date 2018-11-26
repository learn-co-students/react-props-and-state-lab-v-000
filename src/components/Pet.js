import React from 'react'

class Pet extends React.Component {


showButton = () => {
    if(this.props.pet.isAdopted === false){
        return <button onClick={this.handleClick}  className="ui primary button">Adopt pet</button>
    } else{
        return <button className="ui disabled button">Already adopted</button>
    }
}

handleClick = () => {
    this.props.onAdoptPet(this.props.pet.id);
}

renderIcon = () => {
    if(this.props.pet.gender === 'female'){
        return '♀' ;
    } else{
        return '♂';
    }
}

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.renderIcon()}
            PET NAME:
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
          {this.showButton()}
        </div>
      </div>
    )
  }
}

export default Pet
