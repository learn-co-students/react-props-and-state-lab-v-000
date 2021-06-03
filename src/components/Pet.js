import React from 'react'

const Pet = ({ pet, onAdoptPet }) => {
    const {
      id,
      gender,
      age,
      name,
      type,
      weight,
      isAdopted
    } = pet
     
    const alreadyAdoptedButton = <button className="ui disabled button">Already adopted</button>
    const adoptPetButton = <button className="ui primary button" onClick={() => onAdoptPet(id)}>Adopt pet</button>
    
    return (
       <div className="card">
         <div className="content">
           <a className="header" href="/">
             {/*'♀' OR '♂' */}
             {gender === 'female' ? '♀' : '♂'}
             {name}
           </a>
           <div className="meta">
             <span className="date">{type}</span>
           </div>
           <div className="description">
             <p>Age: {age}</p>
             <p>Weight: {weight}</p>
           </div>
         </div>
         <div className="extra content">
           {isAdopted ? alreadyAdoptedButton : adoptPetButton}
          
         </div>
       </div>
     )
   }

   export default Pet
