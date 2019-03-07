import React from 'react'

class Filters extends React.Component {


  handleChange = event => {
  const temp = event.target.value
  return this.props.onChangeType(temp)
  }

  handleClick = event => {
    const temp1 = event
    return this.props.onFindPetsClick()
  }



  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" onChange={event => this.handleChange(event)}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button"
            onClick={event => this.handleClick(event)}>Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters
