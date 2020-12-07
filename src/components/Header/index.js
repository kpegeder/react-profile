import React from "react";
import "./style.css";

function Header() {
  return (
    <div>
      <div className="nav-intro-section">
        <div className="name">
          <h1>Hi. I'm Kalen.</h1>
          <h2>I'm a developer.</h2>
        </div>
        <ul className="links">
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/Portfolio">Portfolio</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
