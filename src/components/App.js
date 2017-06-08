import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            pets: [],
            adoptedPets: [],
            filters: {
                type: 'all',
            }
        };
    }
    onFindPetsClick = () => {
        let uri = '/api/pets';
        if (this.state.filters.type !== 'all') {
            uri += ('?type=' + this.state.filters.type)   
        }
        let app = this;
        fetch(uri).then(function(response){
            app.setState({pets:response})
        })
    }
    onChangeType = (value) => {
        this.setState({filters: {type: value}})
    }
    onAdoptPet = (id) => {
        
        this.setState( prevState => {
            let adoptedPets = prevState.adoptedPets;
            return {adoptedPets: adoptedPets.concat(id)}
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
                            <Filters filters={this.state.filters} onFindPetsClick={this.onFindPetsClick} onChangeType={this.onChangeType}/>
                        </div>
                        <div className="twelve wide column">
                            <PetBrowser pets={this.state.pets} adoptedPets={this.state.adoptedPets} onAdoptPet={this.onAdoptPet}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;