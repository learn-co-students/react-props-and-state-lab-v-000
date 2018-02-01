import React from 'react';

class Pet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdopted: props.isAdopted,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    // debugger;
    // this.setState({
    //   isAdopted: true,
    // })
  }



  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">Pet name: {this.props.pet.name} {this.props.pet.gender === 'male' ? '♂' : '♀'}</a>
          <div className="meta">
            <span className="date">Pet type: {this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age} </p>
            <p>Weight: {this.props.pet.weight} </p>
          </div>
        </div>
        <div className="extra content">
          { !this.state.isAdopted &&
            <button className="ui primary button" onClick={this.handleClick}>Adopt pet</button>
          }
          { this.state.isAdopted &&
            <button className="ui disabled button">Already adopted</button>
          }
        </div>
      </div>
    );
  }
}

export default Pet;
