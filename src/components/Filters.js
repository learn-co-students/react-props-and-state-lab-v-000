import React from 'react'

class Filters extends React.Component {
  constructor(){
    super()
    this.state = {
      selectValue: 'all'
    }
  }

  handleChange = (e) => {
    this.setState({selectValue: e.target.value}, () => {
      this.props.onChangeType(this.state.selectValue);
    })
  }
  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" value={this.state.selectValue} onChange={this.handleChange}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={this.props.onFindPetsClick}>Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters
