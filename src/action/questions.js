import {_getQuestions, _saveQuestion, _saveQuestionAnswer, generateUID} from "../utilities/_DATA";
import {hideLoading, showLoading} from "./loading";
import {updateUser, updateUserNewQuestions} from "./users";
import {updateAuthedUser, updateAuthedUserQuestions} from "./authedUser";

export const SET_QUESTIONS = "SET_QUESTIONS";
export const UPDATE_QUESTION = "UPDATE_QUESTION";
export const ADD_QUESTION = "ADD_QUESTION";
export const REMOVE_QUESTIONS = "REMOVE_QUESTIONS";

export function setQuestions(questions){
    return{
        questions,
        type: SET_QUESTIONS
    }
}

export function updateQuestion({authedUser, qid, answer}){
    return {
        authedUser,
        qid,
        answer,
        type: UPDATE_QUESTION
    }
}

function addQuestion(question){
    return {
        question,
        type: ADD_QUESTION
    }
}

export function removeQuestions(){
    return{
        type: REMOVE_QUESTIONS
    }
}

export function handleAddQuestion(question, cb){
    return (dispatch) => {
        const loadingId = generateUID();
        dispatch(showLoading(loadingId));

        _saveQuestion(question)
            .then((questionResult) => {
                dispatch(addQuestion(questionResult));
                dispatch(updateUserNewQuestions(questionResult.id, questionResult.author));
                dispatch(updateAuthedUserQuestions(questionResult.id));
                dispatch(hideLoading(loadingId));
                cb();
            });

    };
}

export default function handleGetQuestions () {
    return (dispatch) => {
        const loadingId = generateUID();

        dispatch(showLoading(loadingId));
        _getQuestions()
            .then((questions) => {
                dispatch(setQuestions(questions));
                dispatch(hideLoading(loadingId));
            })
    }
}

export function handleUpdateQuestionAnswer({authedUser, qid, answer}, cb){
    return (dispatch) => {
        const loadingId = generateUID();
        dispatch(showLoading(loadingId));

        _saveQuestionAnswer({authedUser, qid, answer})
            .then(() => {
                dispatch(updateQuestion({authedUser, qid, answer}));
                dispatch(updateUser({authedUser, qid, answer}));
                dispatch(updateAuthedUser({authedUser, qid, answer}));
                dispatch(hideLoading(loadingId));
                cb();
            })
    }
}
