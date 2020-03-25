import {_getUsers, generateUID} from "../utilities/_DATA";
import {setUsers} from "./users";
import {hideLoading, showLoading} from "./loading";

export const LOGIN_AUTH_USER = "LOGIN_AUTH_USER";
export const LOGOUT_AUTH_USER = "LOGOUT_AUTH_USER";
export const UPDATE_AUTH_USER = "UPDATE_AUTH_USER";

export function loginAuthUser(user){
    return {
        user,
        type: LOGIN_AUTH_USER
    }
}

export function logoutAuthUser(){
    return{
        type: LOGOUT_AUTH_USER
    }
}

export function updateAuthedUser({authedUser, qid, answer}){
    return {
        authedUser,
        qid,
        answer,
        type: UPDATE_AUTH_USER
    }
}


export function handleLogin(user, cb) {
    return (dispatch) => {
        const loadingId = generateUID();
        dispatch(showLoading(loadingId));
        _getUsers().then(users => {
            dispatch(setUsers(users));

            if (users[user]) {
                dispatch(loginAuthUser(users[user]));
            } else
                cb(true);
            dispatch(hideLoading(loadingId));
        });
    }
}




