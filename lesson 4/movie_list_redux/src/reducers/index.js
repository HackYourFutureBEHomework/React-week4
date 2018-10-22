import { combineReducers } from 'redux'

const movies = (state = [], action) => {
    switch (action.type) {
        case 'ADD_MOVIES':
            return action.movieArray
        default:
            return state
    }
}

const filterState = {
    genres: [],
    searchTitle: ''
}

const movieFilter = (state = filterState, action) => {
    const newState = Object.assign({}, state)
    switch (action.type) {
        case 'FILTER_MOVIES':
            return action.movieFilter
        case 'ADD_FILTER_GENRE':
            newState.genres = [...state.genres, action.genre]
            return newState
        case 'SET_SEARCH_TITLE':
            newState.searchTitle = action.searchTitle
            return newState
        default:
            return state
    }
}

export default combineReducers({
   movies,
   movieFilter 
})