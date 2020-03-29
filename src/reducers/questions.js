import {ADD_QUESTION, REMOVE_QUESTIONS, SET_QUESTIONS, UPDATE_QUESTION} from "../action/questions";

export default function questions(state = {}, action){
    switch(action.type){
        case SET_QUESTIONS:
            return action.questions;

        case UPDATE_QUESTION:
            return {
                ...state,
                [action.qid]: {
                    ...state[action.qid],
                    [action.answer]: {
                        ...state[action.qid][action.answer],
                        votes: state[action.qid][action.answer].votes.concat(action.authedUser)
                    }
                }
            };

        case ADD_QUESTION:
            return {
                ...state,
                [action.question.id]: action.question
            };

        case REMOVE_QUESTIONS:
            return {};

        default:
            return state;
    }
}