import React from 'react';

class Filters extends React.Component {
  constructor() {
    super();

    this.state = {selectedOption: 'all'}
  }

  handleChange = (e)=> {
    this.setState({selectedOption: e.target.value})
    this.props.onChangeType(e.target.value)
  }

  findPets = ()=> {
    this.props.onFindPetsClick(this.state.selectedOption)
  }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" value={this.state.selectedOption} onChange={this.handleChange}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={this.findPets}>Find pets</button>
        </div>
      </div>
    );
  }
}

export default Filters;
