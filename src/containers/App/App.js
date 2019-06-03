import React, { Component } from 'react';

import './App.css';
import { setPresidents } from '../../actions';
import { connect } from 'react-redux';

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
    .then(presidents=> this.props.setPresidents(presidents))
    .catch(error => this.setState({ error }))
    
  }



  render(){
    return(
      <div>
      </div>

    )
  }
}

export const mapDispatchToProps = (dispatch) => ({
  setPresidents: (presidents)=> dispatch(setPresidents(presidents))
})

export default connect(null, mapDispatchToProps)(App)
