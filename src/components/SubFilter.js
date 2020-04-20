// Left off on this video here:
// https://www.youtube.com/watch?v=dGcsHMXbSOA
// ...at 17:04 of 43:18

import React from 'react';
import Hello from './sayHello';
import Tweet from './Tweet';

let mySubFilter = () => {
  console.log("The SubFilter Button was pressed!");
}

class SubFilter extends React.Component {
  render() {
    return (
      <div className="sub-filter">
        <button onClick={mySubFilter}>SubFilter</button>
        <Hello />
        <Tweet name="1st Tweet" message="This is a random tweet" />
        <Tweet name="2nd Tweet" message="This is another tweet"/>
        <Tweet name="3rd Tweet" message="This is the final tweet"/>
      </div>
    );
  }
}

export default SubFilter;
