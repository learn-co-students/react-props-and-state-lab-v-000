import React from 'react';

export default class Pet extends React.Component {
  constructor() {
    super();
    this.adoptPet = this.adoptPet.bind(this);
  }

  adoptPet(){
    this.props.onAdoptPet(this.props.pet.id)
  }

  render() {

    const { pet, isAdopted } = this.props;
    const { name, type, gender, age, weight } = pet;

    return (
      <div className="card">
        <div className="content">
          <a className="header">{name} {gender === 'male' ? '♂' : '♀'}</a>

          <div className="meta">
            <span className="date">Pet type</span>
            <p>{type}</p>
          </div>
          <div className="description">
            <p>Age: {age}</p>
            <p>Weight: {weight} </p>
          </div>
        </div>
        
        <div className="extra content">
          {!isAdopted && 
          <button className="ui primary button"
           onClick={this.adoptPet}
          >Adopt pet
          </button>
          }
          {isAdopted && <button className="ui disabled button">Already adopted</button>}
          
        </div>
      </div>
    );
  }
}

// Pet.propTypes = {
//   pet: PropTypes.shape({
//     name: PropTypes.string,
//     type: PropTypes.string,
//     age: PropTypes.number,
//     weight: PropTypes.number,
//     gender: PropTypes.oneOf(['Male', 'Female']),
//     isAdopted: PropTypes.bool,
//   }),
  

// };