import React from 'react'

class Pet extends React.Component {
	  constructor(props) {
    super(props)

    this.state = {
      pet: this.props.pet
    }
  }

	logPet () {console.log(this.state.pet)}

  render() {
    return (
      <div className="card">
				{this.logPet()}
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */}
            PET NAME
          </a>
          <div className="meta">
            <span className="date">PET TYPE</span>
          </div>
          <div className="description">
            <p>Age: PET AGE</p>
            <p>Weight: PET WEIGHT</p>
          </div>
        </div>
        <div className="extra content">
          <button className="ui disabled button">Already adopted</button>
          <button className="ui primary button">Adopt pet</button>
        </div>
      </div>
    )
  }
}

export default Pet
