import React, { Component } from 'react';
import Movies from "./components/movies"
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <main className="container position-absolute">
        <Movies />
      </main>
    );
  }
}

export default App;
