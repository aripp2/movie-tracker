import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { fetchMovies } from '../../utils/apiCalls';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import './App.scss';
import LoginForm from '../LoginForm/LoginForm'

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      error: ''
    }
  }

  async componentDidMount() {
    try {
      const movies = await fetchMovies();
      this.setState({ movies })
    } catch({ message }) {
      this.setState({ error: message})
    }
  } 

  render() {
    const { movies } = this.state
    return (
      <div className="App">
        <Switch>
          <Route exact path='/login' 
            render={() => <LoginForm />} />
        </Switch>
        <header className="App-header">Movie Tracker</header>
        
        <MoviesContainer movies={movies}/>
      </div>
    );
  }
}

export default App;
