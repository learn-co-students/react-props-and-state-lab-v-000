import React from 'react'

class Pet extends React.Component {
  // constructor(props) {
  //   super(props)
    
    

  // }

  // renderPets = () => {
  //   const petsArr = this.state.pets

  //   petsArr.map(p => {
  //     name={ p.name },
  //   })
  // }


  
  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            { this.props.eachPet.gender === "female" ? '♀' : '♂' }
            { this.props.eachPet.name }
          </a>
          <div className="meta">
            <span className="date">            
              { this.props.eachPet.type }
            </span>
          </div>
          <div className="description">
            <p>
              Age: { this.props.eachPet.age }
            </p>
            <p>
              Weight: { this.props.eachPet.weight }
            </p>
          </div>
        </div>
        <div className="extra content">
          <button 
            className="ui disabled button">
            Already adopted
          </button>
          <button 
            className="ui primary button" 
            onClick={ this.props.onAdoptPet }>
            Adopt pet
          </button>
        </div>
      </div>
    )
  }
}

export default Pet
