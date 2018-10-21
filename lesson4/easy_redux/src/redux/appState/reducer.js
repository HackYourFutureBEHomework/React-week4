const initialState = {
    list: []
}

export default (state = initialState, action) => {
    const newState = Object.assign({}, state)
    switch (action.type) {
        
        case 'APPSTATE_ADD_ITEM':
            newState.list = [...newState.list, action.item]
            return newState
        case 'APPSTATE_DELETE_ITEM':
            newState.list = newState.list.filter((item, index) => index !== action.index)
            return newState
        default:
            return state
    }
}