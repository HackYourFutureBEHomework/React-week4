export const addMovies = movieArray => ({
    type: 'ADD_MOVIES',
    movieArray
})

export const filterMovies = filter => ({
    type: 'FILTER_MOVIES',
    filter
})