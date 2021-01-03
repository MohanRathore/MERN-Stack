//var React = require("react");
import React from "react";
import ReactDOM from "react-dom";
//var ReactDOM = require("react-dom");
// react version v16.x.x  it accept an array of element
// ReactDOM.render("kya dikhana hai","kaha dikhana hai","callback")
//we import react module to use JSX - JAvascript XML or extension

const arr = ["Mohan","Kumar","Rathore"]
// we can render array of element in react

// ReactDOM.render(
// <div>
//   <h1>Hello Mohan Welcome!!</h1>
//   <p>This is paragraph</p>
//   <h2>This is JSX not html tages</h2>
// </div>
//   ,document.getElementById("root"));

// ReactDOM.render(
// <React.Fragment>
//   <h1>Hello Mohan Welcome!!</h1>
//   <p>This is paragraph</p>
//   <h2>This is JSX not html tages</h2>
// </React.Fragment>
//   ,document.getElementById("root"));

//or we can use below both are same
const name = "Mohan Kumar";
const age = 24;


ReactDOM.render(
<>
  <h1>Hello {name+ " and age is " + age} Welcome!!</h1>
  <p>{`this is using template literals ${name} and age is ${age}`}</p>
  <h2>This is JSX not html tages {Math.floor(Math.random()*10)}</h2>
</>
  ,document.getElementById("root"));

//above code crate one extra div in root div but using array of element will not give such error...so we use react fragment to overcome this is React.Fragment

// ReactDOM.render(
// [
//   <h1>using array Hello Mohan Welcome!!</h1>,
//   <p>using arry This is paragraph</p>,
//   <h2> using array This is JSX not html tages</h2>
// ]
//   ,document.getElementById("root"));