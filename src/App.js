import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to CreoKorea Inc.</h1>
          <h1 className="App-tagline">We are making something AWESOME!</h1>
        </header>
        <footer className="App-footer">
          <p className="App-photoby">Photo by <a href="https://unsplash.com">Unsplash.com</a></p>
          <p className="App-copyright">Copyright &copy; 2018 Creokorea inc.</p>
        </footer>
      </div>
    );
  }
}

export default App;
