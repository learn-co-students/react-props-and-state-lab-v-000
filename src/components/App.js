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
    this.onChangeType = this.onChangeType.bind(this)
      this.onFindPetsClick = this.onFindPetsClick.bind(this)
      this.onAdoptPet =this.onAdoptPet.bind(this)
  }
onChangeType = (newType)=>{
  this.setstate({
    filters: {
      type:newType
    }
  })
}
// handleSelectChange = event => {
//     this.setState({
//       filters: {
//         type: newValue
//       }
//     })
//   }
onFindPetsClick = ()=>{
  let petType = this.state.filters.type;
         let that = this;
         if(petType !== 'all') {
             fetch('/api/pets?type=' + petType)
             .then(result => { return result.json()})
             .then(data => {
                 that.setState({ pets: data });
             });
         } else {
             fetch('/api/pets').then(result => {
                 return result.json();
             }).then(data => {
                 that.setState({ pets: data });
             });
         };
}

onAdoptPet = (petId)=>{
  const allPet = this.state.pets;
  for(var i in allPet){
    if (allPet[i]['id']=== petId) {
      allPet[i]['isAdopted'] = true;
    }
  }
}

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        Type: {this.state.filters.type}
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters  onFindPetsClick={this.onFindPetsClick} onChangeType={this.onChangeType} filters={this.state.filters}/>
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
