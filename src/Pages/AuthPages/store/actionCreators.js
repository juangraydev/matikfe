import * as types from "./actionTypes";

export function fetchUserInfo(){
    return {
        type: types.FETCH_USERINFO,
    }
};
export function successUserInfo(data){
    return {
        type: types.SUCCESS_USERINFO,
        payload: data
    }
};
export function failUserInfo(error){
    return {
        type: types.FAIL_USERINFO,
        payload: error
    }
};