import React from 'react'
//onChangeType callback prop gets called whenever the value of the <select> element changes with the value of the <select>
//onFindPetsClick callback prop gets called when the users clicks the 'Find pets' button.

class Filters extends React.Component {

  selectHandler = (event) =>{
    const type = event.target.value
    this.props.onChangeType(type)
  }

  clickHandler = (event) => {
    this.props.onFindPetsClick()
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
          <button className="ui secondary button" onClick={this.clickHandler}>Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters
