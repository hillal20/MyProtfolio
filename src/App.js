import React, { Component } from "react";
import "./css/App.css";
import Skills from "./skills.js";
import Contact from "./contact.js";
import LandingPage from "./landingPage";
import Hilal from "./pictures/hilal/hilal.jpg";
import { BrowserRouter as Router } from "react-router-dom";
import { Link, Route } from "react-router-dom";

const inLineStyle = {
  background: "red"
};
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
  }
  display = event => {
    // alert("hello");
    console.log(event.target.style);
    this.setState({ clicked: !this.state.clicked });
    // event.target.style.background = "red";
  };
  render() {
    const { clicked } = this.state;
    return (
      <div>
        <Route exact path="/" component={LandingPage} />
        <Route path="/skills" component={Skills} />
        <Route path="/contact" component={Contact} />
      </div>
    );
  }
}

export default App;
