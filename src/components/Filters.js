import React from 'react';

class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.filters
  }

  handleChange = (e) => {
    this.props.onChangeType(e.target.value)
    this.setState({ value: e.target.value })
  }

  handleClick = (e) => {
    this.props.onFindPetsClick(e)
  }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" value={this.state.type} onChange={this.handleChange}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={this.handleClick}>Find pets</button>
        </div>
      </div>
    );
  }
}

export default Filters;
