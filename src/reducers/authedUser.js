import {LOGIN_AUTH_USER, LOGOUT_AUTH_USER, UPDATE_AUTH_USER} from "../action/authedUser";

export default function authedUser(state = {}, action){
    switch (action.type){
        case LOGIN_AUTH_USER:
            return action.user;

        case LOGOUT_AUTH_USER:
            return {};

        case UPDATE_AUTH_USER:
            return {
                ...state,
                answers: {
                    ...state.answers,
                    [action.qid]: action.answer
                }
            };

        default:
            return state;
    }
}