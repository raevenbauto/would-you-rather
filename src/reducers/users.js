import {QUESTION_USER_UPDATE, REMOVE_USERS, SET_USERS, UPDATE_USER_NEW_QUESTION} from "../action/users";

export default function users(state = [], action){
    switch(action.type){
        case SET_USERS:
            return action.users;

        case REMOVE_USERS:
            return {};

        case QUESTION_USER_UPDATE:
            return {
                ...state,
                [action.authedUser]:{
                    ...state[action.authedUser],
                    answers: {
                        ...state[action.authedUser].answers,
                        [action.qid]: action.answer
                    }
                }
            };

        case UPDATE_USER_NEW_QUESTION:
            return {
                ...state,
                [action.userId]: {
                    ...state[action.userId],
                    questions: state[action.userId].questions.concat([action.qid])
                }
            };

        default:
            return state;
    }
}

