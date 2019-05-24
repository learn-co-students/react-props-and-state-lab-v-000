import React from 'react'

class Filters extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      onFindPetsClick: this.props.onChangeType
    }
  }

	findPets = () => {
		const selection = document.getElementById("type").value
		this.state.onFindPetsClick(selection)
	}

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type">
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
