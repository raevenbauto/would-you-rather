import {_getUsers} from "../utilities/_DATA";

function setAuthedUser(userId) {
    return {
        userId,
        type: SET_AUTH_USER
    };
}

export const SET_AUTH_USER = "SET_AUTH_USER";

export default function handleLogin(userId){
    return (dispatch) => {
        _getUsers()
            .then(users => {
                dispatch(setAuthedUser(userId))
            })
    }
}


