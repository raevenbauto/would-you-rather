import {_getUsers, generateUID} from "../utilities/_DATA";
import {showLoading} from "./loading";

export const SET_USERS = "SET_USERS";
export const REMOVE_USERS = "REMOVE_USERS";
export const QUESTION_USER_UPDATE = "QUESTION_USER_UPDATE";

export function setUsers(users){
    return {
        users,
        type: SET_USERS
    }
}

export function removeUsers(){
    return{
        type: REMOVE_USERS
    }
}

export function updateUser({authedUser, qid, answer}){
    return {
        authedUser,
        qid,
        answer,
        type: QUESTION_USER_UPDATE
    }
}

export function handleGetUsers(){
    return (dispatch) => {
        const loadingId = generateUID();

        dispatch(showLoading(loadingId));

        _getUsers().then((users) => {
            dispatch(setUsers(users));
        })
    }
}
