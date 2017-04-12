const React = require('react');

const Pet = require('./Pet');

class PetBrowser extends React.Component {
  render() {
    return (
      <div className="ui cards">
        <code>&lt;Pet /&gt;</code> &nbsp; <Pet />
      </div>
    );
  }
}

module.exports = PetBrowser;
