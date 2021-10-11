import * as types from './actionTypes';
const initialState = {
    isPending: false,
    data: [],
    error: ''
}

export default function reducer(state = initialState, action){
    const {type, payload} = action;

    switch (type) {
        case types.FETCH_USERINFO:
            return{
                ...state,
                isPending: true,
            }
        case types.SUCCESS_USERINFO:
            return{
                ...state,
                isPending: false,
                data: payload
            }
        case types.FAIL_USERINFO:
            return{
                ...state,
                isPending: false,
                error: payload
            }

        default:
            return state
    }
}