import React, { Component } from "react";
const react = require("./pictures/react/react.png");
const python = require("./pictures/python/python.png");
const c = require("./pictures/c/c.png");
const jest = require("./pictures/jest/jest.png");
const html = require("./pictures/html/html.png");
const js = require("./pictures/javascript/JavaScript.png");
const node = require("./pictures/node/node.png");

class Skills extends Component {
  render() {
    return (
      <div className="skills">
        <h1> skills: </h1>
        <div className="react">
          <img src={react} width="100" />
        </div>
        <div className="python">
          <img src={python} width="100" />
        </div>
        <div className="node">
          <img src={node} width="100" />
        </div>
        <div className="jest">
          <img src={jest} width="100" />
        </div>
        <div className="html">
          <img src={html} width="100" />
        </div>
        <div className="javascript">
          <img src={js} width="100" />
        </div>
        <div className="c">
          <img src={c} width="100" />
        </div>
      </div>
    );
  }
}

export default Skills;
