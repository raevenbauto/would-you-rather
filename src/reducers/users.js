import {SET_USERS} from "../action/users";

export default function users(state = [], action){
    switch(action.type){
        case SET_USERS:
            return action.users;

        default:
            return state;
    }
}