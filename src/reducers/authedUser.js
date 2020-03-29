import {LOGIN_AUTH_USER, LOGOUT_AUTH_USER, UPDATE_AUTH_USER, UPDATE_AUTH_USER_QUESTION} from "../action/authedUser";

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

        case UPDATE_AUTH_USER_QUESTION:
            return {
                ...state,
                questions: state.questions.concat([action.qid])
            };

        default:
            return state;
    }
}