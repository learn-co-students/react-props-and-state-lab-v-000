import React from 'react';

class Filters extends React.Component {
  constructor(props) {
    super(props);

		this.state = {
			value: '',
  }
	this.onFindPetsClick = this.onFindPetsClick.bind(this)
};

	onChangeType = (event) => {
		this.setState({
			value: event.target.value,
		})
	};

	onFindPetsClick = (event) => {
		if(this.state.value === "all" || this.state.value === undefined){
		fetch("/api/pets").then((response)=>{
			this.setState({
				pets: response,
			})
    })} else {
			fetch(`/api/pets?type=${this.state.value}`).then((response)=>{
			this.setState({
				pets: response,
		})})
	}};

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type"value={this.state.value} onChange={this.onChangeType} >
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={this.onFindPetsClick}>Find pets</button>
        </div>
      </div>
    );
  }
}

export default Filters;
