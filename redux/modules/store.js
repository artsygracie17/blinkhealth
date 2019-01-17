import { createStore } from 'redux'

/* Action Types */
const UPDATE_SEARCHTERM = 'home: update search term'


export const initialState = {
    searchTerm: '',
    users: [],
    currentUser: {}
}

export function updateSearchTerm (searchTerm) {
    return {
        type: UPDATE_SEARCHTERM,
        payload: searchTerm
    }
}

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case UPDATE_SEARCHTERM:
            return {
                ...state,
                searchTerm: action.payload
            }
        default:
            return state
    }   
}

export const makeStore = (initialState) => {
    return createStore(reducer, initialState)
}