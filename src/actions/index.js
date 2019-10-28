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

export const toggleFav = id => ({
	type: 'TOGGLE_FAV',
	id
})

export const setFavs = favs => ({
  type: 'SET_FAVS',
  favs
})

export const updateFavs = favs => ({
  type: 'UPDATE_FAVS',
  favs
})

export const clearFavs = () => ({
  type: 'CLEAR_FAVS',
})