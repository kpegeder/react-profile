import React from "react";
import "./style.css";
import Film from "../../assets/images/film-connector.png";
import AirWalk from "../../assets/images/air-walk.png";
import Weather from "../../assets/images/weather-dashboard.png";
import Password from "../../assets/images/password-generator.png";
import Day from "../../assets/images/scheduler.png";
import Code from "../../assets/images/code-quiz.png";
import Note from "../../assets/images/note-taker.png";
import Burger from "../../assets/images/burgers.png";

const Projects = () => {
  return (
    <article className="container">
      <div className="row">
        <div className="col-md-12">
          <h2>Portfolio</h2>
        </div>
      </div>
      <div className="dropdown-divider"></div>
      <div className="row">
        <div className="card col-md-4 cardStyle">
          <img
            className="card-img-top img-size"
            src={Film}
            alt="Welcome Page - Popcorn"
          />
          <div className="card-body">
            <h5 className="card-title centerProject">Film Connector</h5>
            <a
              href="https://film-connector.herokuapp.com/"
              className="btn btn-style"
              target="_blank"
              rel="noreferrer"
            >
              Deployed Project
            </a>
            <a
              href="https://github.com/kpegeder/Minder"
              className="btn btn-style"
              target="_blank"
              rel="noreferrer"
            >
              Project Code
            </a>
          </div>
        </div>
        <div className="card col-md-4 cardStyle">
          <img
            className="card-img-top img-size"
            src={AirWalk}
            alt="Map with pin and filter"
          />
          <div className="card-body">
            <h5 className="card-title centerProject">AirWalk</h5>
            <a
              href="https://mx6.github.io/Bootcamp_Project_1/"
              className="btn btn-style"
              target="_blank"
              rel="noreferrer"
            >
              Deployed Project
            </a>
            <a
              href="https://github.com/mx6/Bootcamp_Project_1"
              className="btn btn-style"
              target="_blank"
              rel="noreferrer"
            >
              Project Code
            </a>
          </div>
        </div>
        <div className="card col-md-4 cardStyle">
          <img
            className="card-img-top img-size"
            src={Weather}
            alt="5 day forecast of a city"
          />
          <div className="card-body">
            <h5 className="card-title centerProject">Weather Dashboard</h5>
            <a
              href="https://kpegeder.github.io/weather-dashboard/"
              className="btn btn-style"
              target="_blank"
              rel="noreferrer"
            >
              Deployed Project
            </a>
            <a
              href="https://github.com/kpegeder/weather-dashboard"
              className="btn btn-style"
              target="_blank"
              rel="noreferrer"
            >
              Project Code
            </a>
          </div>
        </div>

        <div className="card col-md-4 cardStyle">
          <img
            className="card-img-top img-size"
            src={Password}
            alt="Password Generator"
          />
          <div className="card-body">
            <h5 className="card-title centerProject">Password Generator</h5>
            <a
              href="https://kpegeder.github.io/password-generator/"
              className="btn btn-style"
              target="_blank"
              rel="noreferrer"
            >
              Deployed Project
            </a>
            <a
              href="https://github.com/kpegeder/password-generator"
              className="btn btn-style"
              target="_blank"
              rel="noreferrer"
            >
              Project Code
            </a>
          </div>
        </div>

        <div className="card col-md-4 cardStyle">
          <img
            className="card-img-top img-size"
            src={Day}
            alt="Work day planner"
          />
          <div className="card-body">
            <h5 className="card-title centerProject">Day Planner</h5>
            <a
              href="https://kpegeder.github.io/day-planner/"
              className="btn btn-style"
              target="_blank"
              rel="noreferrer"
            >
              Deployed Project
            </a>
            <a
              href="https://github.com/kpegeder/day-planner"
              className="btn btn-style"
              target="_blank"
              rel="noreferrer"
            >
              Project Code
            </a>
          </div>
        </div>

        <div className="card col-md-4 cardStyle">
          <img
            className="card-img-top img-size"
            src={Code}
            alt="Code quiz start screen"
          />
          <div className="card-body">
            <h5 className="card-title centerProject">Code Quiz</h5>
            <a
              href="https://kpegeder.github.io/code-quiz/"
              className="btn btn-style"
              target="_blank"
              rel="noreferrer"
            >
              Deployed Project
            </a>
            <a
              href="https://github.com/kpegeder/code-quiz"
              className="btn btn-style"
              target="_blank"
              rel="noreferrer"
            >
              Project Code
            </a>
          </div>
        </div>

        <div className="card col-md-4 cardStyle">
          <img
            className="card-img-top img-size"
            src={Note}
            alt="Note Taker welcome screen"
          />
          <div className="card-body">
            <h5 className="card-title centerProject">Note Taker</h5>
            <a
              href="https://note-taker-kp1.herokuapp.com"
              className="btn btn-style"
              target="_blank"
              rel="noreferrer"
            >
              Deployed Project
            </a>
            <a
              href="https://github.com/kpegeder/note-taker"
              className="btn btn-style"
              target="_blank"
              rel="noreferrer"
            >
              Project Code
            </a>
          </div>
        </div>

        <div className="card col-md-4 cardStyle">
          <img className="card-img-top img-size" src={Burger} alt="Burger" />
          <div className="card-body">
            <h5 className="card-title centerProject">Burger</h5>
            <a
              href="http://kp-burger.herokuapp.com/"
              className="btn btn-style"
              target="_blank"
              rel="noreferrer"
            >
              Deployed Project
            </a>
            <a
              href="https://github.com/kpegeder/burger"
              className="btn btn-style"
              target="_blank"
              rel="noreferrer"
            >
              Project Code
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Projects;
