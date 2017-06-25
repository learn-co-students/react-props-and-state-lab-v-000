import React from 'react';
import PropTypes from 'prop-types';

class Filters extends React.Component {
  constructor() {
    super();

    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.handleFindPetsClick = this.handleFindPetsClick.bind(this);
  }

  handleFilterChange(event) {
    this.props.onChangeType(event.target.value)
  }

  handleFindPetsClick(event) {
    this.props.onFindPetsClick(event)
  }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" value={this.props.filters.type} onChange={this.handleFilterChange}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={this.handleFindPetsClick}>Find pets</button>
        </div>
      </div>
    );
  }
}

Filters.propTypes = {
  onChangeType: PropTypes.func,
  onFindPetsClick: PropTypes.func,
}


export default Filters;
