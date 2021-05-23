import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Navbar from "./components/Navbar";
import "./App.css";
import Header from "./components/Header";

export class App extends Component {
  render() {
    return (
      <div>
        <Particles
          params={{
            particles: {
              number: {
                value: 30,
                density: {
                  enable: true,
                  value_area: 900,
                },
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 6,
                  color: "#f9ab00",
                },
              },
            },
          }}
        />
        <Navbar />
        <Header />
      </div>
    );
  }
}

export default App;
