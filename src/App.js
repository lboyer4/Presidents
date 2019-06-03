import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export class App extends Component {
  constructor() {
    super()
    this.state = {
      presidents: [],
      error: ''
    }
  }

  componentDidMount = () => {
    fetch('http://localhost:3001/api/v1/presidents')
    .then(response => response.json())
    .then(results => console.log(results))
  }

  render(){
    return(
      <div>
      </div>

    )
  }
}

export default App;
