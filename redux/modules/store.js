import { createStore } from 'redux'

/* Action Types */
const UPDATE_SEARCHTERM = 'home: update search term'
const POPULATE_USERS = 'home: populate users'


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

export function populateUsers (users) {
    return {
        type: POPULATE_USERS,
        payload: users
    }
}

export const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case UPDATE_SEARCHTERM:
            return {
                ...state,
                searchTerm: action.payload
            }
        case POPULATE_USERS:
            return {
                ...state,
                users: action.payload
            }
        default:
            return state
    }   
}

export const makeStore = (initialState) => {
    return createStore(reducer, initialState)
}