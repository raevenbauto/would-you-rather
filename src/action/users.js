export const SET_USERS = "SET_USERS";

export function setUsers(users){
    return {
        users,
        type: SET_USERS
    }
}