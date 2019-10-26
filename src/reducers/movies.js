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
    default:
      return state;
  }
}