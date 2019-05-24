import React from 'react'

class Filters extends React.Component {

	findPets = () => {
		this.props.onFindPetsClick()
	}
	
	updateType = () => {
		const selection = document.getElementById("type").value
		this.props.onChangeType(selection)	
	}

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" onChange={this.updateType}>
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
