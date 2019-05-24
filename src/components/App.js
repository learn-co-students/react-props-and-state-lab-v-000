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

	onAdoptPet = (id) => {
		const el = this.state.pets.find((el) => (el.id === id))
		el.isAdopted = true

		this.setState({
			pets: this.state.pets
		})
	}
	
	onChangeType = (type) => {
			this.setState({filters: {
											...this.state.filters,
											type: type							
			}})
		}

	updatePets = () => {
		let url = '/api/pets'
		const type = this.state.filters.type

		if (type !== 'all') {
			url = url + '?type=' + type 
		}

		fetch(url)
			.then(response => 
				response.json()				
			)
			.then(data => {
				this.setState({pets: data})
			})
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
              <Filters onFindPetsClick={this.updatePets} onChangeType={this.onChangeType} />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
