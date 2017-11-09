import React from 'react';

class Filters extends React.Component {
  constructor() {
    super();

    this.handleElementChange = this.handleElementChange.bind(this)
  }

//onChangeType callback prop, called whenever the value of the select element changes
  handleElementChange = event => {
    this.props.onChangeType(event.target.value)
  }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" value={this.props.filters.type} onChange={this.handleElementChange}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>
        //onFindPetsClick callback prop called when the users clicks the 'Find pets' button
        <div className="field">
          <button className="ui secondary button" onClick={this.props.onFindPetsClick}>Find pets</button>
        </div>
      </div>
    );
  }
}

export default Filters;
