import React from 'react';

class Filters extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {typeSelected: };
//
//     this.onChangeType = onChangeType.bind(this);
//     this.onFindPetsClick = this.onFindPetsClick.bind(this);
//   }
//
//   onChangeType(event) {
//     console.log(event)
//     this.setState({value: event.target.value});
//   }
//
//   onFindPetsClick(event) {
//     event.preventDefault();
//   }
// }

onFindPetsClick = event =>
  console.log(this.props.onChangeType(event.target.value))

  render() {
    return (

    <div className="filterbox">

      <select
        value={this.props.filters.type}
        onChange={this.onChangeType}
      >
      <option value="all">All</option>
      <option value="Cat">Cat</option>
      <option value="Dog">Dog</option>
      <option value="Micropig">Coconut</option>
      </select>


      <button
           className="submitbutton"
           onClick={this.props.onFindPetsClick}
         >
           Find pets
      </button>


    </div>

    );
  }
}


export default Filters
