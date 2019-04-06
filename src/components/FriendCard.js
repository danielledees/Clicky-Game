import React from "react";



function FriendCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} onClick={()=>{
          props.handleClick (props.id)
        }}/>
      </div>
      <div className="content">
        <ul>
          {/* <li>
            <strong>Name:</strong> {props.name}
          </li> */}
        
        </ul>
      </div>
    
    </div>
  );
}

export default FriendCard;
