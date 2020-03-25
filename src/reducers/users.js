import {QUESTION_USER_UPDATE, REMOVE_USERS, SET_USERS} from "../action/users";

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

        default:
            return state;
    }
}

