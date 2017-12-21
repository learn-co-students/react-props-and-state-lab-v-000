import React from 'react';

class Filters extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      type: props.filters.type
    }

  }

  handleChangeType = event => {
    this.props.onChangeType(event.target.value)
  }

  handleFindPets = event => {
    this.props.onFindPetsClick()
  }

  render() {
    let type = this.state.type
    return (

      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" value={type} onChange={this.handleChangeType}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={this.handleFindPets}>Find pets</button>
        </div>
      </div>
    );
  }
}

export default Filters;
