import React, { Component } from 'react'
import logo from '../images/logo.svg';
import '../styles/App.css';


class App extends Component {
  constructor() {
    super();
  }
  render() {
    const API_KEY = 'AIzaSyAaa8f36PNZNIuud2y6vuhJOo3Xb9Y9hqw';
    return (
      <div className = "container">
        <h1>React-Redux Starter Kit</h1>
      </div>
    );
  } 
}
export default App;
