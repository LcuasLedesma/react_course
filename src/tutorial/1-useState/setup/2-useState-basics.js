import React, { useState } from 'react';

const UseStateBasics = () => {
  const [text, setText] = useState("random title") 
  const handleClick = () => {
    setText("Hellow world")
  };
  return (
  <React.Fragment>
    <h1>{text}</h1>
    <button className='btn' onClick={handleClick}>
      change titl
    </button>
  </React.Fragment>
  
)};

export default UseStateBasics;

