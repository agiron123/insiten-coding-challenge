import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { CreateTargetPage } from "./CreateTargetPage";
import { TargetList } from "./TargetList";
import { AboutPage } from "./AboutPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Router>
            <div>
              <nav>
                <ul>
                  <li>
                    <Link to="/view/">View Targets</Link>
                  </li>
                  <li>
                    <Link to="/create/">Add Target</Link>
                  </li>

                  <li>
                    <Link to="/about/">About this project.</Link>
                  </li>
                </ul>
              </nav>

              <Route path="/view/" component={TargetList} />
              <Route path="/create/" component={CreateTargetPage} />
              <Route path="/about/" component={AboutPage} />
            </div>
          </Router>
        </header>
      </div>
    );
  }
}

export default App;
