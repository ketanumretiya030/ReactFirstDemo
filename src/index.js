import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import home from "/demo/home";
import about from "/demo/about";
import contact from "/demo/contact";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello Ketan first Demo</h1>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={home} />
          <Route exact path="/about" component={about} />
          <Route exact path="/contact" component={contact} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
