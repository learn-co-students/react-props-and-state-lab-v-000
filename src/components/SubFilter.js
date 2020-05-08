// Additional code is based off of this video here:
// https://www.youtube.com/watch?v=dGcsHMXbSOA

import React, {useState} from 'react';
import Hello from './sayHello';
import Tweet from './Tweet';

let mySubFilter = () => {
  console.log("The SubFilter Button was pressed!");
}

function SubFilter() {

  // the first array variable "isRed" is the name
  // the second array variable "setRed" is what you call to change the state
  // value from false to true
              //set - is a proto-keyword...this value must start with "set"
  const [isRed, setRed] = useState(false);

              //set - is a proto-keyword...this value must start with "set"
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    setRed(!isRed)
  }

  const [users, setUsers] = useState([
    {name: "Ron", message: "Hi, I'm Ron"},
    {name: "Tom", message: "Hi, I'm Tom"},
    {name: "Don", message: "Hi, I'm Don"}
  ]);

  return (
    <div>
      <div>
        {users.map(user => (
          <Tweet name={user.name} message={user.message}/>
        ))}
      </div>
      <div className="sub-filter">
        <button onClick={mySubFilter}>SubFilter</button>
        <Hello />
        <Tweet name="1st Tweet" message="This is a random tweet" />
        <Tweet name="2nd Tweet" message="This is another tweet"/>
        <Tweet name="3rd Tweet" message="This is the final tweet"/>
      </div>
      <div className="app">
        {/* Now we need to add the conditional (or ternary operator) "isRed" */}
        {/* if the "isRed" is true, then the className is 'red' and you get the css styling for it */}
        {/* the ":" means 'else' in JSX, so if it is not true, you get no class name "" instead */}
        <h1 className={isRed ? 'red' : ""}>Change my Color!</h1>
        <button onClick={increment}>Increment</button>
        <h1>{count}</h1>
      </div>
    </div>
  );
}

export default SubFilter;
