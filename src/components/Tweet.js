// Left off here:
// https://www.youtube.com/watch?v=dGcsHMXbSOA
// at: 31:29 of 43:18

import React from 'react';

// this stylesheet is imported directly into this component.
import '../component-styles/tweet.css'

function Tweet({name, message}){
  return(
    <div className="tweet">
      <h3>{name}</h3>
      <p>{message}</p>
      <h3>Number of likes</h3>
    </div>
  )
}

export default Tweet;
