export const errorMsg = (state='', action) => {
  switch (action.type) {
    case 'THROW_ERROR':
      return action.errorMsg
    default:
      return state;
  }
}