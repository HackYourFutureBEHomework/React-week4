export const addMovies = movieArray => ({
    type: 'ADD_MOVIES',
    movieArray
})

export const filterMovies = movieFilter => ({
    type: 'FILTER_MOVIES',
    movieFilter
})

export const addGenre = genre => ({
    type: 'ADD_FILTER_GENRE',
    genre
})

export const setSearchTitle = searchTitle => ({
    type: 'SET_SEARCH_TITLE',
    searchTitle
})