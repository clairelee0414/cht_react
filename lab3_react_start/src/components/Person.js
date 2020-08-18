import React, { useState } from "react";
import "./Person.css"

const Person = (props) => {
  const [xxx, yyy] = useState({
    publisher: "Marvel University",
    studio: "Disney",
  });
  const switchVenderHandler = () => {
    yyy({ publisher: "DC Universe", studio: xxx.studio });
  };
  const show = () => {
    console.log(xxx);
  };
  return (
    <div className="Person">
      <button onClick={switchVenderHandler}>Change!</button>
      <button onClick={show}>show!</button>
      <h1>{xxx.publisher}</h1>
      <p onClick={props.chickCallback}>I am {props.name}</p>
      <p>I am {props.age} years old,</p>
      <p>I am the {Math.floor(Math.random() * 5)} th generation</p>
      <p style={{ color: "red" }}>My job function is {props.children}</p>
    </div>
  );
};

export default Person;
