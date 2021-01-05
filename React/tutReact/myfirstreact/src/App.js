import React from "react";
import ReactDOM from "react-dom";
class Car extends React.Component {
    render() {
      return <h2>I am a {this.props.name} Car!</h2>;
    }
  }
  
  class Garage extends React.Component {
    render() {
      return (
        <div>
        <h1>Who lives in my {this.props.brand} Garage?</h1>
        <Car name="Mustang" />
        </div>
      );
    }
  }

export default Garage;