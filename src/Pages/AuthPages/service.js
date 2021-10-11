import {
    fetchUserInfo,
    failUserInfo,
    successUserInfo
} from './store/actionCreators';
import HTTP from '../../shared/util/http'

export function postUserLogin(email, password){
    return function (dispatch){
        dispatch(fetchUserInfo())
        const data = {email, password}
        return new Promise((resolve, reject) => {
            HTTP.post('/api/auth/login', data)
                .then(function (res) {
                    // handle success
                    localStorage.setItem('TOKEN', res.data.token);                    
                    resolve();
                    dispatch(successUserInfo(res))
                })
                .catch(function (error) {
                    // handle error
                    dispatch(failUserInfo(error))
                    reject(error);
                })
                .then(function () {
                    // always executed
                });
        });
        
    }
}

export function postUserRegister(data){
    return function (dispatch){
        return HTTP.post('/api/auth/register', data)
            .then(function (res) {
                // handle success
                dispatch(successUserInfo(res.data))
            })
            .catch(function (error) {
                // handle error
                dispatch(failUserInfo(error))
            })
            .then(function () {
                // always executed
            });
    }
}