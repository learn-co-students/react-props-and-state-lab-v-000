import React from 'react'

class Filters extends React.Component {
 
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this)
    this.handleClick  = this.handleClick.bind(this)
    this.state = {
    }
  }

  handleChange = (e) => {
    this.props.onChangeType(e.target.value)
  }

  handleClick = () => {
    this.props.onFindPetsClick()
}
 
  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" onChange={this.handleChange}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button onClick={this.handleClick} className="ui secondary button">Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters
