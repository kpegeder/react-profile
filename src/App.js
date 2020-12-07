import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
// import Nav from "./components/Nav";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        {/* <Nav /> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
