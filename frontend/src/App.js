import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home, About, Landing } from "./pages/index";

class App extends Component {
  goto = link => this.props.history.push(link);
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Landing} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
