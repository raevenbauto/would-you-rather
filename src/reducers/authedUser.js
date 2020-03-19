import {SET_AUTH_USER} from "../action/authedUser";

export default function authedUser(state = "", action){
    switch (action.type){
        case SET_AUTH_USER:
            return action.userId;

        default:
            return state;
    }
}