export const favorites = (state=[], action) => {
  switch (action.type) {
    case 'GET_FAVS': 
      return action.favs
    default:
      return state;
  }
}