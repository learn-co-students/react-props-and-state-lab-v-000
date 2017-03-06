const React = require('react');

const Pet = require('./Pet');

class PetBrowser extends React.Component {

  render() {
    const petsComponents = this.props.pets.map((child, i) => {
      return (<Pet key={i} pet={child} />)
    })
    return (
      <div className="ui cards">
        {petsComponents}
      </div>
    );
  }
}

module.exports = PetBrowser;
