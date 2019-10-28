export const favorites = (state=[], action) => {
  switch (action.type) {
    case 'SET_FAVS': 
      return action.favs.favorites
    case 'CLEAR_FAVS':
        return []
    default:
      return state;
  }
}