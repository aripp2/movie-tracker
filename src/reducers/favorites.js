export const favorites = (state=[], action) => {
  switch (action.type) {
    case 'SET_FAVS': 
      return action.favs.favorites.map(movie => {
        movie.id = movie.movie_id
        return {...movie, isFavorite: true}
      })
    case 'CLEAR_FAVS':
        return []
    default:
      return state;
  }
}