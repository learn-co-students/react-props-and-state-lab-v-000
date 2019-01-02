import React from 'react'

class Filters extends React.Component {

  constructor(props) {
    super(props);
  }

  passValue = (e) => {
    console.log(e.target.value)
    this.props.onChangeType(e.target.value);
  }

  onFindPetsClick = () => {
    console.log(this.props.state)
    // if (this.props.state.filters.type === "all") {
    //   fetch('http://localhost:3000/pets').then(response => response.json()).then(data => this.props.setState({pets: data}));
    // } else if (this.props.state.filters.type === "dog") {
    //   fetch('http://localhost:3000/pets?type=dog').then(response => response.json()).then(data => this.props.setState({pets: data}));
    // } else if (this.props.state.filters.type === "cat") {
    //   fetch('http://localhost:3000/pets?type=cat').then(response => response.json()).then(data => this.props.setState({pets: data}));
    // } else {
    //   fetch('http://localhost:3000/pets?type=micropigs').then(response => response.json()).then(data => this.props.setState({pets: data}));
    // }
  }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" onChange={this.passValue}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={this.onFindPetsClick}>Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters
