import React from 'react'
// destructure props to make pet and onAdopt function directly accessible
const Pet = ( { pet, onAdoptPet } ) => (
  <div className="card">
    <div className="content">
      <a className="header">
        {pet.gender === 'male' && '♂'}
        {pet.gender === 'female' && '♀'}
      </a>
    <div className="meta">
      <span className="date">{pet.type}</span>
    </div>
    <div className="description">
      <p>Name: {pet.name}</p>
      <p>Age: {pet.age}</p>
      <p>Weight: {pet.weight}</p>
    </div>
  </div>
  <div className="extra content">
    {/* conditional rendering will display correct button */}
    {pet.isAdopted && <button className="ui disabled button">Already adopted</button>}
    {/* callback function takes id argument and updates state.pets in App to reflect change of pet status */}
    {!pet.isAdopted && <button className="ui primary button" onClick={() => onAdoptPet(pet.id)}>Adopt pet</button>}
  </div>
</div>
)
export default Pet
