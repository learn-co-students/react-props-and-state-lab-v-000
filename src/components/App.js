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

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters 
                onChangeType={(t) => this.setState({
                  filters: {
                    ...this.state.filters,
                    type: t 
                    }
                  })
                }
                onFindPetsClick={() => {
                  let p
                  if (this.state.filters.type === 'all') {
                    p = ''
                  } else {
                    p = `?type=${this.state.filters.type}`
                  } 
                  fetch(`/api/pets${p}`)
                    .then((response) => 
                      response.json()
                    )
                    .then((json)=>{
                     this.setState({
                      pets: json
                    })
                  })
                  } 
                }
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={(pet) => {
                let arr = this.state.pets
                let result = arr.find((e)=>{return e.id === pet.id})
                result.isAdopted = true
                console.log(arr)
                this.setState({
                  pets: arr})
              }
                    
               }
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
