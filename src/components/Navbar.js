import React from "react";


function Navbar(props) {
  return (
    <nav className="navbar">
     <a className="navbar" href="index.html">
        Clicky Game
      </a>
      <span className="navMessage"> {props.message}</span>
      <span className="navScore"> Score: {props.score} | Top Score: {props.highScore}</span>
    </nav>
  )

  
}

export default Navbar;
