import React, { Component } from 'react';
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
// import PropTypes from 'prop-types';
import { fetchMovies } from '../../utils/apiCalls';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import './App.scss';
import LoginForm from '../LoginForm/LoginForm';
import { addMovies, throwError } from '../../actions';

import CreateAccount from '../CreateAccount/CreateAccount'
import Header from '../Header/Header';

class App extends Component {

  async componentDidMount() {
    const { addMovies } = this.props
    try {
      const movies = await fetchMovies();
      addMovies(movies)
    } catch({ message }) {
      throwError(message)
    }
  } 

  render() {
    const { errorMsg } = this.props
    console.log('error message', errorMsg)
    return (
      <div className="App">
        <Header />
          {!errorMsg && <Route exact path='/' render={() => <MoviesContainer />} />}
          
          <Route exact path='/login' 
            render={() => <LoginForm />} />
          <Route exact path='/createaccount' 
            render={() => <CreateAccount />} />
        
      </div>
    );
  }
}

const mapStateToProps = ({ errorMsg }) => ({
  errorMsg
})

const mapDispatchToProps = dispatch => ({
  addMovies: movies => dispatch(addMovies(movies)),
  throwError: errorMsg => dispatch(throwError(errorMsg)) 
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
