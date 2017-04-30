const React = require('react');

class Filters extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(ev) {
    this.props.onChangeType(ev.target.value)
  }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" value={this.props.filters.type} onChange={this.handleChange} id="type">
            <option value="cat">Cats</option>
            <option value="all">All</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={this.props.onFindPetsClick}>Find pets</button>
        </div>
      </div>
    );
  }
}

Filters.propTypes = {
  filters: React.PropTypes.object.isRequired,
  onChangeType: React.PropTypes.func.isRequired,
  onFindPetsClick: React.PropTypes.func.isRequired
}

module.exports = Filters;
