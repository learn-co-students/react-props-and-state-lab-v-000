import React from 'react';

class Filters extends React.Component {
  constructor() {
    super();
  }

  change = (e) => {
    this.props.onChangeType(e.target.value)
  }

  click = () => {
    this.props.onFindPetsClick();
  }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" value={this.props.filters.type} onChange={this.change}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={this.click}>Find pets</button>
        </div>
      </div>
    );
  }
}

export default Filters;
