import React, { Component } from "react";
import "./App.css";
import Products from "./Components/Products.js";
import Footer from "./Components/Footer.js";
import Heading from './Components/Heading.js'

class App extends Component {
  render() {
    return (
      <div>
        <Heading />
        <Products />
        <Footer />
      </div>
    );
  }
}

export default App;
