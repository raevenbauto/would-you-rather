import {_getQuestions, _getUsers, generateUID} from "../utilities/_DATA";
import {setUsers} from "./users";
import {hideLoading, showLoading} from "./loading";
import handleGetQuestions, {setQuestions} from "./questions";

export const LOGIN_AUTH_USER = "LOGIN_AUTH_USER";
export const LOGOUT_AUTH_USER = "LOGOUT_AUTH_USER";
export const UPDATE_AUTH_USER = "UPDATE_AUTH_USER";
export const UPDATE_AUTH_USER_QUESTION = "UPDATE_AUTH_USER_QUESTION";

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

export function updateAuthedUserQuestions(qid){
    return {
        qid,
        type: UPDATE_AUTH_USER_QUESTION
    }
}


export function handleLogin(user, cb) {
    return (dispatch) => {
        const loadingId = generateUID();
        dispatch(showLoading(loadingId));

        Promise.all([_getUsers(), _getQuestions()])
            .then((values) => {
                const users = values[0];
                const questions = values[1];

                if (users[user]) {
                    dispatch(setUsers(users));
                    dispatch(setQuestions(questions));
                    dispatch(loginAuthUser(users[user]));
                } else
                    cb(true);

                dispatch(hideLoading(loadingId));
            });
    }
}




