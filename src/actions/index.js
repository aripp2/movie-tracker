export const addMovies = movies => ({
	type: 'ADD_MOVIES',
	movies
});

export const throwError = errorMsg => ({
  type: 'THROW_ERROR',
  errorMsg
})