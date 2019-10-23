import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { fetchMovies } from '../../utils/apiCalls';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import './App.scss';

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
    console.log(movies)
    return (
      <div className="App">
        <header className="App-header">Movie Tracker</header>
        <MoviesContainer movies={movies}/>
      </div>
    );
  }
}

export default App;
