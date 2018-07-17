import React from 'react'

class Filters extends React.Component {
  constructor() {
    super()

    this.state = {
      category_value: 'all'
    }
  }

  handleSelection = event => {
    this.setState({
      category_value: event.target.value
    }, () => {
      this.props.onChangeType(this.state.category_value) 
    })
  }

  handleFindPetsClick = event => {
    this.props.onFindPetsClick()
  }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type"
            value={this.state.category_value}
            onChange={this.handleSelection} 
          >
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button"
            onClick={this.handleFindPetsClick} 
          >
            Find pets
          </button>
        </div>
      </div>
    )
  }
}

export default Filters
