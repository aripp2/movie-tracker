export const addMovies = movies => ({
	type: 'ADD_MOVIES',
	movies
});

export const throwError = errorMsg => ({
  type: 'THROW_ERROR',
  errorMsg
})

export const setUser = user => ({
	type: 'SET_USER',
	user
})

export const toggleFavorite = id => ({
	type: 'FAV_MOVIE',
	id
})

export const getFavs = favs => ({
  type: 'GET_FAVS',
  favs
})
