import React from 'react'

class Filters extends React.Component {
  constructor(){
    super();
    this.state = {value: 'all'}
  }

  handleChange = event => {
    this.setState({value: event.target.value})
    this.props.onChangeType(this.state.value)
  }

  handleClick = () => {
    this.props.onFindPetsClick(this.state.value)
  }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" value={this.state.value} onChange={event => this.handleChange(event)}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={this.handleClick} value={this.state.value}>Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters
