import React from 'react'

class Filters extends React.Component {
  constructor(props) {
    super(props);

    // Define the initial state:
    this.state = {
	type: ''
              }
  };

  handleFilterTypeChange = event => {
	this.setState({
	  [event.target.name]: event.target.value	
	})

	this.props.onChangeType(event)
  }
  
  handleFindPetsClick = state => {
//	  debugger
	this.props.onFindPetsClick(this.state)
  }


  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" onChange={this.handleFilterTypeChange} value={this.state.value}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick = {this.handleFindPetsClick}>Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters
