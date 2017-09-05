import React from 'react';

class Filters extends React.Component {
  constructor(props) {
    super(props);
  }

  handleFindPetsClick = () => {
    this.props.onFindPetsClick();
  }

  handleSelectChange = (event) => {
    this.props.onChangeType(event.target.value);
  }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select value={this.props.filters.type} onChange={this.handleSelectChange} name="type" id="type">
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button onClick={this.handleFindPetsClick} className="ui secondary button">Find pets</button>
        </div>
      </div>
    );
  }
}

export default Filters;
