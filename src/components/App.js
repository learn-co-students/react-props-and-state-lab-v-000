import React from 'react'
import Filters from './Filters'
import PetBrowser from './PetBrowser'
import Pet from './Pet'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

// this has to listen and take in whatever value is being selected (cat, dog, etc)
  onChangeType = (selectedType) => {
    // console.log("selectedType", selectedType.target.value)
    this.setState({
      filters: {
        type: selectedType.target.value
      }
    })
  }
/*
// have to build this out with the filter aspect of the dropdown. it's fetching
// all the pets, but we have to be able to fetch individual categories of pets.
// when you click 'dogs' for example, it still gets all of them. so i need some
// kind of conditional statement to ask what type is being asked for
*/

  onFindPetsClick = () => {
      // console.log("i am here!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
      if (this.state.filters.type === "all") {
        fetch('/api/pets')
          .then(res => res.json())
          .then(res => {
            // console.log("res", res)
            this.state.pets.push(res)
          }) }


        else if (this.state.filters.type === "dog") {
        fetch('/api/pets?type=dog')
          .then(res => res.json())
          .then(res => {
            // console.log("dogs", res)
            this.state.pets.push(res)

          }) }

        else if (this.state.filters.type === "cat") {
          fetch('/api/pets?type=cat')
            .then(res => res.json())
            .then(res => {
              // console.log("cats", res)
              this.state.pets.push(res)

          }) }

        else if (this.state.filters.type === "micropig") {
          fetch('/api/pets?type=micropig')
            .then(res => res.json())
            .then(res => {
              // console.log("micropigs", res)
              this.state.pets.push(res)

          })}
        }

// walkthrough onFindPetsClick:

      // let url = "/api/pets"
      // if (this.state.filters.type !== 'all') {
      //   url += `?type${this.state.filters.type}`
      // }
      //
      // fetch(url)
      //   .then(r => r.json())
      //   .then(petsJsonArray => {
      //     this.setState({
      //       pets: petsJsonArray
      //     }, console.log(petsJsonArray))
      //
      //   })
    // }

          onAdoptPet = (id) => {
            let petsArrayCopy = [ ...this.state.pets]
            let chosenPet = petsArrayCopy.find(p => p.id === id)
            chosenPet.isAdopted = true
            this.setState({
              pets: petsArrayCopy
            })








            // console.log("pets!!!!!!!!!!!!!!!!", this.state.pets)
          //   console.log("petId in on AdoptPet!!!!!!!!!!!!!", petId)
          //   const mappedPets = this.state.pets.map(pet => {
          //     (pet.id === petId) ? pet.isAdopted = true : pet
          //   })
          //
          //   this.setState({
          //     pets: mappedPets
          //   })
          //
          //   const mappedPets = this.state.pets.map(pet =>
          //
          // if (pet.id === petId) {
          //   pet.isAdopted = true
          // } else {
          //   return pet
          // }
          // here i should do some kind of condition that tests to see if one of these
          // pets is equal to the petId given. if that's true, then take that pet and all
          // it's attributes and change its 'isAdopted' attribute to true. If false, just
          // return the pet.
        // )
        //
        //   after the mapping is done, you want to update the state to the updated
        //   pets array.
        //
        }



  render(){
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onFindPetsClick={ this.onFindPetsClick } onChangeType={ this.onChangeType } />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={ this.onAdoptPet }/>
            </div>
            <div className="twelve wide column">
              {/* <Pet pet={}> */}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App


// <Filters onFindPetsClick={ this.onFindPetsClick } />
