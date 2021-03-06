//import actions
import { FETCH_IMAGE_LOADING, FETCH_IMAGE_SUCCESS, FETCH_IMAGE_FAIL } from './../actions'

//initial state
const initialState = {
    image: null,
    isFetching: false,
    error: ''
}

//export reducer
export const reducer = (state = initialState, action) => {
    //switch cases
    switch (action.type) {
        case (FETCH_IMAGE_LOADING):
            return ({
                ...state,
                isFetching: true
            })
        case (FETCH_IMAGE_SUCCESS):
            return ({
                ...state,
                image: action.payload,
                isFetching: false
            })
        case (FETCH_IMAGE_FAIL):
            return ({
                ...state,
                error: action.payload,
                isFetching: false
            })
        default:
            return state;
    }
}
