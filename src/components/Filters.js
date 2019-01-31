import React from 'react'

class Filters extends React.Component {

  constructor () {
    super()
    this.state = {
      petType : "all"
    }
  }

  submitHandler = (event) => {
    this.props.onFindPetsClick(this.state.petType)
  }

  selectHandler = (event) => {
    let newType = event.target.selected
    this.props.onChangeType(newType)
    this.setState({
      petType: newType
    })
  }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" onChange={this.selectHandler}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={this.submitHandler}>Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters
