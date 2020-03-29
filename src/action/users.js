import {_getUsers, generateUID} from "../utilities/_DATA";
import {showLoading} from "./loading";
import {UPDATE_AUTH_USER_QUESTION} from "./authedUser";

export const SET_USERS = "SET_USERS";
export const REMOVE_USERS = "REMOVE_USERS";
export const QUESTION_USER_UPDATE = "QUESTION_USER_UPDATE";
export const UPDATE_USER_NEW_QUESTION = "UPDATE_USER_NEW_QUESTION";

export function updateUserNewQuestions(qid, userId){
    return {
        qid,
        userId,
        type: UPDATE_USER_NEW_QUESTION
    }
}

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
