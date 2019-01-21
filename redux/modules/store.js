import { createStore } from 'redux'

/* Action Types */
const UPDATE_SEARCHTERM = 'home: update search term'
const POPULATE_USERS = 'home: populate users'
const POPULATE_CURRENT_USER = 'home: populate current user'
const POPULATE_REPOS = 'current user: populate repos'


export const initialState = {
    searchTerm: '',
    users: [],
    currentUser: {},
    repos: []
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

export function populateCurrentUser (user) {
    return {
        type: POPULATE_CURRENT_USER,
        payload: user
    }
} 

export function populateRepos (repos) {
    return {
        type: POPULATE_REPOS,
        payload: repos
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
        case POPULATE_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        case POPULATE_REPOS:
            return {
                ...state,
                repos: action.payload
            }
        default:
            return state
    }   
}

export const makeStore = (initialState) => {
    return createStore(reducer, initialState)
}