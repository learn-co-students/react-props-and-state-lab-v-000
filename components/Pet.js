const React = require('react');

class Pet extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    onAdoptPet(this.props.id)
  }
  
  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">{this.props.name} (gender: ♂ or ♀)</a>
          <div className="meta">
            <span className="date">{this.props.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.age}</p>
            <p>Weight: {this.props.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.props.isAdopted ? 
          <button className="ui disabled button">Already adopted</button> : <button className="ui primary button" onClick={this.handleClick}>Adopt pet</button> }
        </div>
      </div>
    );
  }
}

module.exports = Pet;
