const React = require('react');

class Filters extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      type: this.props.filters.type
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let value = event.target.value
    this.setState({ type: value });
    this.props.onChangeType(value);
  }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" value={this.state.type} onChange={this.handleChange}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button onClick={this.props.onFindPetsClick} className="ui secondary button">Find pets</button>
        </div>
      </div>
    );
  }
}

module.exports = Filters;
