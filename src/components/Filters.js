import React from 'react'

class Filters extends React.Component {

  handleInputChange = (event) => {
    let chosenType = event.target.value
    this.props.onChangeType(chosenType)
  }

  handleSubmit = (event) => {
    this.props.onFindPetsClick()
  }


  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" onChange={this.handleInputChange}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={event => this.handleSubmit(event)}>Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters
