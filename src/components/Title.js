import React from "react";


function Title(props) {
  return  (<div className="title">
  <h1>Clicky/Memory Game</h1>
  <p>Click on an image to earn points, but don't click on any more than once!</p>
  {props.children}
  </div>);
  
  
}

export default Title;
