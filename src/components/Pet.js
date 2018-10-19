import React from 'react'

// Should have a pet prop that it received from its parent, PetBrowser.
// Use the attributes in this prop to render the pet card correctly. It should show the pet's name, type,
// age and weight. Based on the pet's gender, the component also needs to contain
// either a male (♂) or female (♀) symbol.

// Has an isAdopted prop that it received from its parent App. Using this prop, render the correct button
// in the pet's card; if the pet is adopted, show the disabled button. Otherwise, show the primary button
// to adopt the pet.

// Has an onAdoptPet callback prop that it received from its parent App. This callback prop gets called with
// the pet's id when the user clicks the adopt pet button — not when they click the disabled button!

class Pet extends React.Component {
  handleAdoptClick = () => this.props.onAdoptPet(this.props.pet.id)

  render() {
    const pet = this.props.pet
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {pet.name}
            {pet.gender === "female" ? "♀" : "♂"}
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
          {pet.isAdopted ? <button className="ui disabled button">Already adopted</button> : <button className="ui primary button" onClick={() => this.handleAdoptClick(pet.id)}>Adopt pet</button>}
        </div>
      </div>
    )
  }
}

export default Pet
