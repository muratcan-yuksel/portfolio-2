import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import "./App.css";
import Header from "./components/Header";

export class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Header />
      </div>
    );
  }
}

export default App;
