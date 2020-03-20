import {_getUsers} from "../utilities/_DATA";

export default function setAuthedUser(user) {
    return {
        user,
        type: SET_AUTH_USER
    };
}

export const SET_AUTH_USER = "SET_AUTH_USER";



