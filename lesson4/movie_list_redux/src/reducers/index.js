import { combineReducers } from 'redux'

const movies = (state = [], action) => {
    switch (action.type) {
        case 'ADD_MOVIES':
            return [...action.movieArray]
        default:
            return state
    }
}

const filterState = {
    genres: []
}

const filter = (state = filterState, action) => {
    switch (action.type) {
        case 'FILTER_MOVIES':
            return action.filter
        default:
            return state
    }
}

export default combineReducers({
   movies,
   filter 
})