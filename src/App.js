import React from "react";
import About from "./component/About";
import Home from "./component/Home";
import Logo from "./component/Logo";
import Navbar from "./component/Navbar";
import { Switch, Route } from "react-router-dom";
import Footer from "./component/Footer";

function App() {
  return (
    <React.Fragment className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;
