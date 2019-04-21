import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			pets: [],
			filters: {
				type: 'all'
			}
		};
	}

	onChangeType = (newType) => {
		this.setState({
			filters: {
				...this.state.filters,
				type: newType
			}
		});
	};

	onFindPetsClick = () => {
		const currentState = this.state.filters.type;
		let queryURL;
		if (currentState === 'cat') {
			queryURL = '/api/pets?type=cat';
		} else if (currentState === 'dog') {
			queryURL = '/api/pets?type=dog';
		} else if (currentState === 'micropig') {
			queryURL = '/api/pets?type=micropig';
		} else {
			queryURL = '/api/pets';
		}

		fetch(queryURL).then((res) => res.json()).then((data) => {
			this.setState({
				pets: data
			});
		});
	};

	onAdoptPet = (petId) => {
		const adoptedPet = this.state.pets.find((pet) => pet.id === petId);
		adoptedPet.isAdopted = true;
		this.setState({
			pets: [ adoptedPet ]
		});
	};

	render() {
		return (
			<div className="ui container">
				<header>
					<h1 className="ui dividing header">React Animal Shelter</h1>
				</header>
				<div className="ui container">
					<div className="ui grid">
						<div className="four wide column">
							<Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} />
						</div>
						<div className="twelve wide column">
							<PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
