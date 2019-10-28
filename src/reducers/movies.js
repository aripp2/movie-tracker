export const movies = (state=[], action) => {
  switch (action.type) {
    case 'ADD_MOVIES':
      return action.movies
    case 'TOGGLE_FAV':
      return state.map(movie => {
        if (movie.id === action.id) {
          return {...movie, isFavorite: !movie.isFavorite}
        } else {
          return movie
        }
      })
    case 'UPDATE_FAVS':
      return state.map(movie => {
        action.favs.favorites.forEach(fav => {
          if(fav.movie_id === movie.id) {
            movie.isFavorite = true;
          }
        })
          return movie;
      })
    default:
      return state;
  }
}