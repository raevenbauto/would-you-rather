import {SET_AUTH_USER} from "../action/authedUser";

export default function authedUser(state = null, action){
    switch (action.type){
        case SET_AUTH_USER:
            return action.user;

        default:
            return state;
    }
}