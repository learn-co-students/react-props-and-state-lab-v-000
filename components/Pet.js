const React = require('react');

class Pet extends React.Component {
  constructor() {
    super();
  }

// (gender: ♂ or ♀)
  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">Pet name: {this.props.name} - Gender: {this.props.gender} </a>
          <div className="meta">
            <span className="date">Pet type</span>
          </div>
          <div className="description">
            <p>Age: </p>
            <p>Weight: </p>
          </div>
        </div>
        <div className="extra content">
          <button className="ui primary button">Adopt pet</button>
          <button className="ui disabled button">Already adopted</button>
        </div>
      </div>
    );
  }
}

Pet.defaultProps = {
  isAdopted: false
}

Pet.propTypes = {
  name: React.PropTypes.string,
  gender: React.PropTypes.symbol,
  type: React.PropTypes.string,
  age: React.PropTypes.integer,
  weight: React.PropTypes.integer,
  isAdopted: React.PropTypes.boolean,
  onAdoptPet: React.PropTypes.func
}

module.exports = Pet;
