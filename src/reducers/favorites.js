export const favorites = (state=[], action) => {
  switch (action.type) {
    case 'SET_FAVS': 
      return action.favs.favorites.map(movie => {
        return {...movie, isFavorite: true}
      })
    case 'CLEAR_FAVS':
        return []
    default:
      return state;
  }
}