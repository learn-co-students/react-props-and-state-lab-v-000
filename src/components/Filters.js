import React from 'react';
import PropTypes from 'prop-types';

class Filters extends React.Component {
  constructor() {
    super();
  }

  handleChange = event => {
    this.props.onChangeType(event.target.value)
  }

  render() {
    debugger
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" value={this.props.filters.type} onChange={this.handleChange}>//does it want the value of onChange to be 'micropig'?
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={this.props.onFindPetsClick}>Find pets</button>
        </div>
      </div>
    );
  }
}

export default Filters;

Filters.propTypes = {
  onFindPetsClick: PropTypes.func
}
