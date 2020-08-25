import React from 'react'
// you don't have to import the other components if you're not using them/calling them

class Pet extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */}
            {/* {if (this.props.pet.gender == 'male') {
              return '♀'
            }} else {
              return '♂'
            } */}

            PET NAME
            {/* // console.log("flag2- this.props.pet.name", this.props.pet.name )*/}
            {/* { console.log("flag3- this.props.pet.id", this.props.pet.id )} */}

            {"this.props.pet.name (in render in Pet.js)----", this.props.pet.name }
            {this.props.pet.name}

          </a>
          <div className="meta">
            <span className="date">PET TYPE</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age} </p>
            <p>Weight: {this.props.pet.weight} </p>
          </div>
        </div>
        <div className="extra content">
          { console.log("flag3- this.props.pet.id", this.props.pet.id )}
          <button className="ui disabled button">Already adopted</button>
          <button className="ui primary button" onClick={ () => this.props.onAdoptPet(this.props.pet.id) }> Adopt pet</button>
          <button className="ui primary button" > Adopt pet</button>

        </div>
      </div>
    )
  }
}

export default Pet
