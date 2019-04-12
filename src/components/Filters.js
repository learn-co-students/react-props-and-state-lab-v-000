import React from 'react'

class Filters extends React.Component {
  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" onChange={this.props.onChangeType}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button 
            // add onClick attribute to the button
            // it is an event listener to attach in react, 
            // assign the prop to pass down 'this.props.onFindPetsClick', to be the callback function for a click event on this button
            onClick={this.props.onFindPetsClick}
            className="ui secondary button">
            Find pets
          </button>
        </div>
      </div>
    )
  }
}

export default Filters
