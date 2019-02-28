import React, { Component } from "react";
import "./css/App.css";
import Skills from "./skills.js";
import Hilal from "./pictures/hilal/hilal.jpg";
import { BrowserRouter as Router } from "react-router-dom";
import { Link, Route } from "react-router-dom";

class LandingPage extends Component {
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
      <div className="App">
        <div>
          <h1> Hilal Aissani </h1>
        </div>

        <div className="box1" onClick={this.display}>
          <div className="box2" />
          <div className="box3" />
          {clicked && (
            <div className="model1">
              {" "}
              <Link to="/skills">
                <h3>link to my skills</h3>{" "}
              </Link>
              <Link to="contact">
                {" "}
                <h3>contact me</h3>{" "}
              </Link>
            </div>
          )}
        </div>

        <div className="links">
          <a href="https://drive.google.com/file/d/1JL-1G12hSq2Klw3DMRoTtLy8Ibq7qxdT/view?usp=sharing">
            Resume
          </a>

          <a href="https://www.linkedin.com/in/hilal-aissani-a8823349/">
            Linkedin{" "}
          </a>

          <a href="mailto:hilalaissani@gmail.com"> Email me </a>
        </div>
        <div className="content">
          <div className="myImage">
            ß
            <img src={Hilal} width="250" />
          </div>

          <div className="summary">
            <p> Hey!!! I am Hilal Aissani </p>
            <p>
              Before I found my passion for Software Engineering and Web
              Development, I worked in business management and customer service.
              While I wasn’t passionate about the work, it taught me how to work
              well within a team and allowed me to hone my interpersonal skills.
              It taught me to have a positive and energetic attitude at work to
              support my peers, particularly in high stress situations.
            </p>
            <p>
              Then I joined Lambda School, where I discovered my passion for
              technology. In such a short time I have mastered multiple
              languages and frameworks such as : JavaScript, python and C.
              Although I’ve recently graduated, I’m still pushing myself to
              learn more and will continue my education for the rest of my
              career. I consider myself to be an intellectually curious and
              ambitious person, so I’m grateful to have found a field I love
              with so many opportunities for personal growth.{" "}
            </p>

            <p>
              I want to change peoples lives for the better with the
              applications I build. I want to push the boundaries of technology
              and achieve what I never thought was possible. Despite how much
              I’ve learned thus far, I know I have plenty of room to grow, and
              I’ll continue to grow until my dreams have been realized.
            </p>
          </div>
        </div>
        <div className="video">
          <a href="https://lambda-dashboard-cs9.herokuapp.com">
            <p> Click here to go to my project</p>
          </a>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/RnFzguPMJuE"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
          />
        </div>
      </div>
    );
  }
}

export default LandingPage;
