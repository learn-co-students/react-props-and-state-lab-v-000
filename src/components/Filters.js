import React from 'react';

class Filters extends React.Component {
  constructor() {
    super();

		this.state = {
			value: 'micropig',
  }};

	onChangeType = (event) => {
		this.setState({
			value: event.target.value,
})
};

	onFindPetsClick = (event) => {
	if(this.props.value === "all" || this.props.value === undefined){
		fetch("/api/pets").then(function(response){
				return(response)
		})
} else {
		fetch(`/api/pets?type=${this.props.value}`).then(function(response){
		return(response)})
		}
};

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type"value={this.state.value} onChange={this.onChangeType} filters={this.props.filters} >
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
