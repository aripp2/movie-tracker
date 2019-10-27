import React, { Component } from 'react';
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { fetchMovies } from '../../utils/apiCalls';
import { addMovies, throwError } from '../../actions';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import CreateAccount from '../CreateAccount/CreateAccount'
import LoginForm from '../LoginForm/LoginForm';
import Header from '../Header/Header';
import './App.scss';
// import PropTypes from 'prop-types';

class App extends Component {

  async componentDidMount() {
    const { addMovies, throwError } = this.props
    try {
      const movies = await fetchMovies();
      addMovies(movies)
    } catch({ message }) {
      throwError(message)
    }
  } 

  render() {
    const { errorMsg, user } = this.props
    console.log("user in app render", user)
    // console.log('error message', errorMsg)
    return (
      <div className="App">
        <Header />
          {!errorMsg && <h2>{errorMsg}</h2>}
          <Route exact path='/' render={() => <MoviesContainer />}/>
          <Route exact path='/login' 
            render={() => <LoginForm />} />
          <Route exact path='/createaccount' 
            render={() => <CreateAccount />} />
      </div>
    );
  }
}

const mapStateToProps = ({ errorMsg, user }) => ({
  errorMsg,
  user
})

const mapDispatchToProps = dispatch => ({
  addMovies: movies => dispatch(addMovies(movies)),
  throwError: errorMsg => dispatch(throwError(errorMsg)) 
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
