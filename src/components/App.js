import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    }
  }

  onChangeType= (type)=>{
    console.log(`${type}`)
    this.setState({
      filters: Object.assign({},
        this.state.filters,{
          type: type
        })
      })
    }

  onFindPetsClick= ()=>{
    let type = this.state.filters.type
    console.log(type)
    if(type === 'all'){
       fetch('/api/pets').then(response=> response.json()).then(data=>{
         this.setState({pets: data})

     })
    }

    if(type === 'cat'){
     fetch('/api/pets?type=cat').then(response=> response.json()).then(data=>{
       this.setState({pets: data})

   })
  }
    if(type === 'dog'){
      fetch('/api/pets?type=dog').then(response=> response.json()).then(data=>{
        this.setState({pets: data})

    })
   }
    if(type === 'micropig'){
       fetch('/api/pets?type=micropig').then(response=> response.json()).then(data=>{
         this.setState({pets: data})

     })
    }

  }

  onAdoptPet = (id)=>{
    let adoptedPets = this.state.adoptedPets
    adoptedPets.push(id)
    this.setState({
      adoptedPets: adoptedPets
    })
    console.log(this.state.pets)
    this.state.pets.map(p=>{
      return p.id === id  ? { ...p.isAdopted= true } : p

    })

  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          {console.log(this.state.pets)}
          <div className="ui grid">
            <div className="four wide column">
              <Filters  onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} adoptedPets={this.state.adoptedPets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
