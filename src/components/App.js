import React from 'react'
import Filters from './Filters'
import PetBrowser from './PetBrowser'


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
    console.log("selectedType", selectedType.target.value)
    this.setState({
      filters: {
        // type: selectedType
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
      if (this.state.filters.type === "all") {
        fetch('/api/pets')
          .then(res => res.json())
          .then(res => {
            console.log("res", res)
            this.state.pets.push(res)
          }) }


        else if (this.state.filters.type === "dog") {
        fetch('/api/pets?type=dog')
          .then(res => res.json())
          .then(res => {
            console.log("dogs", res)
            this.state.pets.push(res)

          }) }

        else if (this.state.filters.type == "cat") {
          fetch('/api/pets?type=cat')
            .then(res => res.json())
            .then(res => {
              console.log("cats", res)
              this.state.pets.push(res)

          }) }

        else if (this.state.filters.type == "micropig") {
          fetch('/api/pets?type=micropig')
            .then(res => res.json())
            .then(res => {
              console.log("micropigs", res)
              this.state.pets.push(res)

          })}
        }


      onAdoptPet(petId){
        console.log("petId", petId)
          // const pet = this.state.pets.find(petId);
          // pet.isAdopted = true
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
              <PetBrowser pets={this.state.pets} onAdoptPet={ this.onAdoptPet() }/>
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
