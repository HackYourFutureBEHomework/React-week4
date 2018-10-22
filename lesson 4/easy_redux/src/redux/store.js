import rootReducer from './combinedReducers'
import { createStore } from 'redux'

export default createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  // !important if you like to use redux DevTools
)