import { createStore } from 'redux'

/* Action Types */
const UPDATE_SEARCHTERM = 'home: update search term'


export const initialState = {
    searchTerm: '',
    users: [],
    currentUser: {}
}

export function updateSearchTerm (searchTerm) {
    console.log('s: ', searchTerm)
    return {
        type: UPDATE_SEARCHTERM,
        payload: searchTerm
    }
}

export const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case UPDATE_SEARCHTERM:
            console.log('in reducer: ', action.payload)
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