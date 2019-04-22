import React from "react";
import "./style.css";

function shoeCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Size:</strong> {props.Size}
          </li>
          <li>
            <strong>Condition:</strong> {props.Condition}
          </li>
        </ul>
      </div>
     
    </div>
  );
}

export default shoeCard;
