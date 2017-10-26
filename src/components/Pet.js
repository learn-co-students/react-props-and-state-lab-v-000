import React from 'react';
import PropTypes from 'prop-types';

class Pet extends React.Component {
  constructor(props) {
    super();

    this.state = {
      isAdopted: false,
    }
  }

  onAdoptPet = () => {
    this.setState({
      isAdopted: true,
    });
  }

render() {
  const gender

  // whatGender = () => {
  //   if(this.props.gender === male) {
  //     gender = " ♂ "
  //   }else{
  //     gender = " ♀ "
  //   }
  //   return "<p> {gender} </p>"
  // }
  
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            <p> this.props.name </p>
            whatGender()
          </a>
          <div className="meta">
            <span className="date">Pet type</span>
          </div>
          <div className="description">
            <p>Age: this.props.age </p>
            <p>Weight: this.props.weight</p>
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

Pet.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  gender: PropTypes.oneOf(['male','female']).isRequired,
  age: PropTypes.number.isRequired,
  weight: PropTypes.number.isRequired,
};

export default Pet;
