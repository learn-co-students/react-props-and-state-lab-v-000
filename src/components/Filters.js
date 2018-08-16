import React from 'react'

class Filters extends React.Component {

  typeChange = event => {
    let value = event.target.value
    this.props.onChangeType(value)
  }

  findPets = event => {
    this.props.onFindPetsClick()
  }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" onChange={this.typeChange}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={this.findPets}>Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters
