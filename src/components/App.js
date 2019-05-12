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

	onChangeType = (event) => {
		// debugger;
		this.setState({
			...this.state.pets,
			filters: {
				type: event.target.value
			}
		});
	};

	onFindPetsClick = () => {
		let url = '/api/pets';
		let type = this.state.filters.type;
		if (type !== 'all') {
			url += `?type=${this.state.filters.type}`;
		}

		fetch(url).then((response) => response.json()).then((petData) => {
			this.setState({
				pets: petData
			});
		});
	};

	onAdoptPet = (id) => {
		let petsArrayCopy = [ ...this.state.pets ];
		const pet = petsArrayCopy.find((p) => p.id === id);
		console.log(pet, 'is the same of ', pet.id === id);
		pet.isAdopted = true;
		console.log(this.state.pets);
		this.setState({
			pets: petsArrayCopy
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
							{/* <Filters /> */}
							<Filters onFindPetsClick={this.onFindPetsClick} onChangeType={this.onChangeType} />
						</div>
						<div className="twelve wide column">
							<PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
