import React from 'react';

class Filters extends React.Component {
  constructor(props) {
    super();
    this.state = {type: props.filters.type}
  }

  onTypeChanged = (event)=>{
    this.setState({type: event.target.value});
    this.props.onChangeType(event.target.value);
  }

  onFindPetsClick = (event)=>{
    this.props.onFindPetsClick();
  }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" value={this.state.type} onChange={this.onTypeChanged}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={this.onFindPetsClick}>Find pets</button>
        </div>
      </div>
    );
  }
}

export default Filters;
