import React from "react";
import "./Persons.css";

const person = (props) => {
  return (
    <div className="Person">
      <p onClick={props.click}>I {props.name} am a prson!</p>
      <p>{props.children}</p>
      <input type="text" value={props.name} onChange={props.changed} />
    </div>
  );
};
export default person;
