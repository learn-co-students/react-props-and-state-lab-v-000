const React = require('react');

class Filters extends React.Component {
  constructor(props) {
    super(props);

    this.state = {value: props.filters.type};

    this.updateSelect = this.updateSelect.bind(this);
  }

  updateSelect(ev) {
    const value = ev.target.value;

    this.setState({
      value: value
    }, this.props.onChangeType(value))
  }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type"
            value={this.state.value}
            onChange={this.updateSelect}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button"
            onClick={this.props.onFindPetsClick}>
            Find pets
          </button>
        </div>
      </div>
    );
  }
}

module.exports = Filters;
