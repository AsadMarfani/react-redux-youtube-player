import React, { Component } from 'react'
import logo from '../images/logo.svg';
import '../styles/App.css';
import SearchBar from './SearchBar';


class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className = "container">
        <SearchBar />
      </div>
    );
  } 
}
export default App;
