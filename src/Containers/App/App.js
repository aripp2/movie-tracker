import React, { Component } from 'react';
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
// import PropTypes from 'prop-types';
import { fetchMovies } from '../../utils/apiCalls';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import './App.scss';
import LoginForm from '../LoginForm/LoginForm';
import { addMovies } from '../../actions';
import CreateAccount from '../CreateAccount/CreateAccount'


class App extends Component {
  constructor() {
    super();
    this.state = {
      error: ''
    }
  }

  async componentDidMount() {
    const { addMovies } = this.props
    try {
      const movies = await fetchMovies();
      addMovies(movies)
    } catch({ message }) {
      this.setState({ error: message})
    }
  } 

  render() {
    // const { movies } = this.props
    return (
      <div className="App">
        <header className="App-header">Movie Tracker</header>
        <Redirect from="/" to="/login" />
          <Route exact path='/login' 
            render={() => <LoginForm />} />
            <Route exact path='/createaccount' 
            render={() => <CreateAccount />} />
          <Route exact path='/' render={() => <MoviesContainer />}/>
        
      </div>
    );
  }
}

// const mapStateToProps = ({ movies }) => ({
//   movies
// })

const mapDispatchToProps = dispatch => (
  bindActionCreators({ addMovies }, dispatch)
)

export default connect(null, mapDispatchToProps)(App);
