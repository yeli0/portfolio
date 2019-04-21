import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Loader from './components/Loader';
import AppRouter from './components/AppRouter';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaderValue : true
    }
  }

  componentDidMount() {
    setTimeout( () => { this.setState({ loaderValue : false }) }, 1300);
  }

  render() {
    const {
      loaderValue
    } = this.state;
    return (
      <>
        {
          loaderValue ? 
          <Loader /> : 
          <Router>
            <AppRouter />
          </Router>
        }
      </>
    );
  }
}

export default App;
