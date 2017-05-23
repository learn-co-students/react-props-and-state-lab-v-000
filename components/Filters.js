const React = require('react');

class Filters extends React.Component {
  constructor() {
    super();

    this.changeTypeHandler = this.changeTypeHandler.bind(this);
  };

  changeTypeHandler(event){
    this.props.onChangeType.apply(this, [event.target.value])
  };

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" value={this.props.filters.type} onChange={this.changeTypeHandler}>
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
