import React, { Component } from 'react';
import Flowercard from "./components/Flowercard"
import FlowerFavorites from "./components/FlowerFavorites"

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1
        className = "h1"
        >Flower Finder</h1>
        <h3>Below is a library of interesting and rare flowers. Click on the flower's image to read more about each flower.</h3>
        <Flowercard/>
      </div>
    );
  }
}

export default App;
