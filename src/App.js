import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Link from "react-router-dom";
import Hilal from "./pictures/hilal/hilal.jpg";
class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <h1>Welcome to Hilal Place </h1>
        </div>

        <div className="links">
          <a href="https://resume.creddle.io/resume/ds1uidky3ot">Resume</a>

          <a href="https://www.linkedin.com/in/hilal-aissani-a8823349/">
            Linkin{" "}
          </a>

          <a href="mailto:hilalaissani@gmail.com"> email me </a>
        </div>
        <div className="content">
          <div className="myImage">
            <img src={Hilal} width="250" />
          </div>

          <div className="summary">
            <p> Hey!!!I am Hilal Aissani </p>
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
          <p>discover my project</p>
          <a href="https://lambda-dashboard-cs9.herokuapp.com">
            <p>my project</p>
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

export default App;
