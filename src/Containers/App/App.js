import React, { Component } from 'react';
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchMovies, getFavorites, addFavorite, removeFavorite } from '../../utils/apiCalls';
import { addMovies, throwError, setFavs } from '../../actions';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import CardDetails from '../../components/CardDetails/CardDetails';
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
        setFavs(updatedFavs)
      } catch ({ message }) {
        throwError(message)
      }
  } 

  render() {
    const { errorMsg, user } = this.props
    console.log("user in app render", user)
    return (
      <div className="App">
        <Header />
          {errorMsg && <h2>{errorMsg}</h2>}
          <Route exact path='/' render={() => <MoviesContainer viewAll={true} refreshFavs={this.refreshFavs}/>}/>
          <Route exact path='/login' 
            render={() => <LoginForm />} />
          <Route exact path='/createaccount' 
            render={() => <CreateAccount />} />
          <Route exact path='/favorites' render={() => <MoviesContainer viewAll={false} refreshFavs={this.refreshFavs}/>}/>
          <Route
            path="/movies/:id"
            render={({ match }) => {
              let foundMovie = this.props.movies.find(movie => {
                return parseInt(movie.id) == match.params.id;
              });
              return (
                <CardDetails
                  key={foundMovie.id}
                  movie={foundMovie}
                  refreshFavs={this.refreshFavs}
              />
            );
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ errorMsg, user, movies }) => ({
  errorMsg,
  user,
  movies
})

const mapDispatchToProps = dispatch => ({
  addMovies: movies => dispatch(addMovies(movies)),
  throwError: errorMsg => dispatch(throwError(errorMsg)),
  setFavs: favs => dispatch(setFavs(favs)) 
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
