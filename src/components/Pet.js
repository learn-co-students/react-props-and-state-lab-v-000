import React from 'react'

class Pet extends React.Component {
  render() {
    const pet = this.props.pet;
    const bttnClasses = pet.isAdopted ? 'ui disabled button' : 'ui primary button';
    const bttnMssg = pet.isAdopted ? 'Already adopted' : 'Adopt pet'
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            { pet.gender === 'female' ? '♀': '♂' }
            {pet.name}
          </a>
          <div className="meta">
            <span className="date">{pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {pet.age}</p>
            <p>Weight: {pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          <button className={bttnClasses} onClick={() => this.props.onAdoptPet(this.props.pet.id)} >{bttnMssg}</button>
        </div>
      </div>
    )
  }
}

export default Pet
