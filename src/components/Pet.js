import React from 'react'
// you don't have to import the other components if you're not using them/calling them

class Pet extends React.Component {
  render() {
    // destructure the prop object that's coming down
    console.log("pet", this.props  )
    const { name, type, age, weight, gender, isAdopted, id } = this.props.pet
    return (
      <div className="card">
        <div className="content">
          <h1 className="header">
            { gender === "female" ? '♀ ' : '♂  ' }
            {name}
          </h1>
          <div className="meta">
            <span className="date">PET TYPE</span>
          </div>
          <div className="description">
            <p>Age: {age} </p>
            <p>Weight: {weight} </p>
            <p>Type: {type} </p>
            <p>Gender: {gender} </p>
            <p>isAdopted: {isAdopted} </p>
            <p>id: {id} </p>
          </div>
        </div>
        <div className="extra content">
          {
            isAdopted ?
            <button className="ui disabled button">Already adopted</button>
              :
            <button className="ui primary button" onClick={ () => this.props.onAdoptPet(id) }> Adopt pet</button>
          }

        </div>
      </div>
    )
  }
}

// {/*'♀' OR '♂' */}
// {"this.props.pet.name (in render in Pet.js)----", this.props.pet.name }
// {this.props.pet.name}


export default Pet;
