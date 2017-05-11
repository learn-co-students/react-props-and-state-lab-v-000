const React = require('react');

class Pet extends React.Component {
  constructor(props) {
    super(props);
    this.adoptPet = this.adoptPet.bind(this)
  }
  adoptPet(){
    this.props.onAdoptPet(this.props.pet.id)
  }
  render() {
    var button;
    if(!this.props.isAdopted){
      button = <button className="ui primary button" onClick={this.adoptPet}>Adopt pet</button>
    }else{
      button = <button className="ui disabled button">Already adopted</button>
    }
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.pet.name}{this.props.pet.gender === "male"? "♂" : "♀"}</a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age} </p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {button}
        </div>
      </div>
    );
  }
}

module.exports = Pet;
