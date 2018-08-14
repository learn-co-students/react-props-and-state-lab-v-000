import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  constructor(props){
    super(props)
    const pets=this.props.pets;
    
    this.state={
      pets: {pets},
    }
  }
  
  
  
  
  
  render() {
    return (<div>
      {this.props.pets.map((pet)=>(
        <div className="ui cards"><Pet onAdoptPet={this.props.onAdoptPet}/></div>
        ))
      }
    </div>)
  }
}

export default PetBrowser
