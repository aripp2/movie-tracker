import React, { Component } from 'react';
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchMovies, getFavorites, addFavorite, removeFavorite } from '../../utils/apiCalls';
import { addMovies, throwError, setFavs } from '../../actions';
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

  refreshFavs = async (movie) => {
    const { throwError, setFavs, user } = this.props;
    try {
    if (movie.isFavorite) {
      await removeFavorite(user.id, movie.id)
    } else {
      await addFavorite(user.id, movie)
    }
    const updatedFavs = await getFavorites(user.id)
    console.log('updatedFavs in app', updatedFavs)
    setFavs(updatedFavs)
    } catch ({ message }) {
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
          {errorMsg && <h2>{errorMsg}</h2>}
          <Route exact path='/' render={() => <MoviesContainer refreshFavs={this.refreshFavs}/>}/>
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
  throwError: errorMsg => dispatch(throwError(errorMsg)),
  setFavs: favs => dispatch(setFavs(favs)) 
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
