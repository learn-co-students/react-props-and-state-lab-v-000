import React from 'react';

class Filters extends React.Component {
  constructor() {
    super();
  }

  render() {
      let filter = this.props.filters.type
      let options = <option value={filter}>{filter}</option>
      
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type">
            {options}
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button">Find pets</button>
        </div>
      </div>
    );
  }
}

export default Filters;
