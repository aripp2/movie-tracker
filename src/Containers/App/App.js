import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { fetchMovies } from '../../utils/apiCalls';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import './App.scss';
import LoginForm from '../LoginForm/LoginForm';
import { addMovies } from '../../actions';

class App extends Component {
  constructor() {
    super();
    this.state = {
      error: ''
    }
  }

  async componentDidMount() {
    try {
      const movies = await fetchMovies();
      addMovies(movies)
      console.log('in mount', movies)
      // this.setState({ movies })
    } catch({ message }) {
      this.setState({ error: message})
    }
  } 

  render() {
    const { movies } = this.props
    console.log('in render', movies)
    return (
      <div className="App">
        <header className="App-header">Movie Tracker</header>
        <Switch>
          <Route exact path='/login' 
            render={() => <LoginForm />} />
          <Route exact path='/' render={() => <MoviesContainer movies={movies}/>}/>
        </Switch>
        
      </div>
    );
  }
}

const mapStateToProps = ({ movies }) => ({
  movies
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({ addMovies }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(App);
