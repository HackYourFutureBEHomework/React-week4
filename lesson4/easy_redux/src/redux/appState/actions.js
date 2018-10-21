export const addItem = item => ({
    type: 'APPSTATE_ADD_ITEM',
    item
})

export const deleteItem = index => ({
    type: 'APPSTATE_DELETE_ITEM',
    index
})