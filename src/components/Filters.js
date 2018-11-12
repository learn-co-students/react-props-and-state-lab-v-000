// first attempt 5/10/18
// import React from 'react';
//
// class Filters extends React.Component {
//   handleChange = (e) => {
//     this.props.onChangeType(e.target.value);
//   }
//
//   handleFind = (e) => {
//     this.props.onFindPetsClick();
//   }
//
//
//   render() {
//     return (
//       <div className="ui form">
//         <h3>Animal type</h3>
//         <div className="field">
//           <select
//             name="type"
//             id="type"
//             value={this.props.filters.type}
//             onChange={this.handleChange}
//           >
//             <option value="all">All</option>
//             <option value="cat">Cats</option>
//             <option value="dog">Dogs</option>
//             <option value="micropig">Micropigs</option>
//           </select>
//         </div>
//
//         <div className="field">
//           <button className="ui secondary button" onClick={this.handleFind}>Find pets</button>
//         </div>
//       </div>
//     );
//   }
// }
//
// export default Filters;
// second attempt 11/12/18

import React from 'react'
// need to capture the value and then send it back to the fetch
class Filters extends React.Component {
  handleChange = (e) => {
    this.props.onChangeType(e.target.value)
  }

  handleClick = (e) => {
    this.props.onFindPetsClick()
  }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select
            name="type"
            id="type"
            value={this.props.filters.type}
            onChange={this.handleChange}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={this.handleClick}>Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters
