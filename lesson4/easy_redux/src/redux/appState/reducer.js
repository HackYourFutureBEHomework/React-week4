const initialState = {
    text: ''
}

export default (state = initialState, action) => {
    const newState = Object.assign({}, state)
    switch (action.type) {
        
            case 'APPSTATE_SET_TEXT': 
                newState.text = action.text
            return newState

        default:
            return state
    }
}