const React = require('react');

class Filters extends React.Component {
  constructor(props) {
    super(props);

    this.state = {value: props.filters.type};

  }

  updateSelect(ev) {
  }

  render() {
    console.log(this.state.value);
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type"
            value={this.state.value}
            onChange={() => this.props.onChangeType(this.state.value)}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button"
            onClick={() => this.props.onFindPetsClick(this.state.value)}>
            Find pets
          </button>
        </div>
      </div>
    );
  }
}

module.exports = Filters;
