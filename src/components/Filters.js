import React from 'react'

class Filters extends React.Component {

  changeType = (event) =>{
    this.props.onChangeType(event.target.value)
  }

  petsClick = () =>{
    this.props.onFindPetsClick()
  }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" onChange={this.changeType}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={this.petsClick}>Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters
