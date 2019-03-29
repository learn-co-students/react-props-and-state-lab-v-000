import React from 'react'

class Filters extends React.Component {

  constructor() {
    super();

    this.state = {
      type: ""
    };
  }
  onFindPetsClick = () => {
    console.log(this.state)

    this.props.onChangeType(this.state.type)
  }

  handleSelectedChange = event => {
    console.log("event:" + event.target.value)
    this.setState({
      type: event.target.value
    })
}

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" onChange={this.handleSelectedChange}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={event => this.onFindPetsClick(event)}>Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters
