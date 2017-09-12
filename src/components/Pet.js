import React from 'react';

class Pet extends React.Component {
  constructor(props) {
    super(props);

  this.state = {
    isAdopted: 'enable',
    // name: " ",
    // type: " ",
    // age: " ",
    // weight: " "
  };
}

    handleClick = () => {
        this.setState({
            isAdopted: 'disable'
        })
    }

    // onAdoptPet = () => {
    //     this.setState({
    //
    //     })
    // }

  render() {
      debugger
    return (
      <div className="card">
        <div className="content">
          <a className="header">Pet (gender: ♂ or ♀)</a>
          <div className="meta">
            <span className="date">Pet type</span>
          </div>
          <div className="description">
            <p>Name: {this.props.name}</p>
            <p>Type: {this.props.type}</p>
            <p>Age: {this.props.age}</p>
            <p>Weight: {this.props.weight}</p>
          </div>
        </div>
        <div className="extra content">
          <button className="ui primary button">Adopt pet</button>
          <button className="ui disabled button" handleClick={this.handleClick}>Already adopted</button>
        </div>
      </div>
    );
  }
}

export default Pet;
