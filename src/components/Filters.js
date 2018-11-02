import React from 'react'

class Filters extends React.Component {
  constructor() {
    super();
    this.state = {
      type: "all"
    }
  }

  onChangeType = (event) => {
    this.props.onChangeType(event)
    this.setState({
      type: event.target.value
    })
  }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type"
            onChange={this.onChangeType} value={this.state.type}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button"
            onClick={this.props.onFindPetsClick}>
            Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters
