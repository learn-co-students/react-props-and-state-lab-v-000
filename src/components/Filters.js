import React from 'react'

class Filters extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      onChangeType: this.props.onChangeType,
      onFindPetsClick: this.props.onFindPetsClick
    }
  }

  handleClick = () => {
    this.state.onFindPetsClick()
  }

  handleChange = (e) => {
    this.state.onChangeType(e.target.value)
  }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select 
            name="type" 
            id="type"
            onChange={ (e) => this.handleChange(e) } >
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button 
            className="ui secondary button"
            onClick={ this.handleClick }>
              
              Find pets
          
          </button>
        </div>
      </div>
    )
  }
}

export default Filters
