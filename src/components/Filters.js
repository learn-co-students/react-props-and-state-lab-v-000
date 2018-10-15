import React from 'react'

class Filters extends React.Component {

  // constructor(props){
  //   super(props)
  //   this.state = {
  //     type: this.props.value
  //   }
  // }

  // onFindPetsClick = () => {
  //   fetch(`data/${this.state.onChangeType}`).then(resp =>)
  // }

  // setType(event){
  //   this.setState({
  //     onChangeType: event.target.value
  //   })
  //   console.log(this.state.onChangeType);
  // }

  handleSelect = (event) => {
    console.log(event.value);
  }




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
          <button className="ui secondary button" onClick={this.props.onFindPetsClick}>Find pets</button>
        </div>
      </div>
    )
  }
}

Filters.defaultProps = {
  filters:{ 
    type: 'all'
  }
}



export default Filters
