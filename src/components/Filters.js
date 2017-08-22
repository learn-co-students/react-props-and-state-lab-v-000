import React from 'react';

class Filters extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    }

  handleChange(event) {
    this.props.onChangeType(event.target.value); // event.target.value - "all", "dog", "cat", "micropig"
  }
  
  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" onChange={ this.handleChange } value={this.props.filters.type}> /* 'filters' is the App state attribute passed down as a prop */
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={ this.props.onFindPetsClick }>Find pets</button>
        </div>
      </div>
    );
  }
}

export default Filters;
