import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="index.html">
        Clicky Game
      </a>
      <button
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
         
          <li className="nav-item">
            <a className="nav-link" href="#">
             Click an Image to Begin
             {/* this.state = changes when image is clicked with right or wrong message */}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
             Score: | Top Score:
             {/* this.state = changes score keeps track of current guess and top score keeps track of highest scored game */}
            </a>
          </li>
          
         
        </ul>
       
      </div>
    </nav>
  );
}

export default Navbar;
