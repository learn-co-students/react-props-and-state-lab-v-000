import React from 'react'

// class Pet extends React.Component {
//   constructor() {
//     super();
//   }

// onAdoptPet = e => {
//   this.props.onAdoptPet(this.props.pet.id)
// }
// Pet 
//  -- receives a pet Prop (child of PetBrowser). Use attributes in the prop to render data on the pet card. name type age weight. Based on gender, it gets a male or female symbol. 

//  -- receives an isAdopted prop, use it to render the correct button on the card. if adopted, show disabled button. if note, show the primary button. 

//  -- receives an onAdoptPet cb prop. Gets called with pet's id when user clicks the adopt pet button, but not if they click the disabled button. 

  // render() {
    // const { pet, isAdopted } = this.props
    // const {name, type, gender, age, weight } = pet
const Pet = ({ pet: { id, name, type, gender, age, weight, isAdopted }, onAdoptPet }) => (
    // return (
      <div className="card">
        <div className="content">
          <a className="header" > {name} 
          {gender === 'female' ? '♀' : '♂'}
          </a>
          <div className="meta">
            <span className="date"> {type} </span>
          </div>
          <div className="description">
            <p>Age: {age} </p>
            <p>Weight: {weight }</p>
          </div>
        </div>
        <div className="extra content">

        {/*  { !isAdopted && <button className="ui primary button"  onClick={this.onAdoptPet} >Adopt pet</button>}
          {isAdopted &&  <button className="ui disabled button">Already adopted</button>}*/}
           {isAdopted ? (
            <button className="ui disabled button">Already adopted</button>
          ) : (
            <button onClick={() => onAdoptPet(id)} className="ui primary button">
              Adopt pet
            </button>
          )}
         
          </div>
      </div>
    )
//   }
// }

export default Pet
