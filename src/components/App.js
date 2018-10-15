import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (selected) => {
    // debugger
    // const filter = this.state.filters;
    // filter.type = selected;
    const filter = {type: selected.target.value};
    this.setState({
      filters: filter
    });
  }

  onFindPetsClick(props){
    if(props === 'all'){
      return fetch(`/api/pets`).then(resp => resp.json()).then(info => this.setState({pets: info}));
    }else{
      return fetch(`/api/pets?type=${props}`).then(resp => resp.json()).then(info => this.setState({pets: info}));
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
              <Filters onChangeType={this.onChangeType} type={this.state.filters.type} onFindPetsClick={() => this.onFindPetsClick(this.state.filters.type)}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

// App.defaultProps = {
//   filters:{ 
//     type: 'all'
//   }
// }

export default App
