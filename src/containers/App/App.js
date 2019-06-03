
import React, { Component } from 'react';

import './App.css';
import { setPresidents, setError, setLoading } from '../../actions';
import { connect } from 'react-redux';
import { Header } from './../../components/Header/Header.js';
import CardHolder from '../CardHolder/CardHolder.js';

export class App extends Component {
  constructor() {
    super()
    this.state = {
      presidents: [],
      loading: 'isLoading..',
      error: ''
    }
  }

  componentDidMount = () => {
    fetch('http://localhost:3001/api/v1/presidents')
    .then(response => response.json())
    .then(presidents=> this.makeThePresidents(presidents))
    .catch(error => alert('there is a problem', error))

  }

  makeThePresidents = (presidents) => {
      this.setState( { presidents })
      this.props.setPresidents(presidents)
  }

  render(){
    const display = this.state.presidents.length ? <CardHolder /> : this.state.loading
    return(
      <div>
        <Header />
        {display}
      </div>

    )
  }
}

export const mapDispatchToProps = (dispatch) => ({
  setPresidents: (presidents)=> dispatch(setPresidents(presidents)),
})

export default connect(null, mapDispatchToProps)(App)
