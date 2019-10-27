export const favorites = (state=[], action) => {
  switch (action.type) {
    case 'SET_FAVS': 
      return action.favs.favorites
    default:
      return state;
  }
}