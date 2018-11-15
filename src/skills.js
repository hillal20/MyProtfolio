import React, { Component } from "react";
const react = require("./pictures/react/react.png");
const python = require("./pictures/python/python.png");
class Skills extends Component {
  render() {
    return (
      <div className="skills">
        <h1>list of skills: </h1>
        <div className="react">
          <img src={react} width="100" />
        </div>
        <div className="python">
          <img src={python} width="100" />
        </div>
        <div className="node">
          <h3>" Nodej "</h3>
        </div>
        <div className="jest">
          <h3>"Jest"</h3>
        </div>
        <div className="html">
          <h3>"Less Css Html"</h3>
        </div>
        <div className="javascript">
          <h3>"JavaScript"</h3>
        </div>
        <div className="c">
          <h3>"C"</h3>
        </div>
      </div>
    );
  }
}

export default Skills;
