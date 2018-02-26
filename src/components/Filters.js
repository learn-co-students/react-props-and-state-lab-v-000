import React from 'react';

class Filters extends React.Component {

  onSelectChange = (selectChange) => {
    this.props.onChangeType(selectChange.target.value)
  }

  makeSelection = (pressEvent) => {
    this.props.onFindPetsClick()
  }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select onChange={this.onSelectChange} value={this.props.filters.type} name="type" id="type" >
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button onClick={this.makeSelection} className="ui secondary button">Find Pets</button>
        </div>
      </div>
    );
  }
}

export default Filters;
