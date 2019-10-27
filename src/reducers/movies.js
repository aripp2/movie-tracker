export const movies = (state=[], action) => {
  switch (action.type) {
    case 'ADD_MOVIES':
      return action.movies
    case 'FAV_MOVIE':
      return state.map(movie => {
        if (movie.id === action.id) {
          return {...movie, isFavorite: !movie.isFavorite}
        } else {
          return movie
        }
      })
    case 'UPDATE_FAVS':
    // console.log('in reducer action', state)
      // return state.map(movie => {
      //   // console.log('in reducer movie', movie)
      //   // console.log('in reducer action', action.favs.favorites)
      //   action.favs.favorites.forEach(fav => {
      //     if(fav.movie_id === movie.id) {
      //       movie.isFavorite = true;
      //     }
      //     return movie;
      //   })
      // })
    default:
      return state;
  }
}